import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { getProducts } from "../api/products";
import type { Product } from "../types/product";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const [initialError, setInitialError] = useState<string | null>(null);
    const [loadMoreError, setLoadMoreError] = useState<string | null>(null);

    const [retryCount, setRetryCount] = useState(0);

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    // دریافت محصولات از بک اند
    useEffect(() => {
        const controller = new AbortController();
        async function loadProducts() {
            try {
                if (page === 1) {
                    setLoading(true);
                    setInitialError(null);
                } else {
                    setLoadingMore(true);
                    setLoadMoreError(null);
                }

                const result = await getProducts(
                    page,
                    controller.signal,
                );

                setProducts((previousProducts) => {
                    if (page === 1) {
                        return result.products;
                    }

                    return [...previousProducts, ...result.products];
                });

                setTotalPages(result.pager.total_pages);

                toast.dismiss("load-more-error");
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error.name === "AbortError"
                ) {
                    return;
                }

                const message =
                    error instanceof Error
                        ? error.message
                        : "خطای ناشناخته‌ای رخ داد";

                if (page === 1) {
                    setInitialError(message);
                } else {
                    setLoadMoreError(message);
                    toast.error("دریافت محصولات بیشتر ناموفق بود", {
                        id: "load-more-error",
                        description: message,
                        duration: Infinity,
                        action: {
                            label: "تلاش دوباره",
                            onClick: () => {
                                toast.dismiss("load-more-error");
                                setRetryCount((count) => count + 1);
                            },
                        },
                    });
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                    setLoadingMore(false);
                }
            }
        }

        loadProducts();

        return () => {
            controller.abort();
        };
    }, [page, retryCount]);

    // بررسی اسکرول بی نهایت
    useEffect(() => {
        const element = loadMoreRef.current;

        if (
            !element ||
            loading ||
            loadingMore ||
            initialError ||
            loadMoreError ||
            page >= totalPages
        ) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPage((currentPage) => currentPage + 1);
                }
            },
            {
                rootMargin: "600px 0px",
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [
        loading,
        loadingMore,
        initialError,
        loadMoreError,
        page,
        totalPages,
    ]);

    function retry() {
        setRetryCount((count) => count + 1);
    }

    return {
        products,
        loading,
        loadingMore,
        initialError,
        loadMoreRef,
        retry,
        retryCount,
    };
}
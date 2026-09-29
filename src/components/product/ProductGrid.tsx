import type { RefObject } from "react";

import type { Product } from "../../types/product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

type ProductGridProps = {
  products: Product[];
  loading: boolean;
  loadingMore: boolean;
  initialError: string | null;
  loadMoreRef: RefObject<HTMLDivElement | null>;
  onRetry: () => void;
  retryCount: number;
};

export default function ProductGrid({
  products,
  loading,
  loadingMore,
  initialError,
  loadMoreRef,
  onRetry,
  retryCount,
}: ProductGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : initialError ? (
          <div className="col-span-full flex flex-col items-center gap-4 py-20">
            <p className="text-sm text-rose-600">
              دریافت محصولات با خطا مواجه شد.
            </p>

            <button
              type="button"
              onClick={onRetry}
              className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium"
            >
              تلاش دوباره ({retryCount})
            </button>
          </div>
        ) : products.length === 0 ? (
          <div className="col-span-full py-20 text-center text-sm text-neutral-500">
            محصولی پیدا نشد.
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

        {loadingMore &&
          Array.from({ length: 5 }).map((_, index) => (
            <ProductCardSkeleton key={`loading-more-${index}`} />
          ))}
      </div>

      <div ref={loadMoreRef} className="h-px" />
    </>
  );
}

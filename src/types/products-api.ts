import type { Product } from "./product";

export type ApiWidget = {
    type: string;
    data: unknown;
};

export type ProductWidget = {
    type: "product";
    data: Product;
};

export type ProductListingData = {
    widgets: ApiWidget[];
    pager: ProductsPager;
};

export type ProductListingWidget = {
    type: string;
    data: ProductListingData;
};

export type ProductsApiResponse = {
    status: number;

    data: {
        widgets: ProductListingWidget[];
    };
};

export function isProductWidget(
    widget: ApiWidget,
): widget is ProductWidget {
    return widget.type === "product";
}

export type ProductsPager = {
    current_page: number;
    total_items: number;
    total_pages: number;
    total_slots: number;
};

export type ProductsResult = {
    products: Product[];
    pager: ProductsPager;
};
import { isProductWidget, type ProductsApiResponse, type ProductsResult } from "../types/products-api";

export async function getProducts(
    page: number,
    signal?: AbortSignal,
): Promise<ProductsResult> {
    const response = await fetch(
        `/dk-api/discovery/api/v2/categories/11/products?page=${page}`,
        {
            signal,
        },
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const responseData: ProductsApiResponse = await response.json();
    console.log(responseData)

    const listing = responseData.data.widgets[0];

    const products = listing.data.widgets.filter(isProductWidget).map((item) => item.data);


    return {
        products,
        pager: listing.data.pager,
    };
}
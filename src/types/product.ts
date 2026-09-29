export type ProductColor = {
    id: number;
    title: string;
    code: string;
    hex_code: string;
};

export type ProductRating = {
    rate: number;
    count: number;
};

export type ProductImage = {
    main: {
        url: string[];
    };
};

export type ProductPrice = {
    selling_price: number;
    rrp_price: number;
    discount_percent: number;
    marketable_stock: number;
    is_incredible: boolean;
};

export type ProductVariant = {
    id: number;
    title: string;
    status: string;
    rate: number;
    lead_time: number;
    price: ProductPrice;
};

export type Product = {
    id: number;
    title_fa: string;
    title_en: string;
    status: string;

    images: ProductImage;
    colors: ProductColor[];

    rating?: ProductRating;
    default_variant?: ProductVariant;
    url: {
        uri: string
    }
};
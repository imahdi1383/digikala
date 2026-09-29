import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images.main.url[0];
  const price = product.default_variant?.price;
  const sellingPrice = price?.selling_price;
  const oldPrice = price?.rrp_price;
  const discountPercent = price?.discount_percent ?? 0;
  const stock = price?.marketable_stock ?? 0;
  const specialOffer = price?.is_incredible ?? false;
  const rating = product.rating ? product.rating.rate / 20 : null;

  return (
    <a href={product.url.uri}>
      <div className="relative flex h-full gap-4 p-5 hover:z-10 hover:bg-white hover:shadow-lg sm:min-h-117.5 sm:flex-col sm:gap-0 sm:px-3">
        <div className="flex w-40 shrink-0 flex-col sm:contents">
          {specialOffer && (
            <img
              className="mb-2 h-3.5 w-16 object-contain sm:mb-1 sm:self-start"
              alt="فروش ویژه"
              src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
            />
          )}

          <div className="relative mb-1 flex flex-col sm:h-71.25 sm:flex-none">
            {image && (
              <img
                className="mx-auto h-36 w-36 object-contain sm:mt-3 sm:h-56 sm:w-56"
                alt={product.title_fa}
                src={image}
              />
            )}
            {product.colors.length != 0 && (
              <div className="mx-auto flex gap-2 p-1 sm:absolute sm:top-0 sm:left-0 sm:flex-col">
                {product.colors.slice(0, 3).map((color) => (
                  <i
                    key={color.id}
                    title={color.title}
                    className="h-2 w-2 rounded-full border border-neutral-300"
                    style={{ backgroundColor: color.hex_code }}
                  />
                ))}
                {product.colors.length > 3 && (
                  <div
                    title="رنگ های بیشتر"
                    className="h-2 w-2 rounded-full bg-white text-center text-xs leading-2"
                  >
                    +
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-end sm:px-1">
          {product.title_fa && (
            <h3 className="line-clamp-2 min-h-12 text-xs leading-6 font-medium text-neutral-700">
              {product.title_fa}
            </h3>
          )}

          <div className="mt-2 flex min-h-8 flex-row-reverse items-center justify-between">
            {rating !== null && (
              <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-neutral-700">
                {rating.toLocaleString("fa-IR", {
                  maximumFractionDigits: 1,
                  minimumFractionDigits: 1,
                })}
                <b className="text-sm text-yellow-400">★</b>
              </span>
            )}
            {stock < 5 && stock != 0 && (
              <p className="text-[11px] text-rose-400">
                تنها {stock.toLocaleString("fa-IR")} عدد در انبار باقی مانده
              </p>
            )}
          </div>

          <div className="mt-1 flex flex-row-reverse items-center justify-between">
            {sellingPrice && (
              <span className="flex items-center gap-1 text-sm font-bold text-neutral-700">
                {sellingPrice.toLocaleString("fa-IR")}
                <svg
                  viewBox="0 0 1024 1024"
                  width="16"
                  height="16"
                  fill="#1f1f1f"
                >
                  <path d="M86.24 479.428l-0.907 0.913v224.192c0 48.388 9.239 83.153 27.719 104.303 18.834 21.146 50.462 31.718 94.884 31.718l21.809 0.004c19.901 0 36.781-4.48 50.641-13.44 14.215-9.323 23.987-26.167 29.318-50.539h2.132c-0.355 1.434-0.533 2.688-0.533 3.763v3.763c0 18.637 8.351 33.69 25.053 45.163 16.702 11.11 40.157 16.666 70.363 16.666 7.107 0 14.57-0.358 22.392-1.075 7.817-0.717 15.991-1.792 24.516-3.226l23.454-18.283c3.554-15.053 6.042-29.389 7.462-43.008 1.779-13.978 2.667-27.059 2.667-39.249 0-42.291-9.062-74.551-27.183-96.772-18.125-22.579-43.713-33.869-76.762-33.869-27.363 0-50.107 8.064-68.231 24.192-17.769 16.128-29.14 38.353-34.115 66.667l-1.348 6.861c-6.943 30.908-23.018 46.366-48.226 46.366l-23.408-0.004c-17.413 0-29.496-3.942-36.248-11.827-6.397-7.885-9.595-22.225-9.595-43.012v-180.518c-16.71-4.109-32.448-10.129-46.853-18.466l-0.318-0.183c-10.45-6.148-20.039-13.188-28.683-21.099zM355.013 695.936c6.397-6.093 15.459-9.139 27.186-9.139 12.438 0 22.033 4.838 28.785 14.515 7.107 9.677 10.661 24.73 10.661 45.163 0 2.867-0.177 5.914-0.533 9.139 0 2.867-0.178 5.914-0.533 9.139-6.397 1.075-12.26 1.613-17.591 1.613-17.414 0-31.45-3.942-42.112-11.827-10.306-7.885-15.459-18.82-15.459-32.798 0-11.11 3.198-19.712 9.595-25.805zM947.2 710.588v-120.427h-77.295l3.2 110.212c0.354 14.336-2.667 24.192-9.062 29.568-6.042 5.018-17.054 7.526-33.045 7.526l-77.888 0.004c-1.421-34.052-6.929-61.649-16.521-82.795-9.242-21.15-21.5-36.561-36.787-46.238-15.279-10.035-32.512-15.053-51.703-15.053-18.125 0-35.183 4.838-51.174 14.515-15.987 9.318-29.137 23.296-39.441 41.933-9.954 18.283-14.929 40.683-14.929 67.204 0 34.769 9.417 61.291 28.254 79.569 18.833 17.924 44.062 26.884 75.695 26.884h34.645c-6.396 10.035-14.571 17.92-24.521 23.654-9.591 5.734-23.458 10.035-41.579 12.902l-6.972 1.195c-12.13 1.958-26.833 3.78-44.1 5.461l-21.956 1.95-5.329 7.526 14.921 75.268c60.062-1.792 105.374-13.261 135.932-34.406 30.921-20.787 50.82-51.972 59.703-93.551h80.546c41.583 0 71.787-9.502 90.624-28.497 19.187-18.995 28.783-47.13 28.783-84.407zM619.844 679.407c7.821-6.81 16.883-10.214 27.191-10.214 24.516 0 38.020 26.163 40.508 78.494h-37.312c-27.721 0-41.579-11.827-41.579-35.486 0-15.053 3.729-25.984 11.191-32.794zM753.677 531.183h145.523l5.333-5.376v-60.753h-150.857v66.129zM421.815 140.788l10.129 101.088c3.908 47.311-0.358 87.992-12.794 122.042-12.438 34.050-32.339 60.038-59.702 77.956-27.116 18.116-56.422 27.255-96.449 27.418 16.701 0-34.865 0.004-35.231 0.004-36.248 0-65.211-6.272-86.888-18.82-21.322-12.544-36.603-29.57-45.843-51.074-9.24-21.505-13.859-45.699-13.859-72.58 0-21.147 2.132-43.19 6.397-66.129 4.264-23.297 9.595-46.237 15.992-68.817h69.297v5.376c-4.62 21.147-8.707 41.219-12.26 60.215s-5.331 36.2-5.331 51.612c0 23.298 5.508 41.398 16.525 54.301 11.319 13.2 30.913 19.831 58.78 19.892l7.526-0.001c14.259-0.001 40.416-0.003 28.562-0.007 32.629-0.337 53.071-11.267 69.861-32.787 17.413-22.222 24.343-52.33 20.789-90.322l-12.26-119.367h76.76zM290.141 72.521v67.204l-5.33 5.376h-74.095v-72.58h79.425z" />
                </svg>
              </span>
            )}
            {discountPercent > 0 && (
              <span className="rounded-full bg-rose-700 px-2 py-0.5 text-xs font-bold text-white">
                {discountPercent.toLocaleString("fa-IR")}%
              </span>
            )}
          </div>
          {discountPercent > 0 && oldPrice && (
            <span className="ms-auto mt-1 pe-5 text-[11px] font-bold text-neutral-300 line-through">
              {oldPrice.toLocaleString("fa-IR")}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

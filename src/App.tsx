import { useProducts } from "./hooks/useProducts";
import ProductGrid from "./components/product/ProductGrid";

import Header from "./components/layout/Header";
import FiltersSidebar from "./components/filters/FiltersSidebar";
import MobileFiltersBar from "./components/filters/MobileFiltersBar";
import MobileSuggestedFilters from "./components/filters/MobileSuggestedFilters";
import SupportButton from "./components/layout/SupportButton";
import Breadcrumb from "./components/navigation/Breadcrumb";
import CategoryHeader from "./components/navigation/CategoryHeader";
import { MobileBottomNav } from "./components/layout/MobileBottomNav";

export default function App() {
  const {
    products,
    loading,
    loadingMore,
    initialError,
    loadMoreRef,
    retry,
    retryCount,
  } = useProducts();

  return (
    <div dir="rtl" className="min-h-screen bg-white text-neutral-800">
      <Header />

      <main className="pb-16 lg:pb-0">
        {/* Breadcrumb + Category title */}
        <Breadcrumb />

        {/* Mobile sticky filters */}
        <MobileFiltersBar />
        <MobileSuggestedFilters />
        <CategoryHeader />

        {/* Desktop sidebar + products */}
        <div className="lg:grid lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-4 lg:px-8">
          <FiltersSidebar />

          <section className="min-w-0">
            <ProductGrid
              products={products}
              loading={loading}
              loadingMore={loadingMore}
              initialError={initialError}
              loadMoreRef={loadMoreRef}
              onRetry={retry}
              retryCount={retryCount}
            />
          </section>
        </div>
      </main>

      <SupportButton />
      <MobileBottomNav />
    </div>
  );
}

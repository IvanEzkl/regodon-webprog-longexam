import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
          Products
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#355872] sm:text-4xl">
          Shop campus essentials in a simple product grid
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[#355872]/85 sm:text-base">
          Browse practical items for class, study, commute, and everyday campus routines.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#355872]">Product card grid</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage
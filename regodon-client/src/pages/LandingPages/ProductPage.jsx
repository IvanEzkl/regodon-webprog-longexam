import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="section-shell">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-[#355872]">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      
      <section className="section-shell">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#355872] sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#355872]/85">
            <span className="font-bold text-[#355872]">{product.price}</span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#355872] bg-[#9CD5FF]/30">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-[#355872]">
            {product.content.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap text-base leading-7 text-[#355872]/90">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#355872] pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
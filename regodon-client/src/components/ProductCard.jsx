import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-[#355872] bg-white/65 p-4">
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#9CD5FF]/30">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7AAACE]">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#355872]">{product.title}</h3>
      <p className="mt-2 text-base font-bold text-[#355872]">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-[#355872]/85">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;

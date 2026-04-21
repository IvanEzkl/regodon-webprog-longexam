import Button from '../../components/Button';
import banner from '../../assets/img/banner-nu-manila.webp';
import products from '../../assets/product-content.js';


const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-[#7AAACE] bg-white/65 p-6">
            <div className="relative min-h-142 overflow-hidden rounded-[1.25rem] bg-[#9CD5FF]/30">
              <img
                src={banner}
                alt="National University Manila campus"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#355872]/30" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#355872] sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#355872]/85 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-7">
          <p className="micro-label">
            Store Overview
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-[#355872] sm:text-4xl">What we offer</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="surface-card min-h-36 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
              Product Line
            </p>
            <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">16</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
              Available Items
            </p>
          </div>
          <div className="surface-card min-h-36 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
              Catalog Mix
            </p>
            <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">04</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
              Categories
            </p>
          </div>
          <div className="surface-card min-h-36 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
              Availability
            </p>
            <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">Flexible</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
              In Stock &amp; Preorder
            </p>
          </div>
          <div className="surface-card min-h-36 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
              Target Users
            </p>
            <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">NU</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
              Students
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
            Store Flow
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-[#355872] sm:text-4xl">How it works</h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="surface-card p-4 sm:p-5">
              <h3 className="font-serif text-3xl leading-none text-[#355872]">Browse by Category</h3>
              <p className="mt-3 text-sm leading-7 text-[#355872]/80">
                Quickly explore uniforms, books, and merchandise organized for easy navigation.
              </p>
            </article>

            <article className="surface-card p-4 sm:p-5">
              <h3 className="font-serif text-3xl leading-none text-[#355872]">Select Your Items</h3>
              <p className="mt-3 text-sm leading-7 text-[#355872]/80">
                View product details, pricing, and availability before placing your order.
              </p>
            </article>

            <article className="surface-card p-4 sm:p-5">
              <h3 className="font-serif text-3xl leading-none text-[#355872]">Order &amp; Pickup</h3>
              <p className="mt-3 text-sm leading-7 text-[#355872]/80">
                Place your order online and wait for updates on when your items are ready.
              </p>
            </article>
          </div>

          <div className="mt-10 surface-card p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
              Category Grid
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-tight text-[#355872]">Shop categories</h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                <img src={products[11].image} alt="Shop Category One" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                <img src={products[8].image} alt="Shop Category Two" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                <img src={products[0].image} alt="Shop Category Three" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                <img src={products[3].image} alt="Shop Category Four" className="h-full w-full object-cover" />
              </div>
            </div>

            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
import Button from '../../components/Button';
import banner from '../../assets/img/nu-banner.jpg';
import products from '../../assets/product-content.js';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[20rem] overflow-hidden border-b-2 border-[#355872] bg-[#355872] px-4 py-10 sm:min-h-[23rem] sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#355872]/55" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9CD5FF]">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-[#F7F8F0] sm:text-4xl">
                            Welcome to BulldogExchange Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-[#F7F8F0]/95 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="mb-7">
                    <p className="micro-label">
                        Store Overview
                    </p>
                    <h2 className="mt-2 font-serif text-3xl leading-tight text-[#355872] sm:text-4xl">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="surface-card min-h-36 p-4 sm:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
                            Live Catalog
                        </p>
                        <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">16</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
                            Products
                        </p>
                    </div>
                    <div className="surface-card min-h-36 p-4 sm:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
                            Easy Navigation
                        </p>
                        <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">03</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
                            Categories
                        </p>
                    </div>
                    <div className="surface-card min-h-36 p-4 sm:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7AAACE]">
                            Flexible Fulfillment
                        </p>
                        <p className="mt-3 text-4xl font-bold leading-none text-[#355872]">28</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]/70">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="mb-7">
                    <p className="micro-label">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 font-serif text-3xl leading-tight text-[#355872] sm:text-4xl">Product categories</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="surface-card flex h-full flex-col p-3 sm:p-4">
                        <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                            <img src={products[2].image} alt="Daily Essentials" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 font-serif text-3xl leading-none text-[#355872]">Uniforms</h3>
                        <p className="mt-3 text-sm leading-7 text-[#355872]/80">
                            Medtech, tourism, and traditional uniforms for school requirements.
                        </p>
                        <Button to="/products" className="mt-5" variant="primary">View Products</Button>
                    </article>

                    <article className="surface-card flex h-full flex-col p-3 sm:p-4">
                        <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                            <img src={products[4].image} alt="Study Supplies" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 font-serif text-3xl leading-none text-[#355872]">Medical Books</h3>
                        <p className="mt-3 text-sm leading-7 text-[#355872]/80">
                            RLE manuals and medical study references for coursework and reviews.
                        </p>
                        <Button to="/products" className="mt-5" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="surface-card flex h-full flex-col p-3 sm:p-4">
                        <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-[#9CD5FF]/30">
                            <img src={products[12].image} alt="Campus Apparel" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 font-serif text-3xl leading-none text-[#355872]">NU Merch</h3>
                        <p className="mt-3 text-sm leading-7 text-[#355872]/80">
                            Bag tags, caps, and lanyards designed for everyday Nationalian use.
                        </p>
                        <Button to="/products" className="mt-5" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#355872] bg-[#F7F8F0] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
            Error
          </p>
          <h1 className="text-6xl font-bold leading-tight text-[#355872] sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-[#355872]">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex gap-3">
            <Button
              to="/"
              className="border-[#355872] bg-[#355872] text-[#F7F8F0] hover:bg-[#7AAACE] hover:text-[#355872]"
            >
              Back Home
            </Button>
            <Button
              to="/products"
              className="border-[#355872] bg-[#9CD5FF] text-[#355872] hover:bg-[#7AAACE]"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#355872] bg-[#F7F8F0] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7AAACE]">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#355872]">Explore the site</h2>
          
          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-[#355872] bg-[#9CD5FF]/20 p-4">
              <h3 className="font-semibold text-[#355872]">Home</h3>
              <p className="mt-1 text-sm text-[#355872]">Return to the homepage</p>
              <Button
                to="/"
                className="mt-3 border-[#355872] bg-[#355872] text-[#F7F8F0] hover:bg-[#7AAACE] hover:text-[#355872]"
              >
                Go Home
              </Button>
            </div>
            
            <div className="rounded-3xl border-2 border-[#355872] bg-[#9CD5FF]/20 p-4">
              <h3 className="font-semibold text-[#355872]">Products</h3>
              <p className="mt-1 text-sm text-[#355872]">Browse all featured store items</p>
              <Button
                to="/products"
                className="mt-3 border-[#355872] bg-[#9CD5FF] text-[#355872] hover:bg-[#7AAACE]"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage

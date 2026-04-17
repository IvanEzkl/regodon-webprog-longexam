import { NavLink } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#7AAACE] bg-[#355872] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9CD5FF]">
            BulldogEx
          </p>
          <p className="mt-2 text-2xl font-bold text-[#F7F8F0]">Campus Shop</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-[#7AAACE]">
            Your daily campus essentials in one place, with a simpler shopping flow.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9CD5FF]">
            Quick Links
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer">
            {footerLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'w-fit rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
                    isActive
                      ? 'border-[#9CD5FF] bg-[#9CD5FF] text-[#355872]'
                      : 'border-[#7AAACE] text-[#F7F8F0] hover:border-[#9CD5FF] hover:bg-[#9CD5FF]/20 hover:text-[#9CD5FF]',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9CD5FF]">
            Account
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Authentication">
            {authLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'w-fit rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CD5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#355872]',
                    isActive
                      ? 'border-[#9CD5FF] bg-[#9CD5FF] text-[#355872]'
                      : 'border-[#7AAACE] text-[#F7F8F0] hover:border-[#9CD5FF] hover:bg-[#9CD5FF]/20 hover:text-[#9CD5FF]',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9CD5FF]">
            Store Note
          </p>
          <div className="mt-3 rounded-3xl border border-[#7AAACE] bg-[#F7F8F0]/10 p-4">
            <p className="text-sm font-semibold text-[#F7F8F0]">Mon to Fri</p>
            <p className="mt-1 text-sm text-[#7AAACE]">8:00 AM to 5:00 PM campus pickup window</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#355872] bg-[#355872] text-[#F7F8F0]'
      : 'border-transparent text-[#355872]/70 hover:border-[#355872] hover:bg-[#9CD5FF]/25 hover:text-[#355872]',
  ].join(' ');

const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CD5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8F0]',
    isActive
      ? 'border-[#355872] bg-[#355872] text-[#F7F8F0]'
      : 'border-[#355872] text-[#355872] hover:bg-[#9CD5FF]/25',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#355872] bg-[#F7F8F0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-[#355872] bg-[#F7F8F0] object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-[#355872]">BulldogExchange Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <nav className="flex items-center gap-2" aria-label="Account">
          {authLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={authLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

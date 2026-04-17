import { Outlet } from 'react-router-dom';
import heroBackground from '../assets/img/hero.jpg';

const AuthLayout = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#355872] text-[#355872]">
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#355872]/55" />

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
        <main className="w-full max-w-xl rounded-3xl border border-[#7AAACE]/60 bg-[#F7F8F0]/96 p-6 shadow-[0_14px_40px_rgba(28,49,66,0.28)] backdrop-blur-[2px] sm:p-8">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;

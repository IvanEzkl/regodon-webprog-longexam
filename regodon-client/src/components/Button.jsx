import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-[#355872] text-[#F7F8F0] hover:bg-[#7AAACE] hover:text-[#355872]',
  secondary: 'bg-[#F7F8F0] text-[#355872] hover:bg-[#9CD5FF]/40',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-[#355872] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

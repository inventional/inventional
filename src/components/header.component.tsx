import Link from 'next/link';

import Logo from '@/assets/svgs/logo.svg';
import clsx from 'clsx';

type NavLinkProps = {
  href: string;
  label: string;
};

const navLinks: NavLinkProps[] = [
  { label: 'Our Services', href: '/' },
  { label: 'Past Projects', href: '/404' },
  { label: 'Functionalities', href: '/404' },
  { label: 'Inventionionals', href: '/404' },
  { label: 'Case Studies', href: '/404  ' },
];

export default function Header() {
  // TODO: Add current nav link (while scrolling, etc.)
  const currentNav = navLinks[0];

  return (
    <header className="flex h-16 w-full flex-row items-center justify-between bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <Logo
        width={32}
        height={32}
        className="cursor-pointer fill-sky-500 transition duration-150 ease-in-out hover:animate-spin"
      />

      <nav className="hidden lg:block">
        <ul className="flex items-start justify-start gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              id={label}
              key={href}
              href={href}
              className={clsx(
                'text-sm text-[#6B7280] hover:text-opacity-80',
                currentNav.href === href && 'font-medium'
              )}>
              {label}
            </Link>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2">
        <span className="text-sm font-medium uppercase text-white">Contact Us</span>
      </button>
    </header>
  );
}

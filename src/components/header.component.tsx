import Link from 'next/link';

import clsx from 'clsx';

import Logo from '@/assets/svgs/logo.svg';

type NavLinkProps = {
  href: string;
  label: string;
};

const navLinks: NavLinkProps[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Functionalities', href: '#functionalities' },
  { label: 'Inventionionals', href: '#inventionionals' },
];

export default function Header() {
  const currentNav = navLinks[0];

  return (
    <header className="flex h-16 w-full flex-row items-center justify-between bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <Logo
        width={32}
        height={32}
        className="cursor-pointer fill-sky-500 transition duration-150 ease-in-out hover:animate-spin"
      />

      <nav className="hidden lg:block">
        <ul className="flex items-center justify-start gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                id={label}
                href={href}
                className={clsx(
                  'text-sm text-gray-800 hover:text-opacity-80',
                  currentNav.href === href && 'font-medium'
                )}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="#contact"
        className="flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium uppercase text-white hover:bg-blue-700">
        Contact Us
      </Link>
    </header>
  );
}

import { FiSend } from 'react-icons/fi';
import Link from 'next/link';

interface FooterSection {
  label: string;
  children: { label: string; href: string }[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    label: 'Policy',
    children: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
  {
    label: 'Contact',
    children: [
      { label: 'Email', href: '/email' },
      { label: 'Telegram', href: '/telegram' },
      { label: 'Instagram', href: '/instagram' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Branding', href: '/branding' },
      { label: 'Customers', href: '/customers' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex animate-gradient-xy flex-col items-start justify-between gap-8 bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-12 lg:flex-row lg:items-center lg:px-24 lg:py-24">
      <div>
        <h1 className="text-2xl font-bold text-[#F4F3FF] md:max-w-md">
          You like our work?! <br />
          Subscribe to our newsletter!
        </h1>

        <div className="subscribeInput mt-4 flex flex-row items-center justify-between gap-4 rounded-md bg-[#F4F3FF] px-4 py-2 lg:mt-8">
          <input
            type="text"
            placeholder="Enter your email to contact us"
            className="w-full border-none bg-transparent text-sm font-normal uppercase text-[#2E2D3F] outline-none"
          />

          <FiSend className="h-6 w-6" color="#2E2D3F" size={24} />
        </div>
      </div>

      <div className="flex w-fit flex-col gap-4 lg:flex-row lg:gap-48">
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.label} className="flex flex-col">
            <ul>
              <li className="mb-2 text-lg font-semibold text-[#F4F3FF]">{section.label}</li>

              {section.children.map((child) => (
                <li key={child.label}>
                  <Link
                    href={child.href}
                    className="flex items-center text-right text-sm font-normal text-[#E6E5F2] transition-all duration-300 hover:ml-1 hover:text-white">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

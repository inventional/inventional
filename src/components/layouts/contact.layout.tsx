import BackgroundDecoration from '@/assets/svgs/background-decoration.svg';
import { LayoutProps } from '@/typings/components';

import ContactForm from '../contact.component';

export default function Contact(props: LayoutProps) {
  return (
    <div {...props} className="flex h-fit items-center justify-center bg-white">
      <section className="relative mb-12 flex h-full w-full overflow-hidden bg-sky-100 py-12 lg:h-[75vh] lg:w-[75vw] lg:rounded-3xl">
        <div className="flex flex-1">
          <BackgroundDecoration className="absolute -right-96 -top-96 h-[75vh] w-auto origin-top-left" />

          <div className="top-0 m-auto flex flex-col items-center justify-start gap-8">
            <h2 className="text-center text-3xl font-bold text-[#0081F1] md:text-5xl">
              Let&apos;s get in touch!
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

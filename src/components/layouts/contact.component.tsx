'use client';

import { AiOutlineArrowDown } from 'react-icons/ai';

import BackgroundDecoration from '@/assets/svgs/background-decoration.svg';
import { LayoutProps } from '@/typings/components';

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

            <form
              action="."
              className="flex w-[85vw] flex-col gap-4 lg:w-full"
              onSubmit={(event) => {
                event.preventDefault();

                const name = (document.getElementById('name') as HTMLInputElement).value;
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const message = (document.getElementById('message') as HTMLInputElement).value;
                const subject = (document.getElementById('subject') as HTMLInputElement).value;

                alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}`);
              }}>
              <div className="flex w-full flex-col gap-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="h-14 rounded-lg bg-white px-4 py-2 outline-none"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-lg bg-white px-4 py-2 outline-none"
                />
              </div>

              <div className="relative w-full">
                <select
                  id="subject"
                  className="flex h-14 w-full cursor-pointer appearance-none rounded-lg bg-white p-2.5 text-sm outline-none">
                  {[
                    'General',
                    'Conversational',
                    'AI-Enhanced Software Development',
                    'Artificial Intelligence Consulting',
                    'Natural Language Processing Consulting',
                  ].map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <AiOutlineArrowDown className="text-gray-400" />
                </div>
              </div>

              <textarea
                id="message"
                placeholder="Enter your message"
                className="h-56 resize-none rounded-lg bg-white px-4 py-2 outline-none"
              />

              <button
                type="submit"
                className="flex h-12 items-center justify-center gap-2.5 rounded-lg bg-blue-500 px-8 py-4 transition-colors hover:bg-blue-600">
                <span className="text-base font-medium uppercase text-white">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

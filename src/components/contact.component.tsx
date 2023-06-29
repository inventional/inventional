'use client';

import { useCallback } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

import axios from 'axios';

export default function ContactForm() {
  const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as unknown as Record<string, HTMLInputElement>;

    const response = await axios.post('/api/contact', {
      name: target.name.value,
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    });

    if (response.status >= 200 && response.status < 300 && response.data && response.data.success) {
      alert('Message sent successfully!');
    } else {
      alert('Message failed to send!');
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className="flex w-[85vw] flex-col gap-4 lg:w-full">
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
  );
}

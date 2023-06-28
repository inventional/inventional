import Image from 'next/image';
import Link from 'next/link';

import Robot from '@/assets/svgs/robot.svg';
import Consulting from '@/assets/svgs/services/consulting.svg';
import Diversity from '@/assets/svgs/services/diversity.svg';
import Integration from '@/assets/svgs/services/integration.svg';
import Language from '@/assets/svgs/services/language.svg';
import Networking from '@/assets/svgs/services/networking.svg';
import Solidarity from '@/assets/svgs/services/solidarity.svg';
import Header from '@/components/header.component';
import Trademark from '@/components/trademark.component';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <AboutUs />
      <TextCard />
      <Services />
    </main>
  );
}

function Landing() {
  return (
    <div className="flex h-screen flex-grow animate-gradient-xy flex-col items-center justify-start bg-gradient-to-r from-blue-500 to-blue-600 text-center">
      <Header />

      <div className="flex w-full flex-grow select-none flex-col items-center justify-center">
        <Trademark />

        <span className="md:text-md text-xl font-normal uppercase text-white/90">
          Inventing the unimaginable
        </span>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="flex flex-col-reverse justify-between gap-8 p-4 py-12 lg:flex lg:flex-row lg:px-16">
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
        <h1 className="text-2xl font-semibold text-[#20252A] lg:text-4xl">ABOUT US</h1>

        <p className="max-w-[68ch] text-center text-sm text-[#6B7280] lg:text-start lg:text-base">
          At Inventional, we know that AI can be daunting. That&apos;s why we&apos;re dedicated to
          making our solutions clear and concise, eliminating the tech jargon so you can focus on
          what truly matters — successfully implementing AI strategies to maximize business
          potential.
          <br />
          <br />
          With over 7 years of experience in conversational and AI technology, and more than 100
          successful projects under our belt, our team is well-equipped to guide your organization
          through the complexities of AI, streamlining the process for impactful results.
        </p>

        <button
          type="button"
          className="max-w-none rounded-md bg-blue-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white lg:max-w-fit">
          <span className="text-center text-sm font-medium text-white">More Details</span>
        </button>
      </div>

      <div className="flex justify-center">
        <Robot className="h-[35vh] lg:h-[65vh]" />
      </div>
    </div>
  );
}

function TextCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 py-24 text-center">
      <h1 className="text-2xl font-semibold text-white lg:text-4xl">
        Accelerate Success with AI-Driven Solutions
      </h1>

      <p className="max-w-[68ch] text-sm text-white/90 lg:text-base">
        Partnering with Inventional signifies a commitment to results. Our success-oriented AI
        solutions amplify productivity and streamline efficiencies, catapulting your business into a
        future marked by exceptional growth and outstanding achievement.
      </p>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;

  imageUri: React.FC<React.SVGProps<SVGSVGElement>>;
}

const SERVICE_CARDS: ServiceCardProps[] = [
  {
    title: 'Conversational',
    description:
      'Our AI-driven text and voice messaging solutions ensure you have the ability to ensure seamless, uninterrupted conversations about you, your business or any other entity. ',
    imageUri: Networking,
  },
  {
    title: 'AI Consultancy',
    description:
      ' Reinvent your industry landscape with our consultancy services, pioneering next-generation solutions tailored to your unique sector challenges and driving success through innovation.',
    imageUri: Consulting,
  },
  {
    title: 'Natural Language Processing',
    description:
      'Implement speech recognition, sentiment analysis within user feedback or reviews, text summarization & classification and more.',
    imageUri: Language,
  },
  {
    title: '3rd party integrations',
    description:
      "Enhance your organization's productivity by integrating your existing CRM, CMS or ERP systems or connect help-desk platforms such as Zendesk to amplify your impact.",
    imageUri: Diversity,
  },
  {
    title: 'Generative Tasks',
    description:
      'Create immersive digital experiences, improve accuracy or unlock any of the limitless possibilities. Your imagination is the only limitation.',
    imageUri: Integration,
  },
  {
    title: 'AI-Enhanced Websites',
    description:
      'Your digit  al presence matters. A first impression matters. Maximize your online presence with Inventional, as we create AI-Enhanced Websites designed to captivate and engage users, increasing website traffic and conversions.',
    imageUri: Solidarity,
  },
];

function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-4 py-24 text-center lg:px-24">
      <div className="flex flex-col gap-4">
        <h1 className="select-none text-3xl font-extrabold text-[#20252A] lg:text-4xl">
          Our
          <span className="relative mx-1 ml-2 inline-block stroke-current">
            Services
            <svg
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-1.5 max-h-4 w-full text-[#018BF1]"
              preserveAspectRatio="none">
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                stroke-width="2"></path>
            </svg>
          </span>
        </h1>

        <p className="max-w-[52ch] text-center text-sm font-normal text-[#6B7280] lg:leading-8">
          Witness a new era of success as our cutting-edge AI services set your business apart from
          the competition.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICE_CARDS.map(({ title, description, imageUri: ImageUri }) => (
          <li
            key={title}
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-[#CBCCCD] bg-white p-8 text-center transition-all duration-300 ease-in-out hover:border-transparent hover:shadow-xl md:w-80">
            <ImageUri className="mb-6 h-24 w-24" />

            <h1 className="mb-4 text-xl font-semibold capitalize text-[#20252A]">{title}</h1>
            <p className="text-[#4B5563]">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

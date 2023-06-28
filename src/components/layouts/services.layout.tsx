import Consulting from '@/assets/svgs/services/consulting.svg';
import Diversity from '@/assets/svgs/services/diversity.svg';
import Integration from '@/assets/svgs/services/integration.svg';
import Language from '@/assets/svgs/services/language.svg';
import Networking from '@/assets/svgs/services/networking.svg';
import Solidarity from '@/assets/svgs/services/solidarity.svg';

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

export default function Services() {
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
                strokeWidth="2"></path>
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

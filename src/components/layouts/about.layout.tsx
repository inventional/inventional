import Robot from '@/assets/svgs/robot.svg';

export default function About() {
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

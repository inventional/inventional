import Footer from '@/components/footer.component';
import About from '@/components/layouts/about.layout';
import Contact from '@/components/layouts/contact.layout';
import Landing from '@/components/layouts/landing.layout';
import Services from '@/components/layouts/services.layout';

import Particles from './particles';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing id="landing" />
      <About id="about" />

      <div className="flex flex-col items-center justify-center gap-2 bg-black/10 py-24 text-center backdrop-blur-sm">
        <h1 className="text-2xl font-semibold text-white lg:text-4xl">
          Accelerate Success with AI-Driven Solutions
        </h1>

        <p className="max-w-[68ch] text-sm text-white/90 lg:text-base">
          Partnering with Inventional signifies a commitment to results. Our success-oriented AI
          solutions amplify productivity and streamline efficiencies, catapulting your business into
          a future marked by exceptional growth and outstanding achievement.
        </p>
      </div>

      <Services id="services" />
      <Contact id="contact" />
      <Footer id="footer" />

      <Particles
        id="tsparticles-custom"
        className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-500 to-blue-600"
      />
    </main>
  );
}

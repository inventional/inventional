import Contact from '@/components/contact.component';
import Footer from '@/components/footer.component';
import About from '@/components/layouts/about.layout';
import Landing from '@/components/layouts/landing.layout';
import Services from '@/components/layouts/services.layout';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <About />

      <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 py-24 text-center">
        <h1 className="text-2xl font-semibold text-white lg:text-4xl">
          Accelerate Success with AI-Driven Solutions
        </h1>

        <p className="max-w-[68ch] text-sm text-white/90 lg:text-base">
          Partnering with Inventional signifies a commitment to results. Our success-oriented AI
          solutions amplify productivity and streamline efficiencies, catapulting your business into
          a future marked by exceptional growth and outstanding achievement.
        </p>
      </div>

      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

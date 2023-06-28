import Header from '../header.component';
import Trademark from '../trademark.component';

export default function Landing() {
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

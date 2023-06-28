import React from 'react';

import { LayoutProps } from '@/typings/components';

import Header from '../header.component';
import Trademark from '../trademark.component';

export default function Landing(props: LayoutProps) {
  return (
    <div {...props} className="flex h-screen flex-grow flex-col items-center text-center">
      <Header />

      <div className="flex h-full w-full select-none flex-col items-center justify-center">
        <Trademark />

        <span className="md:text-md text-xl font-normal uppercase text-white/90">
          Inventing the unimaginable
        </span>
      </div>
    </div>
  );
}

import { ImageResponse } from 'next/server';

import Logo from '@/assets/svgs/logo.svg';

export default function Icon() {
  return new ImageResponse(<Logo width="32" height="32" />, {
    width: 32,
    height: 32,
  });
}

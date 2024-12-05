import { Inter, DM_Sans } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-dm-sans',
});

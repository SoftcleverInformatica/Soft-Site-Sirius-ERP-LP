import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Sirius ERP', description: 'Soft Clever' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pt-br' className='!scroll-smooth scrollbar-thin scrollbar-track-zinc-300 scrollbar-thumb-zinc-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-rounded-full'>
			<body className={''}>
				<GoogleTagManager gtmId='GTM-N2XFZPPM' />
				{children}
			</body>
		</html>
	);
}

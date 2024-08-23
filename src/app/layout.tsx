import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Sirius ERP', description: 'Soft Clever' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pt-br' className=' scrollbar-corner-rounded-full scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-[#f1f5f9]
		'>
			<body className={''}>
				<GoogleTagManager gtmId='GTM-N2XFZPPM' />
				{children}
			</body>
		</html>
	);
}

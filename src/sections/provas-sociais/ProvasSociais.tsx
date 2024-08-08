import Image from 'next/image';
import clientBax from '../../../public/assets/clients/bax.png';
import clientBinelli from '../../../public/assets/clients/binelli.png';
import clientBollatel from '../../../public/assets/clients/bollatel.png';
import clientColormix from '../../../public/assets/clients/colormix.png';
import clientCoopercas from '../../../public/assets/clients/coopercas.png';
import clientEscaleve from '../../../public/assets/clients/escaleve.png';
import clientPolar from '../../../public/assets/clients/polar.png';
import clientPortoro from '../../../public/assets/clients/portoro.png';

import { Carousel, CarouselContent, CarouselItem } from '@/src/components/ui/carousel';

export default function ProvasSociais() {
	const imgs: { alt: string; src: any }[] = [
		{ alt: 'Logo da empresa Bax', src: clientBax },
		{ alt: 'Logo da empresa Binelli', src: clientBinelli },
		{ alt: 'Logo da empresa Bollatel', src: clientBollatel },
		{ alt: 'Logo da empresa Colormix', src: clientColormix },
		{ alt: 'Logo da empresa Coopercas', src: clientCoopercas },
		{ alt: 'Logo da empresa Escaleve', src: clientEscaleve },
		{ alt: 'Logo da empresa Polar', src: clientPolar },
		{ alt: 'Logo da empresa Portoro', src: clientPortoro },
	];
	const depoimentos = [
		{ foto: 'foto do cliente', nome: 'Maria Silva', empresa: 'Empresa XYZ', depoimento: 'O ERP transformou completamente nossa forma de trabalhar. Aumentamos nossa eficiência e melhoramos nosso controle financeiro.' },
		{ foto: 'foto do cliente', nome: 'João Souza', empresa: 'Empresa ABC', depoimento: 'A integração entre departamentos facilitou muito nossa comunicação interna e a tomada de decisões.' },
	];

	return (
		<section className='w-full flex flex-col items-center '>
			<div className='max-w-5xl lg:max-w-6xl  xl:max-w-7xl w-full py-10 px-4 lg:px-24 flex flex-col gap-6 lg:gap-20 '>
				<div>
					<Carousel className='w-full ' opts={{ loop: true }}>
						<CarouselContent>
							{imgs.map((_, index) => (
								<CarouselItem className='flex  justify-center md:basis-1/5 lg:basis-1/5 ' key={index}>
									<div className='flex  '>
										<Image className='self-center h-16 object-contain' alt={_.alt} src={_.src} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
				<h2 className='text-3xl lg:text-5xl font-extrabold leading-tight uppercase tracking-wide font-main'>O Que Nossos Clientes Dizem</h2>
				{depoimentos.map((_, i) => (
					<figure key={i} className='md:flex bg-slate-100 rounded-xl p-8 md:p-8 dark:bg-slate-800 '>
						<div className='w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto bg-red-200 '>{}</div>
						<div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
							<blockquote>
								<p className='text-lg font-medium'>“{_.depoimento}”</p>
							</blockquote>
							<figcaption className='font-medium'>
								<div className='text-sky-500 dark:text-sky-400'>{_.nome}</div>
								<div className='text-slate-700 dark:text-slate-500'>{_.empresa}</div>
							</figcaption>
						</div>
					</figure>
				))}
			</div>
		</section>
	);
}

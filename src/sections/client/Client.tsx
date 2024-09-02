import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import CountUp from 'react-countup';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import ButtonExpert from '@/components/button_expert';
import iconClient from '../../../public/assets/clients.svg';
import clientBax from '../../../public/assets/clients/bax.png';
import clientBinelli from '../../../public/assets/clients/binelli.png';
import clientBollatel from '../../../public/assets/clients/bollatel.png';
import clientColormix from '../../../public/assets/clients/colormix.png';
import clientCoopercas from '../../../public/assets/clients/coopercas.png';
import clientEscaleve from '../../../public/assets/clients/escaleve.png';
import clientPolar from '../../../public/assets/clients/polar.png';
import clientPortoro from '../../../public/assets/clients/portoro.png';
import iconProject from '../../../public/assets/project.svg';
import iconTeam from '../../../public/assets/team.svg';
import iconUser from '../../../public/assets/user.svg';

export default function Client() {
	const imgs: { alt: string; src: any }[] = [
		{
			alt: 'Logo da empresa Bax',
			src: clientBax,
		},
		{
			alt: 'Logo da empresa Binelli',
			src: clientBinelli,
		},
		{
			alt: 'Logo da empresa Bollatel',
			src: clientBollatel,
		},
		{
			alt: 'Logo da empresa Colormix',
			src: clientColormix,
		},
		{
			alt: 'Logo da empresa Coopercas',
			src: clientCoopercas,
		},
		{
			alt: 'Logo da empresa Escaleve',
			src: clientEscaleve,
		},
		{
			alt: 'Logo da empresa Polar',
			src: clientPolar,
		},
		{
			alt: 'Logo da empresa Portoro',
			src: clientPortoro,
		},
	];

	return (
		<div className='flex flex-col items-center gap-10 overflow-x-hidden px-[2.5rem] py-[1.8rem] lg:py-[3.625rem]'>
			<div className='flex w-full flex-col items-center gap-12 lg:max-w-2xl xl:max-w-4xl'>
				<h2 className='text-2xl font-bold text-sc'>São Mais de 30 anos de experiências</h2>
				<p className='text-lg text-sc'>Nós da Soft Clever temos o intuito de ter sua empresa como membro do nosso grupo e não somente como mais um cliente.</p>
				<div className='md:gap-15 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:gap-20'>
					{/* Users */}
					<div className='flex flex-col items-center justify-items-center gap-1.5'>
						<div className='gap- flex items-center justify-items-center gap-5'>
							<Image className='' alt='Ícone de clientes' src={iconUser}></Image>
							<div className='flex flex-col items-start justify-items-center gap-2'>
								<p className='font-sc text-lg font-extrabold text-sc'>USUÁRIOS</p>
								<p className='text-lg font-extrabold text-pv1'>
									<CountUp duration={2} separator='' delay={1} start={0} end={12000} /> +
								</p>
							</div>
						</div>
						<div>
							<p className='text-base font-extrabold text-sc'>+ de 12000</p>
							<p className='text-base font-extrabold text-sc'>USUÁRIOS</p>
						</div>
					</div>
					{/* Clients */}
					<div className='flex flex-col items-center justify-items-center gap-1.5'>
						<div className='gap- flex items-center justify-items-center gap-5'>
							<Image className='' alt='Ícone de clientes' src={iconClient}></Image>
							<div className='flex flex-col items-start justify-items-center gap-2'>
								<p className='font-sc text-lg font-extrabold text-sc'>CLIENTES</p>
								<p className='text-lg font-extrabold text-pv1'>
									<CountUp duration={2} separator='' delay={1} start={0} end={3700} /> +
								</p>
							</div>
						</div>
						<div>
							<p className='text-base font-extrabold text-sc'>+ de 3700</p>
							<p className='text-base font-extrabold text-sc'>CLIENTES</p>
						</div>
					</div>
					{/* Team */}
					<div className='flex flex-col items-center justify-items-center gap-1.5'>
						<div className='flex items-center justify-items-center gap-5'>
							<Image className='' alt='Ícone de clientes' src={iconTeam}></Image>
							<div className='flex flex-col flex-wrap items-start justify-items-center gap-2'>
								<p className="whitespace-pre-wrap font-sc text-lg font-extrabold text-sc before:content-['NOSSA\\\\A_EQUIPE'] sm:before:content-['NOSSA_EQUIPE']"></p>
								<p className='text-lg font-extrabold text-pv1'>
									<CountUp duration={2} separator='' delay={1} start={0} end={20} /> +
								</p>
							</div>
						</div>
						<div>
							<p className='text-base font-extrabold text-sc'>+ de 20</p>
							<p className='text-base font-extrabold text-sc'>FUNCIONÁRIOS</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Carousel plugins={[Autoplay({ delay: 1500 })]} className='w-full lg:max-w-xl xl:max-w-2xl'>
					<CarouselContent>
						{imgs.map((_, index) => (
							<CarouselItem className='flex justify-center md:basis-1/5 lg:basis-1/5' key={index}>
								<div className='flex'>
									<Image className='h-16 self-center object-contain' alt={_.alt} src={_.src} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* <CarouselPrevious />
      <CarouselNext /> */}
				</Carousel>
			</div>
			<ButtonExpert color={'orange'} label='Fale com um especialista' />
		</div>
	);
}

'use client';

import { useEffect, useState } from 'react';
import adrianahair from '@/../public/assets/clients/adriana-hair.jpg';
import aia from '@/../public/assets/clients/aia.png';
import albusclinic from '@/../public/assets/clients/albus-clinic.jpg';
import alinhastro from '@/../public/assets/clients/alinhastro.jpg';
import aquiobichopega from '@/../public/assets/clients/aqui-o-bicho-pega.png';
import artvenite from '@/../public/assets/clients/art-venite.png';
import ativaportariainteligente from '@/../public/assets/clients/ativa-portaria-inteligente.png';
import barbaraconservas from '@/../public/assets/clients/barbara-conservas.jpg';
import bichochic from '@/../public/assets/clients/bicho-chic.jpg';
import brasilsistemas from '@/../public/assets/clients/brasil-sistemas.jpeg';
import brumed from '@/../public/assets/clients/brumed.png';
import caviva from '@/../public/assets/clients/caviva-2.png';
import cse from '@/../public/assets/clients/cse.jpg';
import cspfix from '@/../public/assets/clients/csp-fix.jpeg';
import envelopack from '@/../public/assets/clients/envelopack.png';
import fastlaser from '@/../public/assets/clients/fastlaser.jpeg';
import fenixgas from '@/../public/assets/clients/fenixgas.jpg';
import goldenmix from '@/../public/assets/clients/golden-mix.png';
import grmodas from '@/../public/assets/clients/gr-modas.jpg';
import infini from '@/../public/assets/clients/infini.png';
import infoline from '@/../public/assets/clients/infoline.png';
import irmaosbozza from '@/../public/assets/clients/irmaos-bozza.jpg';
import jaccdoces from '@/../public/assets/clients/jacc-doces.jpg';
import jcrbblocos from '@/../public/assets/clients/jcrb-blocos.png';
import lira from '@/../public/assets/clients/lira.png';
import logocasadobar from '@/../public/assets/clients/logo-casa-do-bar.png';
import mainard from '@/../public/assets/clients/mainard.jpg';
import miamibilhares from '@/../public/assets/clients/miami-bilhares.png';
import motodakar from '@/../public/assets/clients/motodakar.png';
import nanichinelato from '@/../public/assets/clients/nani-chinelato.jpg';
import nanoblindagens from '@/../public/assets/clients/nano-blindagens.png';
import oculosmania from '@/../public/assets/clients/oculos-mania.png';
import petshopbiori from '@/../public/assets/clients/pet-shop-biori.jpg';
import pontodopadeiro from '@/../public/assets/clients/ponto-do-padeiro.png';
import pontualpolimeros from '@/../public/assets/clients/pontual-polimeros.png';
import ramos from '@/../public/assets/clients/ramos.jpg';
import ramsor from '@/../public/assets/clients/ramsor.png';
import rikwill from '@/../public/assets/clients/rikwill.jpg';
import riquella from '@/../public/assets/clients/riquella.png';
import roma from '@/../public/assets/clients/roma.jpg';
import rvcautomacao from '@/../public/assets/clients/rvc-automacao.jpeg';
import saltoja from '@/../public/assets/clients/saltoja.jpg';
import tecnigrav from '@/../public/assets/clients/tecnigrav.png';
import tressar from '@/../public/assets/clients/tressar.png';
import tugumi from '@/../public/assets/clients/tugumi.jpg';
import tussar from '@/../public/assets/clients/tussar.jpg';
import { Star, User } from '@phosphor-icons/react/dist/ssr';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ReadMore } from '@/components/ReadMore';
import clientBax from '../../../public/assets/clients/bax.png';
import clientBinelli from '../../../public/assets/clients/binelli.png';
import clientBollatel from '../../../public/assets/clients/bollatel.png';
import clientColormix from '../../../public/assets/clients/colormix.png';
import clientCoopercas from '../../../public/assets/clients/coopercas.png';
import clientEscaleve from '../../../public/assets/clients/escaleve.png';
import clientPolar from '../../../public/assets/clients/polar.png';
import clientPortoro from '../../../public/assets/clients/portoro.png';

export default function ProvasSociais() {
	const imgs: { alt: string; src: any }[] = [
		{ alt: 'Logo da empresa Polar', src: clientPolar },
		{ alt: 'Logo da empresa Binelli', src: clientBinelli },
		{ alt: 'Logo da empresa Bax', src: clientBax },
		{ alt: 'Logo da empresa Bollatel', src: clientBollatel },
		{ alt: 'Logo da empresa Escaleve', src: clientEscaleve },
		{ alt: 'Logo da empresa Portoro', src: clientPortoro },
		{ alt: 'Logotipo', src: albusclinic },
		{ alt: 'Logotipo', src: alinhastro },
		{ alt: 'Logotipo', src: aquiobichopega },
		{ alt: 'Logotipo', src: artvenite },
		{ alt: 'Logotipo', src: ativaportariainteligente },
		{ alt: 'Logotipo', src: barbaraconservas },
		{ alt: 'Logotipo', src: aia },
		{ alt: 'Logotipo', src: brasilsistemas },
		{ alt: 'Logotipo', src: bichochic },
		{ alt: 'Logotipo', src: brumed },
		{ alt: 'Logotipo', src: caviva },
		{ alt: 'Logotipo', src: cse },
		{ alt: 'Logotipo', src: cspfix },
		{ alt: 'Logotipo', src: fastlaser },
		{ alt: 'Logotipo', src: adrianahair },
		{ alt: 'Logotipo', src: envelopack },
		{ alt: 'Logotipo', src: goldenmix },
		{ alt: 'Logotipo', src: grmodas },
		{ alt: 'Logotipo', src: fenixgas },
		{ alt: 'Logotipo', src: infini },
		{ alt: 'Logotipo', src: infoline },
		{ alt: 'Logotipo', src: irmaosbozza },
		{ alt: 'Logotipo', src: jaccdoces },
		{ alt: 'Logotipo', src: jcrbblocos },
		{ alt: 'Logotipo', src: logocasadobar },
		{ alt: 'Logotipo', src: mainard },
		{ alt: 'Logotipo', src: motodakar },
		{ alt: 'Logotipo', src: miamibilhares },
		{ alt: 'Logotipo', src: nanichinelato },
		{ alt: 'Logotipo', src: lira },
		{ alt: 'Logotipo', src: oculosmania },
		{ alt: 'Logotipo', src: petshopbiori },
		{ alt: 'Logotipo', src: pontodopadeiro },
		{ alt: 'Logotipo', src: nanoblindagens },
		{ alt: 'Logotipo', src: pontualpolimeros },
		{ alt: 'Logotipo', src: ramos },
		{ alt: 'Logotipo', src: ramsor },
		{ alt: 'Logotipo', src: rikwill },
		{ alt: 'Logotipo', src: roma },
		{ alt: 'Logotipo', src: rvcautomacao },
		{ alt: 'Logotipo', src: saltoja },
		{ alt: 'Logotipo', src: tecnigrav },
		{ alt: 'Logotipo', src: tressar },
		{ alt: 'Logotipo', src: riquella },
		{ alt: 'Logotipo', src: tugumi },
		{ alt: 'Logotipo', src: tussar },
		{ alt: 'Logo da empresa Colormix', src: clientColormix },
		{ alt: 'Logo da empresa Coopercas', src: clientCoopercas },
	];
	const feedbacks: {
		name: string;
		message: string;
		score: number;
		image: any;
	}[] = [
		{
			name: 'Bax Festas',
			message: 'Excelente atendimento e rapidez para solucionar os problemas. Parceria duradoura e eficiente.',
			score: 5,
			image: '',
		},
		{
			name: 'AIA Embalagens',
			message: 'adoro trabalhar com a equipe da soft clever, ERP descomplicado, funcionários sempre dispostos a ajudar, explicam e auxiliam sempre da melhor forma... super indico! ',
			score: 5,
			image: '',
		},
		{
			name: 'Viviane Aparecida',
			message:
				'A minha experiência com a Soft Clever, está sendo muito boa, a quase dois anos de parceria eu sempre sou muito bem atendida e consigo tirar todas as minhas dúvidas, os atendentes sempre estão dispostos a nós ajudar com muita eficácia e rapidez.',
			score: 5,
			image: '',
		},
		{
			name: 'Aurelio Vari',
			message:
				'A Soft Cleber desde 2015 mantém um atendimento muito bom. Tem o domínio do software e da política financeira do governo. O custo de contrato mensal também está bem competitivo. Enfim, é uma boa empresa para contratar. ',
			score: 5,
			image: '',
		},
		{
			name: 'Buker engrenagens',
			message:
				'A Soft Clever resolveu-me um problema que durante muito tempo a tentar resolver, sem sucesso. Analisaram com o máximo cuidado, conseguiram identificar o problema, e ver a melhor solução. Somos gratos por essa parceria de tanto tempo!!!!',
			score: 5,
			image: '',
		},
		{
			name: 'Lucas Ferreira',
			message: 'Um sistema completo , bem detalhado que atende tudo o que a empresa precisa. O atendimento é excelente sempre resolve qualquer tipo de dúvida',
			score: 5,
			image: '',
		},
		{
			name: 'Rosely Barbosa',
			message: 'Trabalhamos com a Soft Clever há mais de 10 anos, sempre nos atendeu bem, com cordialidade e rapidez. Nossas solicitações sempre foram atendidas.',
			score: 5,
			image: '',
		},
		{
			name: 'RHVAUD VAUD',
			message: 'O sistema é ágil e prático para emissão de notas fiscais. Sempre que surge algum problema, o pessoal do suporte são super competentes e atenciosos. ',
			score: 5,
			image: '',
		},

		{
			name: 'Cadiveu Academy',
			message:
				'Conheço o trabalho da empresa de longa data, são extremamente sérios e comprometidos com seus clientes. O suporte realmente funciona, estão sempre interessados em resolver os problemas e solucionar as nossas dúvidas, dá para perceber que eles realmente entendem do que estão falando.  Ás vezes o atendimento não acontece no exato momento que se liga, mas logo eles retornam a ligação. Sempre foram eficientes nas atualizações das versões por ocasião das mudanças na legislação fiscal, a parte da nota fiscal é totalmente automática. O sistema também é bem completo, com muitos recursos que possuem excelente funcionalidade, nós gostamos muito, apesar de raramente aparecerem algumas dificuldades no uso, mas o bacana é que no final alguém sempre ajuda a finalizar o trabalho. Estamos completamente satisfeitos!',
			score: 5,
			image: '',
		},
		{
			name: 'Ellba Ferreira',
			message: 'Sempre tive um excelente atendimento... realmente é uma empresa seria..',
			score: 5,
			image: '',
		},
		{
			name: 'Caio Felipe de Mendonça',
			message:
				'Tenho o sistema da Soft Clever cerca de 7 anos e sempre recebi um atendimento excelente, tanto do suporte quanto do comercial. Sistema atende a todas as minhas necessidades e estou muito satisfeito. Já tive outros sistemas e só com o Sírius tive um custo beneficio muito positivo.',
			score: 5,
			image: '',
		},
		{
			name: 'Alex Cavalcante',
			message: 'Empresa muito prestativa sempre muito rápida para o atendimento e com muita postura, indico.',
			score: 5,
			image: '',
		},
		{
			name: 'Ana Maria Giamarini Couto',
			message: 'Minha experiência está sendo boa, sendo atendida dentro da minha necessidade.',
			score: 5,
			image: '',
		},
		{
			name: 'Stefano Klein',
			message: 'Atendimento nota 10,paciência dos atendentes,( já se tornaram amigos) nota 10,meus parabens.',
			score: 5,
			image: '',
		},
		{
			name: 'Marcelo Doelitzschi',
			message:
				'O comentário aqui quem voz faz, é de um conhecedor da qualidade tanto no desenvolvimento de sistemas quanto no atendimento direto ao cliente. Conhecedor a exatamente  14 anos, acompanhado todo o processo de evolução em tecnologia e capacitação de pessoal, indico sem sombra de dúvidas a empresa em questão.',
			score: 5,
			image: '',
		},
		{
			name: 'Larissa Romão',
			message:
				'Estou com o sistema a alguns anos, e durante este período recebi auxilio em todas as minhas solicitações. Não tenho reclamação quanto ao atendimento, comercial e do suporte, gosto bastante do sistema, pois é de simples manuseio.',
			score: 5,
			image: '',
		},
		{
			name: 'renovando moda',
			message: 'ótimo atendimento e estão sempre com disposição para ajudar!',
			score: 5,
			image: '',
		},
		{
			name: 'joao silva',
			message:
				'O sistema atende a todas as necessidades do cliente, na sua forma modular, te proporciona conforto na contratação, atendimento perfeito no suporte com pessoas capacitadas. Sistema de fácil utilização e rapidez no atendimento ao consumidor final.',
			score: 5,
			image: '',
		},
		{
			name: 'Valdeir Oliveira',
			message: 'E muito bom o atendimento  com quem falei sempre  min atenderam muito bem estão  de parabéns',
			score: 5,
			image: '',
		},
		{
			name: 'Michelle Mendes',
			message: 'Bons profissionais, sistema customizado e bom custo benefício!',
			score: 5,
			image: '',
		},
		{
			name: 'Cristiano Boscariol',
			message: 'Bom Atendimento , sempre sendo muito bem atendido. ',
			score: 5,
			image: '',
		},
		{
			name: 'Stefanie Prado',
			message: 'A soft Clever tem um atendimento maravilhoso,  super rápido e ágil.',
			score: 5,
			image: '',
		},
		{
			name: 'walcle lopes',
			message: 'Sempre dispostos a resolver nossas dúvidas, eficientes',
			score: 5,
			image: '',
		},
		{
			name: 'Jessica Moniz de Souza',
			message: 'Software de qualidade, pratico, fácil de operar e que atende a todas as necessidade, suporte preparado para atender as duvidas do cliente, sem dúvida o melhor custo x beneficio que encontrei.',
			score: 5,
			image: '',
		},
		{
			name: 'Pedro Lima',
			message: 'Excelente atendimento, sempre atenciosos no que precisar!',
			score: 5,
			image: '',
		},
		{
			name: 'Rita de Cassia Troiano Trindade',
			message: 'Os serviços e explicações foram rápidas e claras.',
			score: 5,
			image: '',
		},
		{
			name: 'Quezia Fabiana',
			message: 'ótima empresa, não tenho reclamações, indico a todos meus conhecidos.',
			score: 5,
			image: '',
		},
		{
			name: 'Iara alves',
			message: 'Com certeza a melhor empresa de informática!',
			score: 5,
			image: '',
		},
		{
			name: 'Flavia Nunes',
			message: 'Ótima empresa, soluções rápidas e cabiveis. super recomendo!!',
			score: 5,
			image: '',
		},
		{
			name: 'Residencial Pousada Cantinho Ocian',
			message: 'O sistema atendê a nossas necessidades, suporte rápido e equipe prestativo.',
			score: 5,
			image: '',
		},
		{
			name: 'Rafaela Miranda',
			message: 'ótima empresa, não tenho reclamações, indico a todos meus conhecidos.',
			score: 5,
			image: '',
		},
		{
			name: 'CONFECÇÕES HE LTDA',
			message: 'Empresa séria e de confiança.',
			score: 5,
			image: '',
		},
		{
			name: 'Israel Bezerra',
			message: 'Muito bom o atendimento e presteza!!',
			score: 5,
			image: '',
		},
		{
			name: 'Kaique Chaves',
			message: 'Sistema fácil, utilizo a muito tempo. Recomendo para todos.',
			score: 5,
			image: '',
		},
		{
			name: 'Gus Almeida',
			message: 'Ótima empresa, super indico a todos.',
			score: 5,
			image: '',
		},
		{
			name: 'Belsau beleza & saúde saúde',
			message: 'Empresa séria, atendimento de primeira. Cumpre o que promete.',
			score: 5,
			image: '',
		},
		{
			name: 'Wendel Faria',
			message: 'Excelente empresa',
			score: 5,
			image: '',
		},
		{
			name: 'Simone Barbosa',
			message: 'Atendimento excelente.',
			score: 5,
			image: '',
		},
		{
			name: 'Laercio Inacio Da Rosa',
			message: 'Recebi tratamento de primeira, muito bom.',
			score: 5,
			image: '',
		},
		{
			name: 'Atelie - Ateliê da Linguiça',
			message: 'Empresa séria e com pessoas competentes.',
			score: 5,
			image: '',
		},
		{
			name: 'Marcos Goulart',
			message: 'Melhor lugar, otimos atendentes <3',
			score: 5,
			image: '',
		},
		{
			name: 'Nanci Menezes',
			message: 'Atendimento de qualidade.',
			score: 5,
			image: '',
		},
		{
			name: 'Alek dias',
			message: 'Tecnologia a favor da sua empresa.',
			score: 5,
			image: '',
		},
		{
			name: 'Rosely',
			message: 'Trabalhamos',
			score: 5,
			image: '',
		},
		{
			name: 'Tatiana Conti',
			message: 'Sempre nos atende no que precisamos.',
			score: 5,
			image: '',
		},
		{
			name: 'Leia Ferreira',
			message: 'Excelente atendimento',
			score: 5,
			image: '',
		},
		{
			name: 'COMERCIAL AZ PROD. DE LIMP. E DESC. LTDA ME (COMERCIAL AZ)',
			message: 'ATENDIMENTO EXCENTENTE',
			score: 5,
			image: '',
		},
	];

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section className='flex w-full flex-col items-center'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-16 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Nossos Casos de Sucesso</h2>
				<div>
					<Carousel
						className='w-full'
						opts={{ loop: true }}
						plugins={[
							Autoplay({
								delay: 6000,
							}),
						]}>
						<CarouselContent>
							{imgs.map((_, index) => (
								<CarouselItem className='flex cursor-grab select-none justify-center active:cursor-grabbing md:basis-1/3 lg:basis-1/5' key={index}>
									<div className='flex'>
										<Image className='h-48 w-auto min-w-48 self-center object-contain opacity-80 grayscale filter' alt={_.alt} src={_.src} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='hidden md:flex' />
						<CarouselNext className='hidden md:flex' />
					</Carousel>
				</div>
				<Carousel
					setApi={setApi}
					className='flex flex-col gap-2 rounded-[40px] bg-primary p-10'
					opts={{
						align: 'start',
						loop: true,
					}}>
					<CarouselContent>
						{feedbacks.map((_, i) => (
							<CarouselItem className='md:basis-1/2 lg:basis-1/3' key={i}>
								<figure key={i} className='flex w-full cursor-grab select-none flex-col rounded-xl bg-white p-8 shadow-xl active:cursor-grabbing'>
									<div className='flex flex-col items-center gap-4 sm:flex-row'>
										<div className='flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary'>
											<User weight='fill' className='h-3/5 w-auto fill-white sm:h-2/5' />
										</div>
										<figcaption className='font-medium'>
											<div className='truncate text-sky-500 dark:text-sky-400'>{_.name}</div>
											<StarRating score={_.score} />
										</figcaption>
									</div>
									<blockquote className='mt-6 min-h-56'>
										<ReadMore text={_.message} amountOfWords={30} className='text-lg font-medium' />
									</blockquote>
								</figure>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className='mt-3 hidden self-center lg:flex'>
						{Array.from(Array(count).keys()).map((i) => (
							<Button key={i} className={`mx-1 h-1 flex-grow rounded-full p-1 hover:bg-secondary ${i === current - 1 ? 'bg-white hover:bg-white' : 'bg-neutral-600/75'}`} onClick={() => api?.scrollTo(i)} />
						))}
					</div>
					{/* <CarouselPrevious className='hidden md:flex' />
					<CarouselNext className='hidden md:flex' /> */}
				</Carousel>
			</div>
		</section>
	);
}

type StarRatingProps = { score: number };

const StarRating: React.FC<StarRatingProps> = ({ score }) => {
	const stars = Array.from({ length: 5 }, (_, index) => index + 1);

	return (
		<div className='flex'>
			{stars.map((star) => (
				<span key={star} className={star <= score ? 'text-yellow-400' : 'text-gray-400'}>
					<Star size={32} weight='fill' className='w-5' />
				</span>
			))}
		</div>
	);
};

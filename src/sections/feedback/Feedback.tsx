import Image from 'next/image';
import feedbackImageBg from '../../../assets/feedback.png';
import avatar from '../../../assets/avatar.svg';
import star from '../../../assets/star.svg';
import starGray from '../../../assets/starGray.svg';
// import Autoplay from "embla-carousel-autoplay";
import ButtonExpert from '@/src/components/button_expert';
import { Carousel, CarouselContent, CarouselItem } from '@/src/components/ui/carousel';

export default function Feedback() {
	const bg = { backgroundImage: `url(${feedbackImageBg.src})` };
	const bgStarGray = { backgroundImage: `url(${starGray.src})` };
	const bgStar = { backgroundImage: `url(${star.src})` };

	const feedbacks: {
		title: string;
		description: string;
		score: number;
		user: { image: any; name: string; professionalPosition: string };
	}[] = [
		{
			title: 'Excelente trabalho!',
			description:
				'O profissional realizou um trabalho excepcional, entregando resultados além das expectativas. Comunicação clara e eficiente durante todo o projeto.',
			score: 5,
			user: {
				image: 'url_da_imagem',
				name: 'João Silva',
				professionalPosition: 'Gerente de Projetos',
			},
		},
		{
			title: 'Muito satisfeito com o serviço!',
			description:
				'O serviço foi entregue no prazo estipulado e atendeu plenamente às nossas necessidades. Recomendo fortemente este profissional para futuros projetos.',
			score: 4.5,
			user: {
				image: 'url_da_imagem',
				name: 'Maria Santos',
				professionalPosition: 'Diretora de Marketing',
			},
		},
		{
			title: 'Ótima experiência de trabalho',
			description:
				'Trabalhar com este profissional foi uma experiência muito positiva. Ele demonstrou habilidades técnicas impressionantes e uma atitude proativa em resolver problemas.',
			score: 4.8,
			user: {
				image: 'url_da_imagem',
				name: 'Pedro Oliveira',
				professionalPosition: 'Engenheiro de Software',
			},
		},
		{
			title: 'Excelente trabalho!',
			description:
				'O profissional realizou um trabalho excepcional, entregando resultados além das expectativas. Comunicação clara e eficiente durante todo o projeto.',
			score: 5,
			user: {
				image: 'url_da_imagem',
				name: 'João Silva',
				professionalPosition: 'Gerente de Projetos',
			},
		},
		{
			title: 'Muito satisfeito com o serviço!',
			description:
				'O serviço foi entregue no prazo estipulado e atendeu plenamente às nossas necessidades. Recomendo fortemente este profissional para futuros projetos.',
			score: 4.5,
			user: {
				image: 'url_da_imagem',
				name: 'Maria Santos',
				professionalPosition: 'Diretora de Marketing',
			},
		},
		{
			title: 'Ótima experiência de trabalho',
			description:
				'Trabalhar com este profissional foi uma experiência muito positiva. Ele demonstrou habilidades técnicas impressionantes e uma atitude proativa em resolver problemas.',
			score: 4.8,
			user: {
				image: 'url_da_imagem',
				name: 'Pedro Oliveira',
				professionalPosition: 'Engenheiro de Software',
			},
		},
		{
			title: 'Excelente trabalho!',
			description:
				'O profissional realizou um trabalho excepcional, entregando resultados além das expectativas. Comunicação clara e eficiente durante todo o projeto.',
			score: 5,
			user: {
				image: 'url_da_imagem',
				name: 'João Silva',
				professionalPosition: 'Gerente de Projetos',
			},
		},
		{
			title: 'Muito satisfeito com o serviço!',
			description:
				'O serviço foi entregue no prazo estipulado e atendeu plenamente às nossas necessidades. Recomendo fortemente este profissional para futuros projetos.',
			score: 4.5,
			user: {
				image: 'url_da_imagem',
				name: 'Maria Santos',
				professionalPosition: 'Diretora de Marketing',
			},
		},
		{
			title: 'Ótima experiência de trabalho',
			description:
				'Trabalhar com este profissional foi uma experiência muito positiva. Ele demonstrou habilidades técnicas impressionantes e uma atitude proativa em resolver problemas.',
			score: 4.8,
			user: {
				image: 'url_da_imagem',
				name: 'Pedro Oliveira',
				professionalPosition: 'Engenheiro de Software',
			},
		},
		{
			title: 'Excelente trabalho!',
			description:
				'O profissional realizou um trabalho excepcional, entregando resultados além das expectativas. Comunicação clara e eficiente durante todo o projeto.',
			score: 5,
			user: {
				image: 'url_da_imagem',
				name: 'João Silva',
				professionalPosition: 'Gerente de Projetos',
			},
		},
		{
			title: 'Muito satisfeito com o serviço!',
			description:
				'O serviço foi entregue no prazo estipulado e atendeu plenamente às nossas necessidades. Recomendo fortemente este profissional para futuros projetos.',
			score: 4.5,
			user: {
				image: 'url_da_imagem',
				name: 'Maria Santos',
				professionalPosition: 'Diretora de Marketing',
			},
		},
		{
			title: 'Ótima experiência de trabalho',
			description:
				'Trabalhar com este profissional foi uma experiência muito positiva. Ele demonstrou habilidades técnicas impressionantes e uma atitude proativa em resolver problemas.',
			score: 4.8,
			user: {
				image: 'url_da_imagem',
				name: 'Pedro Oliveira',
				professionalPosition: 'Engenheiro de Software',
			},
		},
	];

	return (
		<div
			style={bg}
			className='flex flex-col gap-10 bg-cover bg-center px-[2.5rem] py-[1.8rem] items-center w-full xl:px-[14.375rem]'>
			<h2 className='text-2xl font-bold text-white'>Quem usa nos recomenda</h2>

			<Carousel className='flex  lg:max-w-2xl xl:max-w-5xl w-full '>
				<CarouselContent className='flex gap-5 -ml-1'>
					{feedbacks.map((_, index) => (
						<CarouselItem
							key={index}
							className='pl-1 md:basis-1/2 lg:basis-1/3 '>
							<div
								className='flex flex-col gap-5  justify-between w-full h-full px-5 py-10 bg-white rounded-lg '
								key={index}>
								<div>
									<span className='text-5xl font-bold text-sc font-serif'>&#34;</span>
									<h4 className='text-xl font-bold text-sc	'>{_.title}</h4>
									<p className='text-sm text-sc'>{_.description}</p>
								</div>

								<div className='flex flex-col gap-2'>
									<div className='flex items-center gap-2'>
										<p className='text-xs text-sc'>{_.score}</p>
										<div
											style={bgStarGray}
											className='w-[5.875rem]  h-[1.125rem] '>
											<div
												style={{ backgroundImage: `url(${star.src})`, width: `${_.score * 20}%` }}
												className='h-full '></div>
										</div>
									</div>
									{/* from */}
									<div className='flex gap-5'>
										{/* avatar */}
										<Image
											className=''
											// src={_.user.name}
											src={avatar}
											alt='Imagem do perfil'
										/>
										{/* info */}
										<div className='flex flex-col'>
											<p className='text-sm font-semibold text-sc'>{_.user.name}</p>
											<p className='text-xs text-sc'>{_.user.professionalPosition}</p>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<ButtonExpert
				color={'white'}
				className='gap-2 py-6 px-12 w-[100%] bg-white text-sky-950 hover:bg-scHover lg:w-[15.25rem] '
			/>
		</div>
	);
}

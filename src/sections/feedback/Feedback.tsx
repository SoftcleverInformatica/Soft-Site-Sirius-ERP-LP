import Image from 'next/image';
import feedbackImageBg from '../../../assets/feedback.png';
import avatar from '../../../assets/avatar.svg';
import { Carousel, CarouselContent, CarouselItem } from '@/src/components/ui/carousel';

export default function Feedback() {
	const bg = { backgroundImage: `url(${feedbackImageBg.src})` };

	const feedbacks: { title: string; description: string; user: { image: any; name: string; professionalPosition: string } }[] = [
		{
			title: 'Ótima experiência de trabalho',
			description:
				'Trabalhar com este profissional foi uma experiência muito positiva. Ele demonstrou habilidades técnicas impressionantes e uma atitude proativa em resolver problemas.',
			user: {
				image: 'url_da_imagem',
				name: 'Pedro Oliveira',
				professionalPosition: 'Engenheiro de Software',
			},
		},
		{
			title: 'Muito satisfeito com o serviço!',
			description:
				'O serviço foi entregue no prazo estipulado e atendeu plenamente às nossas necessidades. Recomendo fortemente este profissional para futuros projetos.',
			user: {
				image: 'url_da_imagem',
				name: 'Maria Santos',
				professionalPosition: 'Diretora de Marketing',
			},
		},
		{
			title: 'Excelente trabalho!',
			description:
				'O profissional realizou um trabalho excepcional, entregando resultados além das expectativas. Comunicação clara e eficiente durante todo o projeto.',
			user: {
				image: 'url_da_imagem',
				name: 'João Silva',
				professionalPosition: 'Gerente de Projetos',
			},
		},
		{
			title: 'Ótima experiência de trabalho',
			description:
				'Trabalhar com este profissional foi uma experiência muito positiva. Ele demonstrou habilidades técnicas impressionantes e uma atitude proativa em resolver problemas.',
			user: {
				image: 'url_da_imagem',
				name: 'Pedro Oliveira',
				professionalPosition: 'Engenheiro de Software',
			},
		},
		{
			title: 'Muito satisfeito com o serviço!',
			description:
				'O serviço foi entregue no prazo estipulado e atendeu plenamente às nossas necessidades. Recomendo fortemente este profissional para futuros projetos.',
			user: {
				image: 'url_da_imagem',
				name: 'Maria Santos',
				professionalPosition: 'Diretora de Marketing',
			},
		},
		{
			title: 'Excelente trabalho!',
			description:
				'O profissional realizou um trabalho excepcional, entregando resultados além das expectativas. Comunicação clara e eficiente durante todo o projeto.',
			user: {
				image: 'url_da_imagem',
				name: 'João Silva',
				professionalPosition: 'Gerente de Projetos',
			},
		},
	];

	return (
		<div
			style={bg}
			className='overflow-x-hidden flex flex-col gap-10 px-[2.5rem] py-[1.8rem] bg-no-repeat bg-center items-center md:px-20  lg:px-60  '>
			<h2 className='text-2xl font-bold text-white	'>Quem usa nos recomenda</h2>

			<Carousel className='w-full'>
				<CarouselContent className='flex gap-10'>
					{feedbacks.map((_, index) => (
						<CarouselItem
							key={index}
							className='sm:basis-1/2 lg:basis-1/3 '>
							<div
								className='flex flex-col gap-5 flex-wrap w-full h-full p-5 bg-white rounded-lg'
								key={index}>
								<span className='text-5xl font-bold text-sc'>&#34;</span>
								<h4 className='text-2xl font-bold text-sc	'>{_.title}</h4>
								<p className='flex-wrap '>{_.description}</p>
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
										<p className=''>{_.user.name}</p>
										<p className=''>{_.user.professionalPosition}</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}

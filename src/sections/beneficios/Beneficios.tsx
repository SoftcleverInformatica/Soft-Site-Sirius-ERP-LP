import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Graph, LineSegments, PresentationChart } from '@phosphor-icons/react/dist/ssr';

export default function Beneficios() {
	const beneficios = [
		{ icon: <LineSegments size={32} weight='duotone' />, titulo: 'Aumento da Eficiência', descricao: 'Automatize tarefas rotineiras e melhore a produtividade da sua equipe.' },
		{ icon: <PresentationChart size={32} weight='duotone' />, titulo: 'Decisões Baseadas em Dados', descricao: 'Acesse relatórios detalhados e tome decisões informadas para o crescimento do seu negócio.' },
		{ icon: <Graph size={32} weight='fill' />, titulo: 'Integração Completa', descricao: 'Integre todos os departamentos da sua empresa em uma única plataforma.' },
	];

	return (
		<section className='w-full flex flex-col items-center '>
			<div className={`	w-full flex flex-col gap-6 pt-10 px-4 md:px-10 md:pt-20 lg:px-24 lg:pt-28 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='text-3xl lg:text-5xl font-extrabold leading-tight uppercase tracking-wide font-main'>Benefícios do Nosso ERP</h2>
				<div className='flex flex-col lg:flex-row gap-10 '>
					{beneficios.map((_, i) => (
						<Card key={i} className={'max-w-[768px] lg:w-96'}>
							<CardHeader>
								<CardTitle className='text-primary flex items-start gap-2'>
									{_.icon} {_.titulo}
								</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<CardDescription>{_.descricao}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

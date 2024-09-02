import { Graph, LineSegments, PresentationChart } from '@phosphor-icons/react/dist/ssr';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Beneficios() {
	const beneficios = [
		{ icon: <LineSegments size={32} weight='duotone' />, titulo: 'Aumento da Eficiência', descricao: 'Automatize tarefas rotineiras e melhore a produtividade da sua equipe.' },
		{ icon: <PresentationChart size={32} weight='duotone' />, titulo: 'Decisões Baseadas em Dados', descricao: 'Acesse relatórios detalhados e tome decisões informadas para o crescimento do seu negócio.' },
		{ icon: <Graph size={32} weight='fill' />, titulo: 'Integração Completa', descricao: 'Integre todos os departamentos da sua empresa em uma única plataforma.' },
	];

	return (
		<section className='flex w-full flex-col items-center'>
			<div className={`flex w-full flex-col gap-6 px-4 pt-10 md:px-10 md:pt-20 lg:max-w-5xl lg:gap-20 lg:px-24 lg:pt-28 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<div className='flex flex-col gap-6 rounded-[40px] bg-[#dc8c00] px-9 py-10'>
					<h2 className='font-main truncate text-balance text-center text-3xl font-extrabold leading-tight tracking-wide text-muted/85 lg:text-5xl'>Precisando de tranquilidade na administração?</h2>
					<div className='flex flex-col gap-10 lg:flex-row'>
						{beneficios.map((_, i) => (
							<Card key={i} className={'max-w-[768px] lg:w-96'}>
								<CardHeader>
									<CardTitle className='flex items-start gap-2 font-bold text-muted/85'>
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
			</div>
		</section>
	);
}

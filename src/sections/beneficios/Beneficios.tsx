import { Graph, LineSegments, PresentationChart } from '@phosphor-icons/react/dist/ssr';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Beneficios() {
	const beneficios = [
		{ icon: <LineSegments size={32} weight='duotone' />, titulo: 'Aumento da Eficiência', descricao: 'Automatize tarefas rotineiras e melhore a produtividade da sua equipe.' },
		{
			icon: <PresentationChart size={32} weight='duotone' />,
			titulo: 'Facilidade na Gestão Fiscal',
			descricao: 'Simplifique processos fiscais garantindo conformidade e agilidade no dia a dia.',
		},
		{ icon: <Graph size={32} weight='fill' />, titulo: 'Integração Completa', descricao: 'Integre todos os departamentos da sua empresa em uma única plataforma.' },
	];

	return (
		<section className='flex w-full flex-col items-center'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-16 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<div className='flex flex-col items-center gap-6 rounded-[40px] bg-secondary px-9 py-10'>
					<h2 className='w-5/6 text-balance text-center text-2xl font-extrabold leading-tight tracking-wide text-black/85 lg:text-5xl'>Precisando de tranquilidade na administração?</h2>
					<div className='flex w-full flex-col gap-10 lg:flex-row'>
						{beneficios.map((_, i) => (
							<Card key={i} className={'max-w-[768px] rounded-3xl lg:w-96'}>
								<CardHeader>
									<CardTitle className='flex items-start gap-2 font-bold text-black/85'>
										{_.icon} {_.titulo}
									</CardTitle>
								</CardHeader>
								<CardContent className='grid gap-4'>
									<CardDescription className='text-black/75'>{_.descricao}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

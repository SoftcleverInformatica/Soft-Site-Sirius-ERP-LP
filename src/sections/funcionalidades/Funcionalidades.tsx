import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Funcionalidades() {
	const funcionalidades = [
		{ titulo: 'Gestão Financeira', descricao: 'Controle total sobre contas a pagar e a receber, fluxo de caixa e muito mais.', imagem: 'Screenshot do módulo de gestão financeira.' },
		{ titulo: 'Gestão de Estoque', descricao: 'Monitore seu estoque em tempo real e evite faltas ou excessos.', imagem: 'Screenshot do módulo de gestão de estoque.' },
		{ titulo: 'Gestão de Vendas', descricao: 'Acompanhe todo o ciclo de vendas, desde o pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
	];

	return (
		<section className='w-full flex flex-col items-center ' id='funcionalidades'>
			<div className='max-w-5xl lg:max-w-6xl  xl:max-w-7xl w-full py-10 px-4 lg:px-24 flex flex-col gap-6 lg:gap-20 '>
				<h2 className='text-3xl lg:text-5xl font-extrabold leading-tight uppercase tracking-wide font-main'>Funcionalidades Principais</h2>
				<div className='flex flex-col lg:flex-row  gap-10'>
					{funcionalidades.map((_, i) => (
						<Card key={i}>
							<CardHeader>
								<CardTitle className='text-primary flex items-start gap-2'>{_.titulo}</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<CardDescription className=''>{_.descricao}</CardDescription>
								<div className='w-full h-48 bg-red-200 '>{_.imagem}</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

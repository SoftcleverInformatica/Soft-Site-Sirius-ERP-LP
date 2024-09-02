import { Calculator, CashRegister, ChartBar, File, HandArrowDown, HandArrowUp, HandCoins, Package, Sparkle } from '@phosphor-icons/react';
import ButtonExpert from '@/components/button_expert';

type features = { item: string; icon: any };

type plans = { plan: string; recommended?: boolean; features: features[]; value?: string };

export default function Price() {
	const planos: plans[] = [
		{
			plan: 'Básico',
			features: [
				{ item: 'Emissão de até 20 notas mensais', icon: <File weight='light' size={20} /> },
				{ item: 'Controle de Estoque', icon: <Package weight='light' size={20} /> },
				{ item: 'Cálculos automatizados', icon: <Calculator weight='light' size={20} /> },
				{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' size={20} /> },
			],
			value: '89,90',
		},
		{
			plan: 'Intermediário',
			recommended: true,
			features: [
				{ item: 'Emissão de até 40 notas mensais', icon: <File weight='light' size={20} /> },
				{ item: 'Pedido de Venda.', icon: <HandCoins weight='light' size={20} /> },
				{ item: 'Controle de Estoque', icon: <Package weight='light' size={20} /> },
				{ item: 'Cálculos automatizados', icon: <Calculator weight='light' size={20} /> },
				{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' size={20} /> },
			],
			value: '139,90',
		},
		{
			plan: 'Avançado',
			features: [
				{ item: 'Emissão de até 100 notas mensais', icon: <File weight='light' size={20} /> },
				{ item: 'Pedido de Venda.', icon: <CashRegister weight='light' size={20} /> },
				{ item: 'Pedido de Compra.', icon: <HandCoins weight='light' size={20} /> },
				{ item: 'Financeiro a Pagar.', icon: <HandArrowUp weight='light' size={20} /> },
				{ item: 'Financeiro a Receber.', icon: <HandArrowDown weight='light' size={20} /> },
				{ item: 'Controle de Estoque', icon: <Package weight='light' size={20} /> },
				{ item: 'Cálculos automatizados', icon: <Calculator weight='light' size={20} /> },
				{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' size={20} /> },
			],
			value: '249,90',
		},
		{
			plan: 'Personalizado',
			features: [
				{
					item: 'Você monta o seu próprio pacote definindo a quantidade de notas que você necessita e os módulos que deseja utilizar',
					icon: <Sparkle weight='light' size={70} className='fill-orange-600' />,
				},
			],
		},
	];

	return (
		<section className='flex w-full flex-col items-center'>
			<div className={`flex w-full flex-col gap-6 px-4 pt-10 md:px-10 md:pt-20 lg:max-w-5xl lg:gap-20 lg:px-24 lg:pt-28 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Escolha um plano que melhor se encaixa para você</h2>
				<div className='flex flex-col justify-center gap-1 md:grid md:grid-cols-2 md:grid-rows-2 xl:flex xl:flex-row'>
					{planos.map((_, i) => {
						return (
							<div key={i} className={`flex flex-col gap-1 rounded-md p-2 pt-2 ${_.recommended ? 'bg-primary text-primary' : ''} `}>
								<span className='h-6 pl-3 font-bold text-white'>{_.recommended ? 'Recomendado' : ''}</span>
								<div
									className={`flex flex-1 flex-col justify-between gap-4 rounded-md border border-primary/50 bg-white px-4 py-8 transition delay-150 ease-in-out hover:drop-shadow-[0px_0px_10px_rgba(36,173,181,.75)] ${_.recommended ? 'drop-shadow-[0px_0px_6px_rgba(36,173,181,1)]' : ''} max-w-[18rem] lg:gap-5 lg:px-8 lg:py-12`}>
									<div>
										<h4 className='text-2xl font-semibold text-primary'>{_.plan}</h4>
										{/* <p className='text-primary/70 '>Description</p> */}
									</div>
									<ul className='flex flex-col gap-2'>
										{_.features.map((_, i) => {
											return (
												<li key={i} className='flex items-center gap-2 text-xs text-primary/90'>
													{_.icon}
													<span>{_.item}</span>
												</li>
											);
										})}
									</ul>
									<div className='flex flex-col gap-1 lg:gap-4'>
										<h3 className={`text-3xl font-bold text-primary ${_.value ? '' : 'hidden'}`}>
											R$ {_.value ? _.value : ''}
											<span className='text-sm text-primary/70'> Mensais</span>
										</h3>
										<ButtonExpert color={`orange`} label='Fale com um especialista' />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

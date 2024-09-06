import { ReactNode } from 'react';
import { Calculator, CashRegister, ChartBar, File, HandArrowDown, HandArrowUp, HandCoins, Package, Sparkle } from '@phosphor-icons/react/dist/ssr';
import ButtonExpert from '@/components/button_expert';

export const planos: {
	plan: string;
	description: { label: string };
	description2: { label: string };
	recommended: boolean;
	fatures: { item: string; icon: ReactNode }[];
	price?: number;
}[] = [
	// {
	// 	plan: 'Sírus Pré Venda WEB + NFC-e',
	// 	description: { label: 'Funciona no Computador ou no Celular' },
	// 	description2: { label: '01 Licença para computador + 01 licença para celular por' },
	// 	recommended: false,
	// 	fatures: [
	// 		{
	// 			item: 'Cadastros',
	// 			icon: <CirclesThreePlus weight='light' className='w-6 h-6' size={20} />,
	// 		},
	// 		{ item: 'Pedido de Venda', icon: <Invoice weight='light' className='w-6 h-6' size={20} /> },
	// 		{
	// 			item: 'Comanda e Delivery',
	// 			icon: <CardsThree weight='light' className='w-6 h-6' size={20} />,
	// 		},
	// 		{
	// 			item: 'Emissão de Pedido de Venda',
	// 			icon: <HandDeposit weight='light' className='w-6 h-6' size={20} />,
	// 		},
	// 		{
	// 			item: 'Emissão de Cupom Fiscal NFC-e',
	// 			icon: <FileArrowUp weight='light' className='w-6 h-6' size={20} />,
	// 		},
	// 		{
	// 			item: 'Controle de Estoque',
	// 			icon: <Package weight='light' className='w-6 h-6' size={20} />,
	// 		},
	// 		{
	// 			item: 'Controle de Caixa',
	// 			icon: <CashRegister weight='light' className='w-6 h-6' size={20} />,
	// 		},
	// 	],
	// 	price: 79.9,
	// },
	{
		plan: 'Sírus Pré Venda WEB + NFC-e',
		description: { label: '' },
		description2: { label: '' },
		recommended: false,
		fatures: [
			{ item: 'Emissão de até 20 notas mensais', icon: <File weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Controle de Estoque', icon: <Package weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Cálculos automatizados', icon: <Calculator weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' className='h-6 w-6' size={20} /> },
		],
		price: 89.9,
	},
	{
		plan: 'Sírius Pré Venda Safira',
		recommended: true,
		description: { label: '' },
		description2: { label: '' },
		fatures: [
			{ item: 'Emissão de até 40 notas mensais', icon: <File weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Pedido de Venda.', icon: <HandCoins weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Controle de Estoque', icon: <Package weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Cálculos automatizados', icon: <Calculator weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' className='h-6 w-6' size={20} /> },
		],
		price: 139.9,
	},
	{
		plan: 'Sírius SAT Prata - Cupom Fiscal',
		recommended: false,
		fatures: [
			{ item: 'Emissão de até 100 notas mensais', icon: <File weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Pedido de Venda.', icon: <CashRegister weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Pedido de Compra.', icon: <HandCoins weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Financeiro a Pagar.', icon: <HandArrowUp weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Financeiro a Receber.', icon: <HandArrowDown weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Controle de Estoque', icon: <Package weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Cálculos automatizados', icon: <Calculator weight='light' className='h-6 w-6' size={20} /> },
			{ item: 'Relatórios Gerenciais.', icon: <ChartBar weight='light' className='h-6 w-6' size={20} /> },
		],
		price: 249.9,
		description: { label: '' },
		description2: { label: '' },
	},
];

export const planos2: {
	plan: string;
	description: { label: string };
	description2: { label: string };
	recommended: boolean;
	fatures: { item: string; icon: ReactNode }[];
	price?: number;
}[] = [
	{
		plan: 'Personalizado',
		recommended: true,
		fatures: [
			{
				item: 'Você monta o seu próprio pacote definindo a quantidade de notas que você necessita e os módulos que deseja utilizar',
				icon: <Sparkle weight='light' className='h-6 w-6 fill-secondary' size={20} />,
			},
		],
		description: { label: '' },
		description2: { label: '' },
	},
];

export default function Plans() {
	return (
		<section className='flex w-full flex-col items-center' id='planos'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-16 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Planos</h2>
				<div className='flex flex-col items-center justify-center gap-5 rounded-[40px] border border-primary/50 px-2 py-10'>
					<div className='flex w-full flex-col items-center justify-center gap-1 sm:flex-row sm:flex-wrap xl:gap-12'>
						{planos.map((_, i) => (
							<div key={i} className={`flex w-full max-w-72 flex-col gap-1 rounded-[32px] 2xl:max-w-80 ${_.recommended ? 'bg-amber-500/80' : ''} p-2 pt-2`}>
								<span className='h-6 pl-3 font-bold text-black/85'>{_.recommended ? 'Recomendado' : ''}</span>
								<div className={`flex h-[44rem] w-full flex-col justify-around gap-1 rounded-3xl border border-amber-500 bg-white px-3 py-10 transition delay-150 ease-in-out sm:justify-between`}>
									<div className='w-full'>
										<h4 className='text-2xl font-semibold text-black/85'>{_.plan}</h4>
										<p className='text-xs text-black/70'>{_.description.label}</p>
									</div>
									<ul className='flex flex-col gap-2'>
										{_.fatures.map((_, i) => (
											<li key={i} className='flex items-center gap-2 text-xs leading-5 text-black/90'>
												{_.icon}
												<span>{_.item}</span>
											</li>
										))}
									</ul>
									<div className='flex flex-col gap-1'>
										<p className='text-xs text-black/70'>{_.description2.label}</p>
										<h3 className={`text-3xl font-bold text-primary ${_.price ? '' : 'hidden'}`}>
											{_.price
												? new Intl.NumberFormat('pt-BR', {
														style: 'currency',
														currency: 'BRL',
													}).format(_.price)
												: ''}
											<span className='text-xs text-black/70 md:text-sm'> Mensais</span>
										</h3>
										<p className='text-xs text-black/70'>{_.plan === 'Sírius SAT Prata - Cupom Fiscal' ? '* Pode ser integrado as nossas ferramentas, tais como: Pré Venda, Comanda, Delivery e outras.' : ''}</p>
										<ButtonExpert color='blue' label='Fale com um especialista' logo={false} />
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='flex w-full flex-col gap-16'>
						<div className='h-full w-full self-center rounded-3xl bg-gradient-to-r from-primary to-secondary p-2 2xl:w-9/12'>
							<div className={`flex w-full flex-col gap-1 self-center rounded-[32px]`}>
								<div className={`flex h-auto w-full flex-col justify-between gap-4 rounded-3xl bg-white px-4 py-8 transition delay-150 ease-in-out lg:gap-5 lg:px-8 lg:py-12`}>
									<div className='w-full'>
										<h4 className='text-3xl font-semibold text-black/85 md:text-4xl'>{planos2[0].plan}</h4>
										<p className='text-sm text-black/70'>{planos2[0].description.label}</p>
									</div>
									<ul className='flex flex-col gap-2'>
										{planos2[0].fatures.map((_, i) => {
											return (
												<li key={i} className='flex items-center gap-2 text-xs leading-5 text-black/90'>
													<div className='w-6'>{_.icon}</div>
													<span>{_.item}</span>
												</li>
											);
										})}
									</ul>
									<div className='flex flex-col gap-1 lg:gap-4'>
										<p className='text-xs text-black/70'>{planos2[0].description2.label}</p>
										<p className='text-xs text-black/70'>{planos2[0].plan === 'Sírius SAT Prata - Cupom Fiscal' ? '* Pode ser integrado as nossas ferramentas, tais como: Pré Venda, Comanda, Delivery e outras.' : ''}</p>
										<ButtonExpert color='blue' label='Fale com um especialista' logo={false} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

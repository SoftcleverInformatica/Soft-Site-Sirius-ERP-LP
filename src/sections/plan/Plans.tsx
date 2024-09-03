import { ReactNode } from 'react';
import { ArrowsLeftRight, CardsThree, CashRegister, ChartBar, CirclesThreePlus, FileArrowUp, HandArrowUp, HandCoins, HandDeposit, Invoice, Package, Scales, Sparkle } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { MeiosPagamentos } from '@/components/ui/svgs';
import ButtonExpert from '@/components/button_expert';

export const planos: {
	plan: string;
	description: { label: string };
	description2: { label: string };
	recommended: boolean;
	fatures: { item: string; icon: ReactNode }[];
	price?: number;
}[] = [
	{
		plan: 'Sírus Pré Venda WEB + NFC-e',
		description: { label: 'Funciona no Computador ou no Celular' },
		description2: {
			label: '01 Licença para computador + 01 licença para celular por',
		},
		recommended: false,
		fatures: [
			{
				item: 'Cadastros',
				icon: <CirclesThreePlus weight='light' size={20} />,
			},
			{ item: 'Pedido de Venda', icon: <Invoice weight='light' size={20} /> },
			{
				item: 'Comanda e Delivery',
				icon: <CardsThree weight='light' size={20} />,
			},
			{
				item: 'Emissão de Pedido de Venda',
				icon: <HandDeposit weight='light' size={20} />,
			},
			{
				item: 'Emissão de Cupom Fiscal NFC-e',
				icon: <FileArrowUp weight='light' size={20} />,
			},
			{
				item: 'Controle de Estoque',
				icon: <Package weight='light' size={20} />,
			},
			{
				item: 'Controle de Caixa',
				icon: <CashRegister weight='light' size={20} />,
			},
		],
		price: 79.9,
	},
	{
		plan: 'Sírius Pré Venda Safira',
		recommended: true,
		description: { label: '' },
		description2: { label: '01 Licença para computador por' },
		fatures: [
			// {
			//   item: "Cadastros",
			//   icon: <CirclesThreePlus weight="light" size={20} />,
			// },
			{ item: 'Pedido de Venda', icon: <Invoice weight='light' size={20} /> },
			{
				item: 'Comanda e Delivery',
				icon: <CardsThree weight='light' size={20} />,
			},
			{
				item: 'Emissão de Cupom Não Fiscal',
				icon: <HandDeposit weight='light' size={20} />,
			},
			{
				item: 'Controle de Estoque',
				icon: <Package weight='light' size={20} />,
			},
			{
				item: 'Controle de Caixa',
				icon: <CashRegister weight='light' size={20} />,
			},
			{
				item: 'Financeiro a Pagar e a Receber',
				icon: <HandArrowUp weight='light' size={20} />,
			},
			// {
			//   item: "Financeiro a Receber",
			//   icon: <HandArrowDown weight="light" size={20} />,
			// },
			{
				item: 'Pedido de Compra',
				icon: <HandCoins weight='light' size={20} />,
			},
			{
				item: 'Balança e Código de Barras',
				icon: <Scales weight='light' size={20} />,
			},
			// {
			//   item: "Etiqueta de Código de Barras",
			//   icon: <Barcode weight="light" size={20} />,
			// },
			{
				item: 'Troca e Devolução',
				icon: <ArrowsLeftRight weight='light' size={20} />,
			},
			{
				item: 'Relatórios Gerenciais',
				icon: <ChartBar weight='light' size={20} />,
			},
		],
		price: 99.9,
	},
	{
		plan: 'Sírius SAT Prata - Cupom Fiscal',
		recommended: false,
		fatures: [
			{
				item: 'Cadastros',
				icon: <CirclesThreePlus weight='light' size={20} />,
			},
			{ item: 'Pedido de Venda', icon: <Invoice weight='light' size={20} /> },
			{
				item: 'Emissão de Cupom Fiscal SAT ou NFC-e',
				icon: <FileArrowUp weight='light' size={20} />,
			},
			{
				item: 'Controle de Estoque',
				icon: <Package weight='light' size={20} />,
			},
			{
				item: 'Controle de Caixa',
				icon: <CashRegister weight='light' size={20} />,
			},
			{
				item: 'Relatórios Gerenciais',
				icon: <ChartBar weight='light' size={20} />,
			},
		],
		price: 109.9,
		description: { label: '' },
		description2: { label: '01 Licença para computador por' },
	},
	// {
	// 	plan: 'Personalizado',
	// 	recommended: false,
	// 	fatures: [
	// 		{
	// 			item: `Você monta o seu próprio pacote escolhendo os módulos que deseja utilizar.  Dispomos de ferramentas para controle fiscal e não fiscal e soluções voltadas para uso local, na web, no celular, pos e afins. Além disso, todas as nossas ferramentas trabalham de forma integrada. Fale com um especialista.`,
	// 			icon: <Sparkle weight='light' size={70} className='min-w-6 fill-orange-600' />,
	// 		},
	// 	],
	// 	description: { label: '' },
	// 	description2: { label: '' },
	// },
];

export default function Plans() {
	return (
		<section className='flex w-full flex-col items-center py-10 xl:py-20' id='planos'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Planos</h2>
				<div className='flex flex-col items-center justify-center gap-5 rounded-[40px] border border-primary/50 px-2 py-10 md:grid md:grid-cols-2 md:grid-rows-2 md:place-items-center xl:flex xl:flex-row'>
					{planos.map((_, i) => {
						return (
							<div key={i} className={`flex w-fit flex-col gap-1 rounded-[32px] ${_.recommended ? 'bg-amber-500/80' : ''} p-4 pt-4`}>
								<span className='h-6 pl-3 font-bold text-black/85'>{_.recommended ? 'Recomendado' : ''}</span>
								<div className={`flex h-[40rem] max-w-80 flex-col justify-between gap-4 rounded-3xl border border-amber-500 bg-white px-4 py-8 transition delay-150 ease-in-out lg:gap-5 lg:px-8 lg:py-12`}>
									<div className='w-full'>
										<h4 className='text-2xl font-semibold text-black/85'>{_.plan}</h4>
										<p className='text-xs text-black/70'>{_.description.label}</p>
									</div>
									<ul className='flex flex-col gap-2'>
										{_.fatures.map((_, i) => {
											return (
												<li key={i} className='flex items-center gap-2 text-xs leading-5 text-black/90'>
													{_.icon}
													<span>{_.item}</span>
												</li>
											);
										})}
									</ul>
									<div className='flex flex-col gap-1 lg:gap-4'>
										<p className='text-xs text-black/70'>{_.description2.label}</p>
										<h3 className={`text-3xl font-bold text-primary ${_.price ? '' : 'hidden'}`}>
											{_.price
												? new Intl.NumberFormat('pt-BR', {
														style: 'currency',
														currency: 'BRL',
													}).format(_.price)
												: ''}
											<span className='text-sm text-black/70'> Mensais</span>
										</h3>
										<p className='text-xs text-black/70'>{_.plan === 'Sírius SAT Prata - Cupom Fiscal' ? '* Pode ser integrado as nossas ferramentas, tais como: Pré Venda, Comanda, Delivery e outras.' : ''}</p>
										<ButtonExpert color='blue' label='Fale com um especialista' logo={false} />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<MeiosPagamentos color='#3E3E3E' className='self-center' />
			</div>
		</section>
	);
}

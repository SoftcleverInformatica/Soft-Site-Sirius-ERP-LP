import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function Funcionalidades() {
	const recursos = [
		{
			key: 'Vendas',
			value: [
				{ titulo: 'Ponto de Venda (PDV)', descricao: 'Contas a pagar e a receber', imagem: 'Screenshot do módulo de gestão financeira.' },
				{ titulo: 'Hub de Integração', descricao: 'Estoque em tempo real', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Vendas Realizadas', descricao: 'Do pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
			],
		},
		{
			key: 'Fiscal',
			value: [
				{ titulo: 'Ponto de Venda (PDV)', descricao: 'Contas a pagar e a receber', imagem: 'Screenshot do módulo de gestão financeira.' },
				{ titulo: 'Hub de Integração', descricao: 'Estoque em tempo real', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Vendas Realizadas', descricao: 'Do pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
			],
		},
		{
			key: 'Confecção',
			value: [
				{ titulo: 'Ponto de Venda (PDV)', descricao: 'Contas a pagar e a receber', imagem: 'Screenshot do módulo de gestão financeira.' },
				{ titulo: 'Hub de Integração', descricao: 'Estoque em tempo real', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Vendas Realizadas', descricao: 'Do pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
			],
		},
	];

	const exibirItemMenu = recursos.map((_, i) => (
		<AccordionItem key={i} value={`item-${i}`} className='border-0 '>
			<AccordionTrigger className='text-base font-bold border-2  rounded-xl p-1 px-3'>
				<span className=''>{_.key}</span>
			</AccordionTrigger>
			{_.value.map((_, j) => (
				<AccordionContent key={j} className=' px-6 py-2 text-base font-semibold '>
					<a href='#' className='flex justify-between items-center'>
						<span>{_.descricao}</span> <ArrowRight></ArrowRight>
					</a>
				</AccordionContent>
			))}
		</AccordionItem>
	));
	const exibirDetalhes = recursos.map((_, i) => (
		<>
			{_.value.map((_, j) => (
				<a href='#' className='flex justify-between items-center'>
					<span>{_.descricao}</span> <ArrowRight></ArrowRight>
				</a>
			))}
		</>
	));

	return (
		<section className='w-full flex flex-col items-center ' id='funcionalidades'>
			<div className={`	w-full flex flex-col gap-6 pt-10 px-4 md:px-10 md:pt-20 lg:px-24 lg:pt-28 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='text-3xl lg:text-5xl text-center font-extrabold leading-tight tracking-wide font-main'>Suas necessidades em um só lugar</h2>
				<div className='flex flex-col lg:flex-row justify-between gap-10 border-2 rounded-[40px] '>
					<div className='w-1/2 '>
						<Accordion className='flex flex-col gap-4 p-6 bg-white h-full w-full rounded-l-[40px]' type='single' collapsible>
							{exibirItemMenu}
						</Accordion>
					</div>
					<div className='w-1/2 bg-primary rounded-r-[40px] text-white '>{exibirDetalhes}</div>
				</div>
			</div>
		</section>
	);
}


'use client';

import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Funcionalidades() {
	const recursos = [
		{
			modulo: 'Vendas',
			funcionalidades: [
				{
					titulo: 'Pedidos de Vendas',
					descricao:
						'Integrado com o estoque e financeiro. Emissão de pedidos de vendas de maneira expressa ou detalhada. Diversas opções de filtros e relatórios e finalização de vendas parciais ou totais através da emissão de NF-e ou NFS-e. Geração de orçamentos e transferências, controle de entregas parciais com elaboração de romaneio de carga, geração de ordem de produção, múltiplos status, troca e devolução com geração de crédito ao cliente, reserva de produtos, controle de movimentações financeiras dos clientes, liberação e expedição de pedidos, impressão de recibo de entrega, etiquetas e pedidos e muito mais',
					imagem: 'Screenshot do módulo de gestão financeira.',
				},
				{
					titulo: 'Compras de Mercadorias',
					descricao:
						'Pedidos de Compras - Totalmente integrado com o estoque e financeiro. Permite ao usuário gerar pedidos de compras para serviços ou produtos. Também é possível importar arquivos XMLs enviado pelos fornecedores. Impressão de diversos modelos de pedidos de compra e diversas opções de filtros e relatórios.',
					imagem: 'Screenshot do módulo de gestão de estoque.',
				},
			],
		},
		{
			modulo: 'Financeiro',
			funcionalidades: [
				{
					titulo: 'Pagar',
					descricao:
						'Financeiro - Integrado com as compras e vendas. Controle detalhado das contas a pagar e a receber. Diversas opções de filtros e relatórios. Opções de controle de contas contábeis, centro de custos e departamento. Controle de conciliação bancárias. Gera boleto bancário com controle de remessa e retorno junto ao banco. Integração de pagamentos bancários através do SISPAG. Permite lançamento de despesas avulsas e de contas estimadas e/ou reais. Vínculo com conta corrente e cheques. Permite projeção de novas despesas, registro de pagamentos individuais, tudo individualmente ou através de filtro, Controle de fluxo de caixa, previsões e metas orçamentárias, controle de saldo bancários com transferência em contas correntes e muito mais. ',
					imagem: 'Screenshot do módulo de gestão financeira.',
				},
				{ titulo: 'Receber', descricao: 'Definir texto de descrição', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Conciliação', descricao: 'Definir texto de descrição', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Cobrança', descricao: 'Definir texto de descrição.', imagem: 'Imagem pendente' },
			],
		},
		{
			modulo: 'Fiscal',
			funcionalidades: [
				{
					titulo: 'NF-e',
					descricao:
						'Nota Fiscal Eletrônica- Totalmente integrado com o estoque e financeiro, Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a Secretaria da Fazenda SEFAZ. Rotinas de cancelamento e inutilização por faixa numérica, carta de correção, envio automático de e-mail com XML e PDF para o cliente, configurações de diversos tipos de operações com cálculo automático de impostos, pré-visualização e impressão do DANFE e opções de relatórios fiscais. ',
					imagem: 'Screenshot do módulo de gestão financeira.',
				},
				{
					titulo: 'Ct-e,',
					descricao:
						'Emissão de Conhecimento de Transporte Eletrônico (CT-e) com envio e autorização junto a SEFAZ. Diversos processos automatizados. Filtros e relatórios gerenciais. Cadastros de emitente, remetente, consignatário, redespacho, tomador, expedidor, recebedor e destinatário. Pré-visualização e impressão do Conhecimento de Transporte. ',
					imagem: 'Screenshot do módulo de gestão de estoque.',
				},
				{
					titulo: 'Mdf-e',
					descricao:
						'Emissão de Manifestação de Documentos Fiscais com a finalidade de atender empresas prestadoras de serviço cujo transporte seja realizado em veículos próprios, arrendados, ou mediante a contratação de transportador autônomo de cargas, com mais de uma NF-e ou CT-e. A finalidade do MDF-e é agilizar o registro em lote de documentos fiscais em trânsito e identificar a unidade de carga utilizada e demais características do transporte.',
					imagem: 'Imagem pendente',
				},
				{
					titulo: 'NFS-e',
					descricao:
						'Nota Fiscal de Serviços Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro. Envio automático de PDF por e-mail.',
					imagem: 'Imagem pendente',
				},
				{
					titulo: 'Sped Fiscal',
					descricao:
						'Totalmente integrado com compras e vendas. Cálculo de impostos de entrada e saída. Captura do arquivo XML. Atribuição automática das CFOP´S de entrada e das CST´S de ICMS, IPI, PIS E COFINS. Geração mensal do arquivo Sped para envio a SEFAZ e contabilidade. Geração de livro fiscal para conferência com livro da contabilidade. Permite conversão das unidades de medidas (compra x venda) e rateio de impostos. Pode ser contratado separadamente de nosso ERP e integrado ao seu sistema. Você não precisa substituir todos os sistemas de sua empresa.',
					imagem: 'Imagem pendente',
				},
				{
					titulo: 'Bloco K ',
					descricao:
						'Totalmente integrado com as compras, estoque e produção. O Bloco K atua como um componente do Sped Fiscal para controle detalhado dos saldos de entrada e saída de produtos e insumos. Geração mensal do arquivo Bloco K 200 e/ou 280 para envio a SEFAZ e para a contabilidade com movimentações das compras, vendas e produção. Também controla os insumos. Controla estoque próprio e estoque em poder de terceiros. Pode ser contratado separadamente de nosso ERP e integrado ao seu sistema. Você não precisa substituir todos os sistemas de sua empresa.',
					imagem: 'Imagem pendente',
				},
			],
		},
		{
			modulo: 'Assistência Técnica e Produção',
			funcionalidades: [
				{
					titulo: 'Produção',
					descricao:
						'Totalmente integrado com o estoque. Geração de ordem de produção a partir do pedido de venda. Controle por fases da produção, controle por grade, baixa automática das matérias primas e remessa parcial de matérias primas a terceiros. Carga automática de estoque dos produtos acabados, impressão de ordem de produção, ficha técnica e ou de corte. Envia pagamento a terceiros para as contas a pagar. ',
				},
				{
					titulo: 'Ordens de Serviços ',
					descricao:
						'Totalmente integrado com as vendas, estoque e financeiro. Controle de entradas dos itens que serão consertados. Geração de orçamentos e ordens de serviços. Envio para pedido de vendas e geração de nota fiscal. Baixa automática das peças utilizadas, diversas opções de status, filtros, relatório e rotinas com exportação para Excel. ',
					imagem: 'Screenshot do módulo de gestão de estoque.',
				},
				{
					titulo: 'Beneficiamento ',
					descricao:
						'Totalmente integrado com o estoque, vendas e financeiro. Permite ao usuário controle detalhado das entradas de mercadorias que passarão pelos processos de beneficiamento. Entrada de notas, emissão de pedidos de vendas totais e parciais, controle de saldos de matérias primas e produtos acabados, emissão de NF-es a partir do pedido de venda com possibilidade de acrescentar mais de uma operação na mesma NF-e.',
					imagem: 'Screenshot do módulo de gestão de estoque.',
				},
				{ titulo: 'Assistência Técnica', descricao: 'Definir texto de descrição.', imagem: 'Imagem pendente' },
			],
		},
	];

	const [selecionado, setSelecionado] = useState<{ modulo: string; item: number }>({ modulo: recursos[0].modulo, item: 0 });

	const item = (modulo: string, item: number) => {
		let exibirDetalhes = recursos.filter((item: any) => item.modulo === modulo);

		return (
			<div key={Math.random()} className='flex animate-fadeIn flex-col gap-4 p-6 opacity-0'>
				<h3 className='text-xl font-bold'>{exibirDetalhes[0].funcionalidades[item].titulo}</h3>
				<h6>{exibirDetalhes[0].funcionalidades[item].descricao}</h6>
				<Image alt='' src={'#'} width={1000} height={1000} className='h-96 w-full' />
				{/* <Image alt='' src={exibirDetalhes[0].funcionalidades[item].imagem} width={1000} height={1000} className='h-10 w-10' /> */}
			</div>
		);
	};

	return (
		<section className='flex w-full flex-col items-center' id='funcionalidades'>
			<div className={`flex w-full flex-col gap-6 px-4 pt-10 md:px-10 md:pt-20 lg:max-w-5xl lg:gap-20 lg:px-24 lg:pt-28 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Suas necessidades em um só lugar</h2>
				<div className='flex flex-col justify-between gap-10 rounded-[40px] border-2 lg:flex-row'>
					<div className='w-full lg:w-1/2'>
						<Accordion className='flex h-full w-full gap-4 overflow-x-auto rounded-es-[40px] rounded-se-[40px] rounded-ss-[40px] bg-white p-6 lg:flex-col lg:gap-0' type='single' collapsible defaultValue='item-0'>
							{recursos.map((recurso, i) => (
								<AccordionItem key={i} value={`item-${i}`} className='border-0'>
									<AccordionTrigger
										className={`flex h-40 w-48 shrink-0 items-end justify-start rounded-3xl border-2 border-gray-400 p-6 text-base font-semibold hover:text-primary hover:no-underline lg:h-auto lg:w-auto lg:items-center lg:justify-between lg:rounded-none lg:border-0 lg:border-b lg:p-2 ${selecionado.item === i ? '' : ''} `}
										onClick={() => setSelecionado({ modulo: recurso.modulo, item: 0 })}>
										<span className={`text-base font-bold ${recurso.modulo === selecionado.modulo ? 'text-primary' : ''}`}>{recurso.modulo}</span>
									</AccordionTrigger>
									{recurso.funcionalidades.map((_2, j) => (
										<AccordionContent key={j} className={`px-6 py-2 text-base font-semibold ${selecionado.item === j ? 'text-primary' : ''} `}>
											<a onClick={() => setSelecionado({ modulo: recurso.modulo, item: j })} className='flex items-center justify-between'>
												<span>{_2.titulo}</span> <ArrowRight></ArrowRight>
											</a>
										</AccordionContent>
									))}
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='w-full rounded-ee-3xl rounded-es-3xl bg-primary text-white lg:w-1/2 lg:rounded-es-none lg:rounded-se-3xl'>{item(selecionado.modulo, selecionado.item)}</div>
				</div>
			</div>
		</section>
	);
}

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
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Compras de Mercadorias',
					descricao:
						'Pedidos de Compras - Totalmente integrado com o estoque e financeiro. Permite ao usuário gerar pedidos de compras para serviços ou produtos. Também é possível importar arquivos XMLs enviado pelos fornecedores. Impressão de diversos modelos de pedidos de compra e diversas opções de filtros e relatórios.',
					imagem: 'screenshot do sistema',
				},
			],
		},
		{
			modulo: 'Financeiro',
			funcionalidades: [
				{
					titulo: 'Pagar',
					descricao:
						'Financeiro - Integrado com as compras e vendas. Controle detalhado das contas a pagar e a receber. Diversas opções de filtros e relatórios. Opções de controle de contas contábeis, centro de custos e departamento. Controle de conciliação bancária. Gera boleto bancário com controle de remessa e retorno junto ao banco. Integração de pagamentos bancários através do SISPAG. Permite lançamento de despesas avulsas e de contas estimadas e/ou reais. Vínculo com conta corrente e cheques. Permite projeção de novas despesas, registro de pagamentos individuais, tudo individualmente ou através de filtro, Controle de fluxo de caixa, previsões e metas orçamentárias, controle de saldo bancários com transferência em contas correntes e muito mais.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Receber',
					descricao:
						'Controle das contas a receber com emissão de boletos bancários. Possibilidade de filtros para relatórios detalhados sobre os recebimentos de clientes, gerenciamento de inadimplência e controle de fluxo de caixa.',
					imagem: 'Screenshot do módulo de gestão de estoque.',
				},
				{
					titulo: 'Conciliação',
					descricao:
						'Rotina para conciliar transações bancárias com os registros internos, permitindo maior controle sobre entradas e saídas financeiras, minimizando erros de registro e aumentando a transparência financeira.',
					imagem: 'Screenshot do módulo de gestão de estoque.',
				},
				{
					titulo: 'Cobrança',
					descricao:
						'Gerenciamento de cobranças de clientes com controle de inadimplência, emissão de avisos de cobrança, integração com bancos para envio de remessas de cobrança e controle de negociações e acordos de pagamento.',
					imagem: 'Imagem pendente',
				},
			],
		},
		{
			modulo: 'Fiscal',
			funcionalidades: [
				{
					titulo: 'NF-e',
					descricao:
						'Nota Fiscal Eletrônica- Totalmente integrado com o estoque e financeiro, Nota Fiscal Eletrônica (NF-e) com envio e autorização junto à Secretaria da Fazenda SEFAZ. Rotinas de cancelamento e inutilização por faixa numérica, carta de correção, envio automático de e-mail com XML e PDF para o cliente, configurações de diversos tipos de operações com cálculo automático de impostos, pré-visualização e impressão do DANFE e opções de relatórios fiscais.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Ct-e',
					descricao:
						'Emissão de Conhecimento de Transporte Eletrônico (CT-e) com envio e autorização junto à SEFAZ. Diversos processos automatizados. Filtros e relatórios gerenciais. Cadastros de emitente, remetente, consignatário, redespacho, tomador, expedidor, recebedor e destinatário. Pré-visualização e impressão do Conhecimento de Transporte.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Mdf-e',
					descricao:
						'Emissão de Manifestação de Documentos Fiscais para transporte em veículos próprios, arrendados ou transportador autônomo, com mais de uma NF-e ou CT-e. Agiliza o registro de documentos fiscais em trânsito e identifica a unidade de carga e características do transporte.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'NFS-e',
					descricao:
						'Nota Fiscal de Serviços Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro. Envio automático de PDF por e-mail.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Sped Fiscal',
					descricao:
						'Totalmente integrado com compras e vendas. Cálculo de impostos de entrada e saída. Captura do arquivo XML. Atribuição automática das CFOP´S de entrada e das CST´S de ICMS, IPI, PIS E COFINS. Geração mensal do arquivo Sped para envio à SEFAZ e contabilidade. Geração de livro fiscal para conferência com o livro da contabilidade.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Bloco K',
					descricao:
						'Componente do Sped Fiscal para controle detalhado dos saldos de entrada e saída de produtos e insumos. Geração mensal do arquivo Bloco K para envio à SEFAZ com movimentações de compras, vendas e produção. Controle de estoque próprio e em poder de terceiros.',
					imagem: 'screenshot do sistema',
				},
			],
		},
		{
			modulo: 'Assistência Técnica e Produção',
			funcionalidades: [
				{
					titulo: 'Produção',
					descricao:
						'Totalmente integrado com o estoque. Geração de ordem de produção a partir do pedido de venda. Controle por fases da produção, baixa automática de matérias-primas e remessa parcial de matérias-primas a terceiros. Carga automática de estoque dos produtos acabados e impressão de ordem de produção.',
				},
				{
					titulo: 'Ordens de Serviços',
					descricao:
						'Totalmente integrado com vendas, estoque e financeiro. Controle de entradas dos itens que serão consertados. Geração de orçamentos e ordens de serviços. Envio para pedido de vendas e geração de nota fiscal. Baixa automática das peças utilizadas, controle de status, filtros e relatórios.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Beneficiamento',
					descricao:
						'Controle detalhado das entradas de mercadorias para processos de beneficiamento. Emissão de pedidos de vendas totais e parciais, controle de saldos de matérias-primas e produtos acabados. Emissão de NF-es a partir do pedido de venda, com mais de uma operação na mesma NF-e.',
					imagem: 'screenshot do sistema',
				},
				{
					titulo: 'Assistência Técnica',
					descricao:
						'Controle de reparos e serviços técnicos, gerenciando o ciclo completo desde a entrada do equipamento até o conserto e retorno ao cliente. Geração de relatórios de serviços, controle de peças utilizadas e emissão de notas fiscais.',
					imagem: 'Imagem pendente',
				},
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
		<section className='flex w-full flex-col items-center py-10 xl:py-20' id='funcionalidades'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Suas necessidades em um só lugar</h2>
				<div className='flex flex-col justify-between gap-10 rounded-[40px] border-2 lg:flex-row'>
					<div className='w-full lg:w-1/2'>
						<Accordion className='flex h-full w-full gap-4 overflow-x-auto rounded-es-[40px] rounded-se-[40px] rounded-ss-[40px] bg-white p-6 lg:flex-col lg:gap-0' type='single' collapsible defaultValue='item-0'>
							{recursos.map((recurso, i) => (
								<AccordionItem key={i} value={`item-${i}`} className='mb-4 border-0'>
									<AccordionTrigger
										className={`flex h-40 w-48 shrink-0 items-end justify-start rounded-3xl border-2 p-6 text-base font-semibold hover:text-primary hover:no-underline lg:h-auto lg:w-auto lg:items-center lg:justify-between lg:rounded-xl lg:border-2 lg:p-3 ${selecionado.item === i ? '' : ''} `}
										onClick={() => setSelecionado({ modulo: recurso.modulo, item: 0 })}>
										<span className={`text-base font-bold ${recurso.modulo === selecionado.modulo ? 'text-primary' : ''}`}>{recurso.modulo}</span>
									</AccordionTrigger>
									{recurso.funcionalidades.map((_2, j) => (
										<AccordionContent key={j} className={`px-6 py-2 text-base font-semibold ${selecionado.item === j ? 'text-primary' : ''} `}>
											<a onClick={() => setSelecionado({ modulo: recurso.modulo, item: j })} className='flex items-center justify-between'>
												<span>{_2.titulo}</span> <ArrowRight className='hidden lg:block'></ArrowRight>
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

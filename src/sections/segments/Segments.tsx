'use client';

import { useEffect, useState } from 'react';
import Imagem5 from '@/assets/Image5.png';
import ButtonExpert from '@/components/button_expert';

export default function Segments() {
	const [isMobile, setIsMobile] = useState(true);
	useEffect(() => {
		if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

		function updateText() {
			if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		// Adiciona um ouvinte de evento de redimensionamento da janela
		window.addEventListener(`resize`, updateText);

		// Remove o ouvinte de evento ao desmontar o componente
		return () => {
			window.removeEventListener(`resize`, updateText);
		};
	}, []);

	return (
		<section className={`flex w-full flex-col items-center justify-center gap-[1.5rem] bg-sc`}>
			<div className='flex w-full flex-col gap-[1.5rem] px-[2rem] py-[2.5rem] lg:max-w-3xl lg:gap-[2.5rem] xl:max-w-5xl'>
				<h1 className={`text-2xl font-bold text-white`}>Segmentos Atendidos</h1>

				<div className={`flex w-full flex-col gap-[1.5rem] md:w-full lg:w-full lg:gap-0`}>
					<div className={`flex flex-col items-center justify-between gap-[1.5rem] md:flex-row lg:flex-row lg:gap-0 lg:py-0`}>
						<div className={`varejo flex h-[13.8rem] w-full flex-col gap-3 rounded-lg bg-cover bg-center bg-no-repeat p-5 md:w-full lg:m-2 lg:h-[10.3rem] lg:w-full`}>
							<h2 className='font-semibold text-white'>Varejo</h2>
							<p className='font-light text-white'>
								Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.
							</p>
						</div>

						<div className={`atacado flex h-[13.8rem] w-full flex-col gap-3 rounded-lg bg-cover bg-no-repeat p-5 md:w-full lg:m-2 lg:h-[10.3rem] lg:w-full`}>
							<h2 className='font-semibold text-white'>Atacado e Distribuição</h2>
							<p className='font-light text-white'>NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.</p>
						</div>
					</div>
					<div className={`flex flex-col items-center justify-between gap-[1.5rem] md:flex-row lg:flex-row lg:gap-0 lg:py-0`}>
						<div className={`industria flex h-[13.8rem] w-full flex-col gap-3 rounded-lg bg-cover bg-no-repeat p-5 md:w-full lg:m-2 lg:h-[10.3rem] lg:w-[29rem]`}>
							<h2 className='font-semibold text-white'>Indústria e Serviço</h2>
							<p className='font-light text-white'>Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.</p>
						</div>
						<div className={`fiscal flex h-[13.8rem] w-full flex-col gap-3 rounded-lg bg-cover bg-no-repeat p-5 md:w-full lg:m-2 lg:h-[10.3rem] lg:w-[29rem]`}>
							<h2 className='font-semibold text-white'>Fiscal</h2>
							<p className='font-light text-white'>Sped ICMS, IPI, Pis e Cofins e Bloco K completo.</p>
						</div>
					</div>
				</div>

				<div className='flex w-full flex-col items-center justify-center md:mt-[2rem]'>
					<ButtonExpert color={'orange'} label='Fale com um especialista' />
				</div>
			</div>
		</section>
	);
}

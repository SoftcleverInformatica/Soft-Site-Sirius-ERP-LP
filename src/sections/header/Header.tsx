'use client';
import Image from 'next/image';
import HeaderFull from '../../../assets/HeaderBG.png';
import HeaderPartial from '../../../assets/header.png';
import LogoAzul from '../../../assets/logo_azul.svg';
import LogoBranco from '../../../assets/logo_branco.svg';

import ButtonExpert from '@/src/components/button_expert';
import { useEffect, useState } from 'react';
import WhatsappIcon from '../../../assets/whatsapp.svg';

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);

	const link_whatsapp = 'https://s.tintim.app/whatsapp/039a35a9-d169-4b36-98c3-cfef6a71d234/21710a1b-daa7-48be-a44d-2f66d3526f1f';

	useEffect(() => {
		if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

		function updateText() {
			if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		// Adiciona um ouvinte de evento de redimensionamento da janela
		window.addEventListener('resize', updateText);

		// Remove o ouvinte de evento ao desmontar o componente
		return () => {
			window.removeEventListener('resize', updateText);
		};
	}, []);

	const bg = isMobile ? { backgroundImage: `url(${HeaderFull.src})` } : undefined;
	return (
		<header
			style={bg}
			className={`grid relative overflow-x-hidden grid-cols-12 grid-rows-8 gap-3 h-[42rem] min-h-[27rem]  lg:min-h-[40rem] lg:max-h[42rem] bg-no-repeat bg-right-top pb-4 lg:bg-cover`}>
			<div
				className='col-span-full pl-10 min-w-[20rem] row-span-1 
            md:row-span-2 md:absolute md:left-[5%]
            lg:pl-0 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 flex lg:items-center pt-2'>
				<Image
					className='w-[60%] md:max-h-[4rem] lg:max-h-[3.5rem] lg:w-[100%] lg:ml-[6.5rem]'
					alt='logo Softclever'
					src={isMobile ? LogoBranco : LogoAzul}
				/>
			</div>

			<div
				className='flex flex-col col-start-2 col-span-10 row-start-3 p-2 gap-3 text-[#f2faff] 
            lg:text-[#003658] lg:col-span-5 lg:row-span-8 lg:col-start-3 lg:row-start-4'>
				<div className='flex flex-col gap-10'>
					<h2 className='text-5xl font-bold'>Sirius ERP</h2>

					<p className='text-lg font-normal'>
						Tenha controle total de todos os departamentos da sua empresa através do Sirius ERP: o único sistema sem contrato
						de fidelidade e que <span className='font-bold'> garante o melhor atendimento através de uma equipe dedicada</span>
					</p>
				</div>
			</div>

			<div
				className='col-span-10  col-start-2 row-start-8 
				lg:col-span-4 lg:col-start-3 lg:row-start-8'>
				<ButtonExpert
					color={'orange'}
					label='Quero atendimento personalizado'
					animation='animate-pulse'
				/>
			</div>
			{!isMobile && (
				<>
					<div className='flex justify-start items-start flex-col absolute top-[15vh] left-[80vw]'>
						<a
							href={link_whatsapp}
							target='_blank'
							className='col-span-2 w-[8rem]'></a>
					</div>

					<Image
						className='h-[40.7rem] lg:col-span-6 lg:col-start-7'
						alt='background_image'
						src={HeaderPartial}
					/>
				</>
			)}
		</header>
	);
}

'use client';
import Image from 'next/image';
import LogoAzul from '../../../assets/logo_azul.svg';
import LogoBranco from '../../../assets/logo_branco.svg';
import HeaderFull from '../../../assets/HeaderBG.png';
import HeaderPartial from '../../../assets/header.png';

import WhatsappIcon from '../../../assets/whatsapp.svg';
import { useEffect, useState } from 'react';
import WhatsappIconWhite from '../../../assets/whatsapp_white.svg';
import { Button } from '@/src/components/ui/button';



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
				<div className='flex flex-col gap-[18px]'>
					<h2 className='text-5xl font-bold'>Sirius ERP</h2>

					<h4 className='text-3xl font-bold text-justify'>Sistema de Gestão para empresas de todos os tipos e tamanhos</h4>
				</div>

				<p className='text-lg font-normal'>
					Tenha controle total de todos os departamentos da sua empresa, seja fiscal, comercial, estoque, financeiro, produção e
					muito mais.
				</p>
			</div>

			<div
				className='col-span-10  col-start-2 row-start-8 
            lg:col-span-3 lg:col-start-3 lg:row-start-8'>
				<Button
					onClick={() => {
						window.open(link_whatsapp, '_blank');
					}}
					className={`gap-2 p-3 w-[100%] bg-white text-sc hover:bg-zinc-300 
                lg:bg-sc lg:text-white lg:hover:bg-scHover lg:px-1 lg:py-6 lg:flex`}>
					<span className='text-lg md:font-normal '>Fale com um Especialista</span>
					<Image
						alt='WhatsappIcon'
						src={isMobile ? WhatsappIcon : WhatsappIconWhite}
					/>
				</Button>
			</div>
			{!isMobile && (
				<>
					<div className='flex justify-start items-start flex-col absolute top-[15vh] left-[80vw]'>
						<button
							onClick={() => {
								window.open(link_whatsapp, '_blank');
							}}
							className='bg-white text-[#003658] flex flex-row gap-1  justify-center col-span-2 items-center w-[8rem] p-1 rounded-md hover:bg-zinc-300  hover:transition'>
							<span className='font-semibold text-[#003658] w-2rem h-fit pr-2'>Contato</span>

							<Image
								className='w-[1.2rem] h-fit'
								alt='WhatsappIcon'
								src={WhatsappIcon}
							/>
						</button>
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

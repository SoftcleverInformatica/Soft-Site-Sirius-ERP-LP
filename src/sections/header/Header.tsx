'use client';

import { Button } from '@/src/components/ui/button';
import { LogoSoftclever } from '@/src/components/ui/svgs';

export default function Header() {
	// const link_whatsapp = 'https://s.tintim.app/whatsapp/039a35a9-d169-4b36-98c3-cfef6a71d234/21710a1b-daa7-48be-a44d-2f66d3526f1f';

	return (
		<header className='w-full flex flex-col items-center lg:bg-hero-laptop-sat-web bg-no-repeat bg-[right_1rem_top_20rem] xl:bg-[right_10rem_top_14rem] lg:bg-[length:400px_266px]  '>
			<div className={`max-w-5xl lg:max-w-6xl xl:max-w-7xl  w-full py-28 px-4 lg:px-24 flex flex-col gap-6 lg:gap-20 `}>
				<div className='flex flex-col items-center w-full fixed top-0  left-0 bg-primary '>
					<div className='max-w-5xl lg:max-w-6xl xl:max-w-7xl  w-full px-4 lg:px-24 flex flex-col gap-6 lg:gap-20  '>
						<p className='w-full  text-start text-secondary font-primary text-xl   py-3 px-4  '>Planos a partir de: R$ 000,00</p>
					</div>
				</div>
				<nav className=''>
					<ul className='flex flex-col lg:flex-row gap-10 justify-between items-center text-lg font-light '>
						<li>
							<LogoSoftclever width={190} height={53} color='#003658' />
						</li>
						<div className=' flex-col lg:flex-row gap-10 hidden lg:flex'>
							<li>
								<a href='#'>Sobre</a>
							</li>
							<li>
								<a href='#'>Funcionalidades</a>
							</li>
							<li>
								<a href='#'>Preços</a>
							</li>
							<li>
								<a href='#'>Contato</a>
							</li>
						</div>
						<div className='w-[190px]'></div>
					</ul>
				</nav>
				<div className='flex gap-20'>
					<div className='w-full lg:w-3/5'>
						<h2 className='text-3xl lg:text-5xl font-extrabold leading-tight uppercase tracking-wide font-main'>Transforme a Gestão do Seu Negócio com Nosso Software ERP</h2>
						<p className='my-12 text-xl leading-9 font-normal tracking-wider font-secondary '>Simplifique processos, aumente a eficiência e tome decisões baseadas em dados com nosso ERP líder de mercado.</p>
						<Button size={'lg'} className=''>
							Solicitar Demonstração Gratuita
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

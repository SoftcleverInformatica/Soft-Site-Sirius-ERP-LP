'use client';

import { Button } from '@/components/ui/button';
import { LogoSoftclever } from '@/components/ui/svgs';

export default function Header() {
	// const link_whatsapp = 'https://s.tintim.app/whatsapp/039a35a9-d169-4b36-98c3-cfef6a71d234/21710a1b-daa7-48be-a44d-2f66d3526f1f';
	const f1 = () => {
		console.log('teste');
	};
	return (
		<header className='w-full flex flex-col items-center  '>
			<div className={`	w-full flex flex-col gap-6 pt-40 px-4 md:px-10 md:pt-20 lg:px-24 lg:pt-28 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<div className='w-full h-40 flex flex-col items-center fixed top-0  left-0 justify-center bg-primary md:h-20'>
					<div className=' bg-gradient-to-r from-primary from-60% via-blue-500  w-full h-full absolute left-0 animate-range  z-0 '></div>
					<div className=' w-full flex flex-col  items-center justify-between z-10 px-4 md:px-10 gap-4 md:gap-6 lg:gap-20  md:flex-row lg:px-24 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]'>
						<p className=' text-center md:text-start text-white font-primary font-medium md:font-bold text-xl '>Planos a partir de: R$ 89,90</p>
						<Button size={'lg'} className='rounded-full md:font-medium text-lg hover:ring-2 ring-primary-foreground ' variant={'white'}>
							Solicitar sua Demonstração
						</Button>
					</div>
				</div>

				<nav className='bg-white border-gray-200 dark:bg-gray-900'>
					<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
						<LogoSoftclever width={190} height={53} color='#0050DC' />
						<button
							onClick={ f1}
							type='button'
							className='hidden  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						>
							<span className='sr-only'>Open main menu</span>
							<svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
								<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
							</svg>
						</button>

						<div className='hidden w-full md:block md:w-auto' id='navbar-default'>
							<ul className='flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
								<li>
									<a href='#sobre' className='block px-4 rounded-full text-black  border-2 border-border  '>
										Sobre
									</a>
								</li>
								<li>
									<a href='#funcionalidades' className='block px-4 rounded-full text-black  border-2 border-border '>
										Funcionalidades
									</a>
								</li>
								<li>
									<a href='#precos' className='block px-4 rounded-full text-black  border-2 border-border '>
										Preços
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className='flex flex-col md:flex-row gap-8 md:gap-10 items-center '>
					<div className='w-full lg:w-3/5'>
						<h2 className='text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight  tracking-wide font-main  '>Transforme a Gestão do Seu Negócio com Nosso Software ERP</h2>
						<p className='my-6 md:my-12 text-base md:text-lg lg:text-xl  lg:leading-9 font-normal tracking-wider font-secondary '>Simplifique processos, aumente a eficiência e tome decisões baseadas em dados com nosso ERP líder de mercado.</p>
						<div className='flex flex-wrap gap-6 items-center md:items-start justify-center w-full '>
							<Button size={'lg'} className='rounded-full w-56 sm:w-auto'>
								Solicitar Demonstração
							</Button>
							<Button size={'lg'} className='rounded-full w-56 sm:w-auto' variant={'white'}>
								Conheça os planos
							</Button>
						</div>
					</div>
					<div className='hidden sm:block bg-primary max-w-full w-[29rem] h-48 lg:h-[18rem] rounded-3xl md:rounded-[40px] bg-hero-laptop-sat-web bg-no-repeat bg-[left_50%_top_50%] bg-[length:16rem_10.6rem] lg:bg-[length:20rem_13.3rem]   '></div>
				</div>
			</div>
		</header>
	);
}


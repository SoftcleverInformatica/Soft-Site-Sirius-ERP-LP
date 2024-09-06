'use client';

import { Button } from '@/components/ui/button';
import { LogoSoftclever } from '@/components/ui/svgs';
import { planos } from '../plan/Plans';

export default function Header() {
	const link_whatsapp = 'https://s.tintim.app/whatsapp/039a35a9-d169-4b36-98c3-cfef6a71d234/21710a1b-daa7-48be-a44d-2f66d3526f1f';

	return (
		<header className='z-10 flex w-full flex-col items-center pt-44 xl:pt-28'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-16 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<div className='fixed left-0 top-0 flex h-40 w-full flex-col items-center justify-center bg-primary md:h-20'>
					<div className='absolute left-0 z-0 h-full w-full animate-range bg-gradient-to-r from-primary from-60% via-[#6d9bea]'></div>
					<div className='z-10 flex w-full flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-6 md:px-10 lg:max-w-5xl lg:gap-20 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
						<p className='text-center font-primary text-xl font-medium text-white md:text-start md:font-bold'>
							{`Planos a partir de: ` +
								new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
									planos.reduce((min, plan) => {
										if (plan.price !== undefined) {
											return plan.price < min ? plan.price : min;
										}
										return min;
									}, Infinity),
								)}
						</p>
						<Button size={'lg'} className='rounded-full text-lg ring-primary-foreground hover:ring-2 md:font-medium' variant={'white'} role='link' onClick={() => window.open(link_whatsapp, '_blank')}>
							Solicitar sua Demonstração
						</Button>
					</div>
				</div>

				<nav className='border-gray-200 bg-white dark:bg-gray-900'>
					<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
						<a href='https://softclever.com.br/'>
							<LogoSoftclever width={190} height={53} className='fill-primary' />
						</a>

						<div className='hidden w-full md:block md:w-auto' id='navbar-default'>
							<ul className='mt-4 flex flex-col p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse'>
								<li>
									<a href='#funcionalidades' className='block rounded-full border-2 border-border px-4 text-black'>
										Funcionalidades
									</a>
								</li>
								<li>
									<a href='#planos' className='block rounded-full border-2 border-border px-4 text-black'>
										Planos
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className='flex flex-col items-center gap-8 md:flex-row md:gap-10'>
					<div className='w-full lg:w-3/5'>
						<h2 className='font-main text-2xl font-extrabold leading-tight tracking-wide lg:text-4xl xl:text-5xl'>
							Sistema de Gestão Empresarial - Para Atacado, Distribuição, Indústria e Serviços de todos os tipos e tamanhos.{' '}
						</h2>
						<p className='my-6 font-secondary text-base font-normal tracking-wider md:my-12 md:text-lg lg:text-xl lg:leading-9'>
							Simplifique processos, aumente a eficiência e tome decisões baseadas em dados com nosso ERP líder de mercado.
						</p>
						<div className='flex w-full flex-wrap items-center justify-center gap-6 md:items-start'>
							<Button size={'lg'} className='w-56 rounded-full sm:w-auto' role='link' onClick={() => window.open(link_whatsapp, '_blank')}>
								Solicitar Demonstração
							</Button>
							<Button size={'lg'} className='w-56 rounded-full sm:w-auto' variant={'white'} role='link' onClick={() => (window.location.href = '/#planos')}>
								Conheça os planos
							</Button>
						</div>
					</div>
					<div className='hidden h-48 w-[29rem] max-w-full rounded-3xl bg-laptop bg-[length:16rem_10.6rem] bg-[left_50%_top_50%] bg-no-repeat sm:block md:rounded-[40px] lg:h-[18rem] lg:bg-[length:22rem_16.5rem]'></div>
				</div>
			</div>
		</header>
	);
}

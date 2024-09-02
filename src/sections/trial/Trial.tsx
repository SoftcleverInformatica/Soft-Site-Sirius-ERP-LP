import { Button } from '@/components/ui/button';

export default function Trial() {
	return (
		<section className='flex w-full flex-col items-center'>
			<div className={`flex w-full flex-col gap-6 px-4 pt-40 md:px-10 md:pt-20 lg:max-w-5xl lg:gap-20 lg:px-24 lg:pt-28 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-3xl font-extrabold uppercase leading-tight tracking-wide lg:text-5xl'>Demonstração</h2>
				{/* <Button size={'lg'} className=''>
					Solicitar Demonstração Gratuita
				</Button> */}
			</div>
		</section>
	);
}

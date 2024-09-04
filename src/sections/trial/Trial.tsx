import { Button } from '@/components/ui/button';

export default function Trial() {
	return (
		<section className='flex w-full flex-col items-center'>
			<div className={`flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='font-main text-3xl font-extrabold uppercase leading-tight tracking-wide lg:text-5xl'>Demonstração</h2>
				{/* <Button size={'lg'} className=''>
					Solicitar Demonstração Gratuita
				</Button> */}
			</div>
		</section>
	);
}

import { Button } from '@/components/ui/button';

export default function Trial() {
	return (
		<section className='w-full flex flex-col items-center '>
			<div className={`	w-full flex flex-col gap-6 pt-40 px-4 md:px-10 md:pt-20 lg:px-24 lg:pt-28 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<h2 className='text-3xl lg:text-5xl font-extrabold leading-tight uppercase tracking-wide font-main'>Demonstração</h2>
				<Button size={'lg'} className=''>
					Solicitar Demonstração Gratuita
				</Button>
			</div>
		</section>
	);
}

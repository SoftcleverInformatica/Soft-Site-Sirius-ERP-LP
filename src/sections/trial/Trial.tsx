import { Button } from '@/src/components/ui/button';

export default function Trial() {
	return (
		<section className='w-full flex flex-col items-center '>
			<div className='max-w-5xl lg:max-w-6xl  xl:max-w-7xl w-full py-10 px-4 lg:px-24 flex flex-col gap-6 lg:gap-20 '>
				<h2 className='text-3xl lg:text-5xl font-extrabold leading-tight uppercase tracking-wide font-main'>Demonstração</h2>
				<Button size={'lg'} className=''>
					Solicitar Demonstração Gratuita
				</Button>
			</div>
		</section>
	);
}

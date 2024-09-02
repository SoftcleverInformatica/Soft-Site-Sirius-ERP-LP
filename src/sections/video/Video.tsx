import ButtonExpert from '@/components/button_expert';

export default function Video() {
	return (
		<section className='flex w-full flex-col items-center gap-10 bg-sc px-10 py-14 text-white'>
			<div className='flex w-full flex-col items-center gap-12 lg:max-w-2xl xl:max-w-4xl'>
				<h2 className='text-3xl'>Assista a apresentação do Sirius S@T </h2>
				<iframe
					className='max-w-full rounded-lg'
					width='768'
					height='432'
					src='https://www.youtube.com/embed/GwttGRBPf1M?si=HEIr4GfUUxxk4svd'
					title='Sistema Sat Fiscal / cupom fiscal eletrônico - Sistema ERP - SAT - Sírius ERP'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen></iframe>
			</div>
			<ButtonExpert color={'orange'} label='Converse agora com um especialista' />
		</section>
	);
}

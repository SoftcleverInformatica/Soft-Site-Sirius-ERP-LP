import ButtonExpert from '@/src/components/button_expert';

export default function Video() {
	return (
		<section className='flex flex-col gap-10 bg-sc text-white px-10 py-14 items-center w-full'>
			<div className='flex flex-col items-center gap-12 lg:max-w-2xl xl:max-w-4xl w-full '>
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
			<ButtonExpert
				color={'orange'}
				label='Converse agora com um especialista'
			/>
		</section>
	);
}

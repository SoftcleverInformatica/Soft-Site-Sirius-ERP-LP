import { Facebook, Instagram, Youtube } from '@/components/ui/svgs';

export default function Footer() {
	return (
		<div className='flex w-full flex-col items-center bg-primary py-10 text-xs text-white xl:py-16'>
			<div className='flex w-full flex-col gap-6 px-4 md:px-10 lg:max-w-5xl lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<div className='flex w-full flex-col items-start justify-between gap-6 border-b border-white py-8 sm:flex-row sm:px-10 2xl:px-32'>
					<div className='flex flex-col gap-1'>
						<h4 className='text-lg font-bold'>REDE SOCIAIS</h4>
						<p>Siga-nos e fique por dentro das novidades.</p>

						<div className='flex gap-2'>
							<a href='https://www.facebook.com/softcleverinformatica'>
								<Facebook className='h-10 w-10' />
							</a>

							<a href='https://www.instagram.com/soft.clever/'>
								<Instagram className='h-10 w-10' />
							</a>
							<a href='https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw'>
								<Youtube className='h-10 w-10' />
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<h4 className='text-lg font-bold'>CONTATO</h4>
						<div className='flex justify-between'>
							<div className='flex flex-col gap-1 font-bold'>
								<p>Endereço: </p>
								<br />
								<p>E-mail: </p>
								<p>Telefones: </p>
								<p>Atendimento: </p>
							</div>
							<div className='flex flex-col gap-1 text-end'>
								<p>
									<a href='https://maps.app.goo.gl/koYiUVgcow2f75437'> Rua João Alves Pimenta, 880</a>
								</p>
								<p>
									<a href='https://maps.app.goo.gl/koYiUVgcow2f75437'> Freguesia do Ó - São Paulo - SP</a>
								</p>
								<p>
									<a href='mailto:softclever@softclever.com.br'>softclever@softclever.com.br</a>{' '}
								</p>
								<p>
									<a href='tel:+551139913923'>11 3991-3923</a> / <a href='tel:+551123618334'>11 2361-8334</a>
								</p>
								<p> Seg - Sex | 08h - 18h</p>
							</div>
						</div>
					</div>
				</div>

				<p className='text-center text-xs'>
					© 1994 - {new Date().getFullYear()} | Soft Clever <a href='https://softclever.com.br/politica-de-privacidade'>Política de Privacidade</a>
				</p>
			</div>
		</div>
	);
}

import Image from 'next/image';
import iconClient from '../../../assets/clients.svg';
import iconProject from '../../../assets/project.svg';
import iconTeam from '../../../assets/team.svg';
import iconUser from '../../../assets/user.svg';

export default function Client() {
	return (
		<div className='px-[14.375rem] py-[3.625rem] flex flex-col '>
			<div className='flex flex-col items-center space-y-12 '>
				<h2>São Mais de 30 anos de experiências</h2>
				<p>
					Nós da Soft Clever temos o intuito de ter sua empresa como membro do nosso grupo e não somente como mais um cliente.
				</p>
				<div className='flex gap-20'>
					{/* Users */}
					<div className='flex flex-col gap-1.5 items-center justify-items-center '>
						<div className='flex gap-5 items-center justify-items-center gap-'>
							<Image
								className=''
								alt='Ícone de clientes'
								src={iconClient}></Image>
							<div className='flex flex-col gap-2 items-center justify-items-center '>
								<p className='text-sc ' >CLIENTES</p>
								<p className='text-pv1 '>3000 +</p>
							</div>
						</div>
						<div>
							<p>+ de 3000</p>
							<p>CLIENTES</p>
						</div>
					</div>
					{/* Clients */}
					{/* projects */}
					{/* team */}
				</div>
			</div>
		</div>
	);
}

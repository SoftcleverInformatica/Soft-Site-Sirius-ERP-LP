import Image from 'next/image';
import iconClient from '../../../assets/clients.svg';
import iconProject from '../../../assets/project.svg';
import iconTeam from '../../../assets/team.svg';
import iconUser from '../../../assets/user.svg';
import ButtonExpert from '@/components/button_expert';

export default function Client() {
	return (
		<div className='overflow-x-hidden flex flex-col gap-10 px-[2.5rem] py-[1.8rem] items-center lg:px-[14.375rem] lg:py-[3.625rem]  '>
			<div className='flex flex-col items-center space-y-12 lg:max-w-2xl xl:max-w-5xl w-full '>
				<h2 className='text-2xl font-bold text-sc	'>São Mais de 30 anos de experiências</h2>
				<p className='text-sc text-lg'>
					Nós da Soft Clever temos o intuito de ter sua empresa como membro do nosso grupo e não somente como mais um cliente.
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:flex md:gap-15 lg:gap-20 '>
					{/* Users */}
					<div className='flex flex-col gap-1.5 items-center justify-items-center '>
						<div className='flex gap-5 items-center justify-items-center gap-'>
							<Image
								className=''
								alt='Ícone de clientes'
								src={iconUser}></Image>
							<div className='flex flex-col gap-2 items-start justify-items-center '>
								<p className='text-sc font-sc text-lg font-extrabold' >USUÁRIOS</p>
								<p className='text-pv1 text-lg font-extrabold '>12000 +</p>
							</div>
						</div>
						<div>
							<p className='text-sc text-base font-extrabold'>+ de 12000</p>
							<p className='text-sc text-base font-extrabold'>USUÁRIOS</p>
						</div>
					</div>
					{/* Clients */}
					<div className='flex flex-col gap-1.5 items-center justify-items-center '>
						<div className='flex gap-5 items-center justify-items-center gap-'>
							<Image
								className=''
								alt='Ícone de clientes'
								src={iconClient}></Image>
							<div className='flex flex-col gap-2 items-start justify-items-center '>
								<p className='text-sc font-sc text-lg font-extrabold' >CLIENTES</p>
								<p className='text-pv1 text-lg font-extrabold '>3000 +</p>
							</div>
						</div>
						<div>
							<p className='text-sc text-base font-extrabold'>+ de 3000</p>
							<p className='text-sc text-base font-extrabold'>CLIENTES</p>
						</div>
					</div>
					{/* projects */}
					<div className='flex flex-col gap-1.5 items-center justify-items-center '>
						<div className='flex gap-5 items-center justify-items-center gap-'>
							<Image
								className=''
								alt='Ícone de clientes'
								src={iconProject}></Image>
							<div className='flex flex-col gap-2 items-start justify-items-center '>
								<p className='text-sc font-sc text-lg font-extrabold' >PROJETOS</p>
								<p className='text-pv1 text-lg font-extrabold '>1000 +</p>
							</div>
						</div>
						<div>
							<p className='text-sc text-base font-extrabold'>+ de 1000</p>
							<p className='text-sc text-base font-extrabold'>PROJETOS</p>
						</div>
					</div>
					{/* team */}
					<div className='flex flex-col gap-1.5 items-center justify-items-center '>
						<div className='flex gap-5 items-center justify-items-center '>
							<Image
								className=''
								alt='Ícone de clientes'
								src={iconTeam}></Image>
							<div className='flex flex-col gap-2 items-start justify-items-center '>
								<p className='text-sc font-sc text-lg font-extrabold sm:grid-cols-2' >NOSSA <br/> EQUIPE</p>
								<p className='text-pv1 text-lg font-extrabold '>20 +</p>
							</div>
						</div>
						<div>
							<p className='text-sc text-base font-extrabold'>+ de 20</p>
							<p className='text-sc text-base font-extrabold'>FUNCIONÁRIOS</p>
						</div>
					</div>
					
				</div>
			</div>
				<ButtonExpert color={'blue'} className="gap-2 py-6 px-12 w-[100%] bg-sky-950 text-white hover:bg-scHover lg:w-[15.25rem] " />
		</div>
	);
}

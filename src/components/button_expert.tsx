import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

interface props {
	className?: string;
	animation?: string;
	color?: string;
	label?: string;
	logo?: boolean;
}
export default function ButtonExpert({ className, animation, logo = true, color = 'white', label = 'Fale com um  especialista' }: props) {
	return (
		<a
			className={`flex items-center justify-center gap-2 rounded-full px-12 py-2 hover:opacity-90 ${color === 'white' ? 'bg-white text-primary hover:bg-slate-500' : ''} ${color === 'orange' ? 'bg-orange-700 hover:bg-orange-600' : ''} ${color === 'blue' ? 'bg-primary text-white hover:bg-primary/90' : ''} ${animation ? animation : ''} ${className} `}
			href='https://s.tintim.app/whatsapp/039a35a9-d169-4b36-98c3-cfef6a71d234/21710a1b-daa7-48be-a44d-2f66d3526f1f'
			target='_blank'>
			<span className={`text-center text-sm ${color == 'white' && 'font-semibold'} ${color == 'white' ? 'text-primary' : 'text-white'} `}>{label}</span>
			{logo ? <WhatsappLogo size={32} weight='fill' /> : ''}
		</a>
	);
}

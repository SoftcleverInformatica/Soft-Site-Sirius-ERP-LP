import Plans from '@/sections/plan/Plans';
import Beneficios from '../sections/beneficios/Beneficios';
import Footer from '../sections/footer/Footer';
import Funcionalidades from '../sections/funcionalidades/Funcionalidades';
import Header from '../sections/header/Header';
import ProvasSociais from '../sections/provas-sociais/ProvasSociais';

export default function Home() {
	return (
		<div className='flex flex-col font-secondary text-black/85'>
			<Header />
			<Beneficios />
			<Funcionalidades />
			<Plans />
			<ProvasSociais />
			{/* <Trial /> */}
			{/* <Video /> */}
			{/* <Products /> */}
			{/* <Differential /> */}
			{/* <Segments /> */}
			{/* <Feedback /> */}
			{/* <Questions /> */}
			{/* <AboutUs /> */}
			{/* <Client /> */}
			<Footer />
		</div>
	);
}

import AboutUs from '../sections/about-us/AboutUs';
import Beneficios from '../sections/beneficios/Beneficios';
import Client from '../sections/client/Client';
import Differential from '../sections/differential/Differential';
import Feedback from '../sections/feedback/Feedback';
import Footer from '../sections/footer/Footer';
import Funcionalidades from '../sections/funcionalidades/Funcionalidades';
import Header from '../sections/header/Header';
import Plans from '../sections/plan/Plans';
import Price from '../sections/price/Price';
import Products from '../sections/product/Products';
import ProvasSociais from '../sections/provas-sociais/ProvasSociais';
import Questions from '../sections/questions/Questions';
import Segments from '../sections/segments/Segments';
import Trial from '../sections/trial/Trial';
import Video from '../sections/video/Video';

export default function Home() {
	return (
		<div className='  flex flex-col text-muted font-secondary '>
			<Header />
			<Beneficios />
			<Funcionalidades />
			<ProvasSociais />
			<Trial />
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

import FeCarousel from '../components/fe_carousel';
import ProductPage from './product_page';

export default function Home() {
	return (
		<div
		// style={{
		// 	marginTop: '2rem'
		// }}
		>
			<FeCarousel></FeCarousel>
			<div
				style={{
					marginTop: '20px',
					marginBottom: '20px'
				}}
			>
				<ProductPage />
			</div>
		</div>
	);
}

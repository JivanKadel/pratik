import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/fe_carousel.css';
import Pizza from '../assets/pizza.avif';
export default function FeCarousel() {
	return (
		<Carousel
			autoPlay={true}
			infiniteLoop={true}
			showThumbs={false}
			dynamicHeight={false}
		>
			<div className="fe_carousel">
				<img
					alt="Buff Momo"
					src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9tb3xlbnwwfDB8MHx8fDA%3D"
				/>
				<p className="legend">Buff MoMo</p>
			</div>
			<div className="fe_carousel">
				<img alt="Pizza" src={Pizza} />
				<p className="legend">Pizza</p>
			</div>
			<div className="fe_carousel">
				<img
					alt="Steak"
					src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				/>
				<p className="legend">Steak</p>
			</div>
		</Carousel>
	);
}

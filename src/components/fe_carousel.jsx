import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function FeCarousel() {
	return (
		<Carousel>
			<div>
				<img
					alt="Buff Momo"
					src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9tb3xlbnwwfDB8MHx8fDA%3D"
				/>
				<p className="legend">Buff MoMo</p>
			</div>
			<div>
				<img
					alt="Buff Momo"
					src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9tb3xlbnwwfDB8MHx8fDA%3D"
				/>
				<p className="legend">Buff MoMo</p>
			</div>
			<div>
				<img
					alt="Buff Momo"
					src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9tb3xlbnwwfDB8MHx8fDA%3D"
				/>
				<p className="legend">Buff MoMo</p>
			</div>
		</Carousel>
	);
}

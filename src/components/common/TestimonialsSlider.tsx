import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

interface Testimonial {
	name: string;
	experience: string;
	rating: number;
}

const TestimonialsSlider = () => {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const res = await fetch(
					"https://api.sheets2json.com/v1/doc/?url=https://docs.google.com/spreadsheets/d/10o-ugO4H7GaC1YA4gDxeG3rc6yHzIru-RYSP_ZXN5zw/edit"
				);
				const raw = await res.json();
				const data = raw.slice(1).map((item: any) => ({
					name: item[1],
					experience: item[2],
					rating: item[3],
				}));
				setTestimonials(data);
			} catch (error) {
				console.error("Error fetching testimonials:", error);
			}
		};

		fetchTestimonials();
	}, []);

	return (
		<Swiper
			modules={[ Autoplay]}
			spaceBetween={20}
		
			autoplay={{ delay: 1000 }}
			slidesPerView={1}
			loop
			>
			{testimonials.map((testimonial, index) => {
				const slideShift = index % 2 === 0 ? "rotate-6" : "-rotate-6";
				const cleanExperience = testimonial.experience
					?.trim()
					.replace(/^["']+|["']+$/g, "");
				const firstChar = cleanExperience?.charAt(0) || "";
				const restText = cleanExperience?.slice(1) || "";
				const isLong = cleanExperience.length > 400;

				const displayedText =
					isLong && !isExpanded ? restText.slice(0, 400) + "..." : restText;

				return (
					<SwiperSlide
						key={index}
						className={`swiper-slide ${slideShift} transform `}>
						<div
							key={index}
							className='custom-slide p-6 rounded-lg bg-gray-800 text-white min-h-[200px] flex flex-col justify-center items-center'>
							<p className='text-lg italic text-gray-300 text-center mb-4'>
								&quot;{testimonial.experience}&quot;
							</p>
							<div className='flex items-center justify-center mb-2'>
								<StarRating rating={testimonial.rating} />
							</div>
							<p className='font-semibold text-sky-400 text-center'>
								- {testimonial.name}
							</p>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default TestimonialsSlider;

import { Star, StarHalf, StarIcon, StarOff } from "lucide-react"; // or any icon lib
import { RiDoubleQuotesR } from "react-icons/ri";

export const renderStars = (rating: number) => {
	const fullStars = Math.floor(rating);
	const stars = [];

	for (let i = 0; i < 5; i++) {
		if (i < fullStars) {
			stars.push(
				<StarIcon key={i} className='text-yellow-400 inline w-5 h-5' />
			);
		} else {
			stars.push(<StarOff key={i} className='text-gray-400 inline w-5 h-5' />);
		}
	}

	return stars;
};

const StarRating = ({ rating }: { rating: number }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		stars.push(
			<Star
				key={i}
				className={`h-5 w-5 ${
					i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
				}`}
			/>
		);
	}
	return <div className='flex items-center'>{stars}</div>;
};

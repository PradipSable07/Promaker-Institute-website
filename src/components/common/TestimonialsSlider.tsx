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
			modules={[Navigation, Autoplay]}
			spaceBetween={20}
			navigation
			autoplay={{ delay: 2000 }}
			loop
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 3,
				},
			}}>
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
						<div className='h-full flex flex-col justify-center items-center p-4 text-yellow-100 rounded-lg max-w-md'>
							<div className='mt-2 text-center h-full w-full '>
								<BiSolidQuoteAltLeft className='inline-block text-4xl mr-2 mb-1 align-text-bottom capitalize' />
								<span className='text-2xl font-bold mr-1 uppercase'>
									{firstChar}
								</span>
								<span>{displayedText}</span>
								{isLong && (
									<button
										className='ml-2 text-blue-400 underline text-sm'
										onClick={() => setIsExpanded(!isExpanded)}>
										{isExpanded ? "Read less" : "Read more"}
									</button>
								)}
								<span>
									<RiDoubleQuotesR className='inline-block mb-2 ml-2 align-text-bottom' />
								</span>
							</div>

							<div className='flex w-full h-full py-2 justify-end items-end flex-col'>
								<h3 className='text-xl font-bold capitalize'>
									{testimonial.name}
								</h3>
								<div
									className='flex justify-end items-center'
									title={`Rating: ${testimonial.rating}/5`}>
									{renderStars(Number(testimonial.rating))}
								</div>
							</div>
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

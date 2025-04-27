import React, { useEffect, useState } from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { renderStars } from './common/TestimonialsSlider';
import { RiDoubleQuotesR } from 'react-icons/ri';

interface Testimonial {
	name: string;
	experience: string;
	rating: number;
}
const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isExpanded,setIsExpanded] = useState(false)
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
    <section className=' py-20 px-6 text-center  mx-auto lg:min-h-[80dvh] flex flex-col justify-center items-center'>
    <div className=' flex flex-col max-w-7xl gap-6 w-full h-full'>
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
					
						<div className='h-full w-full flex flex-col justify-center items-center p-4 border text-yellow-100 rounded-lg'>
							<div className='mt-2 text-start h-full w-full '>
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
					
				);
			})}
    </div>
</section>
  )
}

export default TestimonialSection
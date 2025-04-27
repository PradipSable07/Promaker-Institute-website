"use client";
import FeedBack from "@/components/common/FeedbackPage";
import Image from "next/image";
import Link from "next/link";
import {
	FaTelegramPlane,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
} from "react-icons/fa";

const page = () => {
	return (
		<>
			<section className='max-w-7xl mx-auto px-4 pt-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-8'>
				{/* Contact Info Section */}
				<div className='w-full lg:w-1/2 text-white flex flex-col justify-center items-center lg:items-start'>
					<h1 className='text-4xl font-bold mb-6 text-sky-400'>Contact Us</h1>

					<ul className='space-y-4 text-lg mx-auto'>
						<li className='flex items-start gap-4'>
							<FaMapMarkerAlt className='text-xl mt-1 text-blue-400' />
							<span>
								<b>ProMaker Institute</b>
								<br />
								<span className='text-sm text-gray-300 capitalize'>
									Cidco Growth Center, CIDCO Waluj Mahanagar 1, Waluj,
									Chhatrapati Sambhaji Nagar, Dharmapur, Maharashtra 431136
								</span>
							</span>
						</li>
						<li className='flex items-center gap-4'>
							<FaPhoneAlt className='text-xl text-green-400' />
							<a href='tel:+91 7219396227' className='hover:underline'>
								+91 7219396227
							</a>
						</li>
						<li className='flex items-center gap-4'>
							<FaEnvelope className='text-xl text-yellow-400' />
							<a
								href='mailto:contact@promakerinstitute.com'
								className='hover:underline'>
								contact@promakerinstitute.com
							</a>
						</li>
						<li className='flex items-center gap-4'>
							<FaTelegramPlane className='text-xl text-blue-400' />
							<a
								href='https://t.me/promakerinstitute'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'>
								Join our Telegram Channel
							</a>
						</li>
					</ul>

					{/* QR Code */}
				</div>

				{/* SVG Illustration */}
				<div className='w-full lg:w-1/2 mx-auto hidden md:block'>
					<p className='mb-4 text-center text-gray-300'>
						Scan to join our Telegram channel:
					</p>
					<Image
						src='/assets/images/photo_2025-04-21 23.19.50.jpeg'
						alt='Telegram QR Code'
						width={240}
						height={240}
						className='rounded-lg shadow-md animate-fade-in mx-auto'
					/>
				</div>
			</section>
			<FeedBack />
		</>
	);
};

export default page;

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CourseInfo from "@/components/courses/CourseInfo";
import TestimonialsSlider from "@/components/common/TestimonialsSlider";
import Head from "next/head";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";


interface Testimonial {
    name: string;
    experience: string;
    rating: number;
}
export default function Home() {
	
  
  
	return (
		<>
			<Head>
				<title>ProMaker Institute | Master the Stock Market</title>
				<meta
					name='description'
					content='Learn stock market trading, investment strategies, and financial skills with ProMaker Institute. Join expert-led courses to gain real-world experience.'
				/>
				<meta
					name='keywords'
					content='stock market courses, trading education, financial literacy, stock trading, investment strategies, ProMaker Institute, learn to trade, NSE, BSE, market analysis, technical analysis, candlestick patterns, stock market India, trading psychology, share market training'
				/>
				<meta name='author' content='ProMaker Institute' />
				<meta name='robots' content='index, follow' />
				<meta
					property='og:title'
					content='ProMaker Institute | Master the Stock Market'
				/>
				<meta
					property='og:description'
					content='Join ProMaker Institute to master stock market skills and become a confident trader. Over 1000+ students trained!'
				/>
				<meta
					property='og:image'
					content='/assets/images/photo_2024-10-17 21.25.25.webp'
				/>
				<meta
					property='og:url'
					content='https://promaker-institute-website.vercel.app/'
				/>
				<meta name='twitter:card' content='summary_large_image' />
			</Head>

			<main className='bg-[#11102d] text-white'>
				{/* Hero */}
				<section className='flex max-w-7xl mx-auto lg:min-h-[100dvh] my-40 lg:my-0 flex-wrap items-center justify-between lg:flex-nowrap gap-4'>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6 }}
						className='w-full text-center flex flex-col justify-center gap-4 lg:text-start lg:w-1/2 px-4'>
						<h1 className='text-5xl lg:text-7xl lg:text-start font-extrabold text-sky-400'>
							Master the Stock Market with ProMaker Institute
						</h1>
						<p className='text-xl text-gray-200'>
							Learn trading strategies, investment principles, and financial
							insights from industry experts.
						</p>
						<div className='mt-10 flex gap-4 lg:mt-5 items-center justify-center lg:justify-start'>
							<motion.div
								whileInView={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: 50 }}
								transition={{ duration: 0.6, delay: 0.3 }}>
								<Link
									href='/courses'
									className='button rounded-full  bg-blue-500 text-white hover:bg-green-500'
									type='button'>
									Learn, Trade, and Grow with Confidence{" "}
									<span className='button__icon-wrapper text-black '>
										<svg
											viewBox='0 0 14 15'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='button__icon-svg text-black'
											width='10'>
											<path
												d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
												fill='currentColor'></path>
										</svg>

										<svg
											viewBox='0 0 14 15'
											fill='none'
											width='10'
											xmlns='http://www.w3.org/2000/svg'
											className='button__icon-svg button__icon-svg--copy'>
											<path
												d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
												fill='currentColor'></path>
										</svg>
									</span>
								</Link>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: 50 }}
								transition={{ duration: 0.6, delay: 0.6 }}>
								<Link
									href='https://t.me/promakerinstitute'
									target='_blank'
									className=' button rounded-full bg-green-500 text-white hover:bg-blue-500 '
									type='button'>
									Join Our Community
									<span className='button__icon-wrapper'>
										<svg
											viewBox='0 0 14 15'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='button__icon-svg text-black'
											width='10'>
											<path
												d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
												fill='currentColor'></path>
										</svg>

										<svg
											viewBox='0 0 14 15'
											fill='none'
											width='10'
											xmlns='http://www.w3.org/2000/svg'
											className='button__icon-svg button__icon-svg--copy'>
											<path
												d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
												fill='currentColor'></path>
										</svg>
									</span>
								</Link>
							</motion.div>
						</div>
					</motion.div>
					{/* Testimonial Slider Container */}
					<div className='lg:w-1/2 w-full  '>
					
							<TestimonialsSlider />
						
					</div>
				</section>
				{/* About */}
				<section className='text-center py-20 px-6 lg:min-h-[60vh] flex flex-col justify-center items-center bg-gray-800'>
					<div className='max-w-7xl w-full mx-auto flex flex-col items-center'>
						{/* Title */}
						<div className='w-full'>
							<h2 className='text-4xl font-bold text-sky-400'>
								Why Choose ProMaker Institute?
							</h2>
							<p className='text-lg text-gray-300 mt-4'>
								Gain real-world experience with expert-led courses.
							</p>
						</div>

						{/* Grid Section */}
						<div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-8 mt-8'>
							{[
								"Expert-led courses",
								"Hands-on trading",
								"Community support",
								"Real-world strategies",
							].map((item, index) => (
								<motion.div
									key={index}
									whileInView={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: 20 }}
									transition={{ delay: index * 0.2 }}
									className='p-6 bg-[#11102d] rounded-lg shadow-md w-full text-center'>
									<h3 className='text-xl font-semibold text-green-400'>
										{item}
									</h3>
								</motion.div>
							))}
						</div>
					</div>
				</section>
				{/* Courses Section */}
				<CourseInfo />

				<section className='text-center py-20 px-6 lg:min-h-[50vh] flex flex-col justify-center items-center bg-gray-800'>
					<h3 className='text-4xl font-bold text-sky-400'>Contact Us Now</h3>
					<p className='text-lg text-gray-300 mt-4'>
						Ready to take your trading to the next level? Contact us today and unlock
						your trading potential.
					</p>

					
						<Link 
							href='/contact'
							type="button"
							className='inline-block mt-10 shadow-gray-900 hover:bg-gradient-to-r border border-dashed duration-700 animate-bounce hover:animate-none md:w-1/6  text-white px-8 py-3 rounded-full hover:from-sky-600 hover:border-none hover:to-green-600 transition-all  shadow-lg text-lg font-semibold'>
						
							Contact Us
						</Link>
				
				</section>
				{/* Testimonial Section */}
				{/* <section className='bg-gray-900  px-6 text-center  mx-auto lg:min-h-[80dvh] flex flex-col justify-center items-center'>
					<h2 className='text-4xl font-bold text-sky-400 mb-8'>
						What Our Students Say
					</h2>
					<TestimonialsSlider />
				</section> */}
				{/* Blog Section */}
				{/* <section className='py-20 px-6 max-w-7xl lg:min-h-[80dvh] h-full mx-auto flex flex-col justify-center items-center'>
				<h2 className='text-4xl font-bold text-sky-400 text-center'>
					Latest Insights & Market Trends
				</h2>
				<div className='grid md:grid-cols-2 backdrop:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
					{["Top 5 Stocks", "Trading Mistakes", "Candlestick Reading"].map(
						(blog, index) => (
							<motion.div
								key={index}
								whileInView={{ opacity: 1, scale: 1 }}
								initial={{ opacity: 0, scale: 0.9 }}
								transition={{ delay: index * 0.2 }}
								className='p-6 bg-gray-800 rounded-lg shadow-md'>
								<h3 className='text-xl font-semibold text-green-400'>{blog}</h3>
								<p className='text-gray-300 mt-2'>
									Discover key insights and market trends.
								</p>
								<Link href='/blog' className='text-blue-400 mt-4 block'>
									Read More
								</Link>
							</motion.div>
						)
					)}
				</div>
			</section> */}
			</main>
		</>
	);
}

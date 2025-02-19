"use client"
import CourseInfo from "@/components/courses/CourseInfo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
	return (
		<>
			<section className='flex max-w-7xl mx-auto lg:min-h-[100dvh] my-40 lg:my-0 flex-wrap items-center justify-between lg:flex-nowrap'>
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
								href='/contact'
								className='button rounded-full  bg-blue-500 text-white hover:bg-green-500'
								type='button'>
								Get Started for Free{" "}
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
								href='/contact'
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
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.6 }}
					className='hidden lg:flex lg:w-1/2 justify-center'>
					<Image
						src='/assets/images/undraw_all_the_data_re_hh4w.svg'
						alt='Share Market data'
						width='500'
						height={500}
					/>
				</motion.div>
			</section>
			<CourseInfo />
		</>
	);
};

export default page;

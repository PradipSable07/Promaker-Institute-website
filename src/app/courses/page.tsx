"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CourseInfo2 from "@/components/courses/CourseInfo2";

const page = () => {
	return (
		<>
			<section className='flex max-w-7xl mx-auto lg:min-h-[100dvh] my-40 lg:my-0 flex-wrap items-center justify-between lg:flex-nowrap'>
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.6 }}
					className='w-full text-center flex flex-col justify-center items-center gap-4 px-4 group'>
					<Link
						href={
							"https://muffx.courses.store/662730?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
						}
						target='_blank'>
						<h1 className='text-5xl lg:text-7xl font-extrabold text-sky-400 transition-all duration-300 ease-in-out  group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:via-sky-600 group-hover:to-green-700 group-hover:bg-clip-text group-hover:text-transparent'>
							Master the Stock Market with ProMaker Institute
						</h1>

						<p className='text-xl text-gray-200'>
							Learn trading strategies, investment principles, and financial
							insights from industry experts.
						</p>
					</Link>
				</motion.div>
			</section>
			<Link
				href={
					"https://muffx.courses.store/662730?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
				}
				target='_blank'>
				<CourseInfo2 />
			</Link>
			<section className='py-12 bg-gray-900 h-[calc(50vh)] flex justify-center items-center'>
				<div className='container mx-auto text-center'>
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-3xl font-bold text-white mb-16'>
						Ready to Start Your Trading Journey?
					</motion.h2>
					<Link
						href={
							"https://muffx.courses.store/662730?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
						}
						className='inline-block hover:bg-gradient-to-r border border-dashed duration-700 animate-bounce hover:animate-none md:w-1/6  text-white px-8 py-3 rounded-full hover:from-sky-600 hover:border-none hover:to-green-600 transition-all  shadow-lg text-lg font-semibold'>
						Enroll Now
					</Link>
				</div>
			</section>
		</>
	);
};

export default page;

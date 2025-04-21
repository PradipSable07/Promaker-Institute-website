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
					
					<h1 className='text-5xl lg:text-7xl font-extrabold text-sky-400 transition-all duration-300 ease-in-out  group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:via-sky-600 group-hover:to-green-700 group-hover:bg-clip-text group-hover:text-transparent'>
						Master the Stock Market with ProMaker Institute
					</h1>

					<p className='text-xl text-gray-200'>
						Learn trading strategies, investment principles, and financial
						insights from industry experts.
					</p>
				</motion.div>
			</section>
			<CourseInfo2 />
		</>
	);
};

export default page;

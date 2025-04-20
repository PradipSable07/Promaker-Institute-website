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
					className='w-full text-center flex flex-col justify-center items-center gap-4  px-4'>
					<h1 className='text-5xl lg:text-7xl font-extrabold text-sky-400'>
						Master the Stock Market with ProMaker Institute
					</h1>
					<p className='text-xl text-gray-200'>
						Learn trading strategies, investment principles, and financial
						insights from industry experts.
					</p>
				
				</motion.div>
				
			</section>
		</>
	);
};

export default page;

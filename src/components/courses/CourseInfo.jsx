import React from "react";

import { motion } from "framer-motion";
import { coursesData } from "@/utility/Data";
import { SiRedbull } from "react-icons/si";
import Link from "next/link";

const CourseInfo = () => {
	return (
		<section className='py-20 px-6  lg:min-h-[80dvh] flex flex-col justify-center items-center'>
			<h2 className='text-4xl font-bold text-sky-400 text-center'>
				Explore Our Courses
			</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto '>
				{coursesData.courses.map((course, id) => (
					<motion.div
						key={id}
						whileInView={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0.9 }}
						transition={{ delay: id * 0.2 }}
						className='p-6 w-full min-w-[22rem] bg-gray-800 rounded-lg shadow-md'>
						<h3 className='text-2xl font-semibold text-green-400'>
							{course.title}
						</h3>
						<p className='text-gray-300 text-base font-medium  mt-2'>
							{course.overview}
						</p>
						<motion.ul
							initial='hidden'
							whileInView='visible'
							// viewport={{ once: true }}
							className='mt-4'>
							{course.content_suggestions.map((content, index) => (
								<motion.li
									key={index}
									variants={{
										hidden: { opacity: 0, x: 50 }, // Start from right (x: 50)
										visible: {
											opacity: 1,
											x: 0, // Move to original position (x: 0)
											transition: { delay: index * 0.2, duration: 0.5 }, // Smooth staggered effect
										},
									}}
									className='flex items-center gap-2 text-gray-400 text-sm font-light mt-2'>
									<SiRedbull className='text-red-400 text-xl' />
									{content}
								</motion.li>
							))}
						</motion.ul>
						<Link href='/courses' className='text-blue-400 mt-4 block'>
							Learn More
						</Link>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default CourseInfo;

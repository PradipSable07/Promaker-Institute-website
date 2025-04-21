import React from "react";
import courseData from "@/utility/Data";
import { RiStockFill, RiStockLine } from "react-icons/ri";

const CourseInfo2 = () => {
	return (
		<>
			<section className=' bg-gray-800 h-[calc(70vh)]  px-4 py-8'>
				<div className='max-w-7xl mx-auto h-full lg:p-12 flex justify-center rounded-lg items-center flex-col shadow-customGlow2 shadow-orange-50'>
					<h2 className='text-4xl font-bold pb-8 text-sky-400 text-center '>
						Course Curriculum
					</h2>
					<div className=' px-4  text-white flex flex-col justify-center items-center'>
						<p className='my-2 text-sm md:text-lg'>
							Duration:{" "}
							<strong className='text-yellow-200'>{courseData.duration}</strong>{" "}
							| Schedule:{" "}
							<strong className='text-yellow-200'>{courseData.schedule}</strong>{" "}
							| Time:{" "}
							<strong className='text-yellow-200'>{courseData.timing}</strong>
						</p>

						<div className='mb-8'>
							<h3 className='text-2xl font-semibold py-8 text-sky-300 text-start'>
								Delivery Format
							</h3>
							<ul className=' list-inside text-gray-300 list-none'>
								{courseData.delivery.map((item, i) => (
									<li key={i}> 📈 {item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='max-w-7xl mx-auto px-4 py-10 '>
				<h3 className='text-4xl font-semibold py-8 text-sky-300 text-center'>
					Course Outline
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 '>
					{courseData.modules.map((mod, idx) => (
						<div
							key={idx}
							className='px-8 py-12  rounded-lg border border-gray-800 shadow-customGlow shadow-blue-900 hover:shadow-red-600 hover:-translate-y-2 hover:scale-105 hover:translate-x-1 hover:rotate-2 transition-all duration-300 hover:bg-blue-950'>
							<h4 className='text-xl font-bold bg-gradient-to-r from-green-600 to-red-300 bg-clip-text text-transparent mb-4'>
								{" "}
								{mod.title}
							</h4>
							<ul className='list-image-none text-gray-200 flex flex-col gap-6'>
								{mod.topics.map((topic, i) => (
									<li key={i} className='flex items-center gap-2 '>
										<div className="flex ">
											<RiStockFill className='text-green-600' />
											<RiStockLine className='text-red-600 mt-4' />
										</div>
										{topic}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default CourseInfo2;

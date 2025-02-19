import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<section className='flex max-w-7xl mx-auto  min-h-[80dvh]  flex-wrap items-center justify-between lg:flex-nowrap'>
			<div className='w-full text-center flex flex-col justify-center gap-4 lg:text-start lg:w-1/2  '>
				<h1 className='text-7xl font-extrabold text-sky-400'>
					Master the Stock Market with Expert Guidance
				</h1>
				<p className='text-xl text-gray-200'>
					Join our comprehensive courses and live sessions to elevate your
					trading skills and knowledge{" "}
				</p>
				<div className='flex gap-4 mt-5 items-center'>
					<Link
						href='/contact'
						className='button rounded-full  bg-blue-500 text-white hover:bg-green-600'
						type='button'>
						Get Started Today
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
					<Link
						href='/contact'
						className=' button rounded-full bg-green-500 text-white hover:bg-blue-600 '
						type='button'>
						Join Free Live Session
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
				</div>
			</div>
			<div className='hidden lg:flex lg:w-1/2  justify-center'>
				<Image
					src='/assets/images/undraw_all_the_data_re_hh4w.svg'
					alt=' Share Market data'
					width='500'
					height={500}
				/>
			</div>
		</section>
	);
};

export default page;

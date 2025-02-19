"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='bg-[#11102d] text-white'>
      {/* Hero */}
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
            Learn trading strategies, investment principles, and financial insights from industry experts.
          </p>
          <div className='mt-10 flex gap-4 lg:mt-5 items-center'>
            <Link
              href='/contact'
              className='button rounded-full bg-blue-500 text-xs md:text-lg text-white hover:bg-green-500'
              type='button'>
              Get Started for Free
              <span className='button__icon-wrapper text-xs md:text-lg text-black '>
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
              </span>
            </Link>
            <Link
              href='/contact'
              className='button rounded-full text-xs md:text-lg bg-green-500 text-white hover:bg-blue-500'
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
              </span>
            </Link>
          </div>
        </motion.div>
        <div className='hidden lg:flex lg:w-1/2 justify-center'>
          <Image
            src='/assets/images/undraw_all_the_data_re_hh4w.svg'
            alt='Share Market data'
            width='500'
            height={500}
          />
        </div>
      </section>
      {/* About */}
      <section className='text-center py-20 lg:py-0 px-6 lg:min-h-[60dvh] flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold text-sky-400'>
          Why Choose ProMaker Institute?
        </h2>
        <div className='mt-8 h-full flex flex-col justify-start items-center'>
          <p className='text-lg text-gray-300 mt-4'>
            Gain real-world experience with expert-led courses.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 h-full gap-8 mt-8'>
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
                className='p-6 bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-green-400'>{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section className='py-20 px-6 max-w-7xl mx-auto lg:min-h-[80dvh] flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold text-sky-400 text-center'>
          Explore Our Courses
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
          {[
            "Beginner’s Guide",
            "Technical Analysis",
            "Fundamental Analysis",
            "Algo Trading",
          ].map((course, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.2 }}
              className='p-6 bg-gray-800 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-green-400'>{course}</h3>
              <p className='text-gray-300 mt-2'>
                Learn the fundamentals and advanced strategies.
              </p>
              <Link href='/courses' className='text-blue-400 mt-4 block'>
                View Course
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonial Section */}
      <section className='bg-gray-900 py-20 px-6 text-center lg:min-h-[80dvh] flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold text-sky-400'>
          What Our Students Say
        </h2>
        <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 }}
              className='p-6 bg-gray-800 rounded-lg shadow-md'>
              <p className='text-gray-300'>
                "Amazing course! I gained real trading confidence."
              </p>
              <h3 className='text-green-400 mt-4'>- Student {index}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Blog Section */}
      <section className='py-20 px-6 max-w-7xl lg:min-h-[80dvh] h-full mx-auto flex flex-col justify-center items-center'>
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
      </section>
    </main>
  );
}
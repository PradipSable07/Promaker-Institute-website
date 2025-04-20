import React from 'react'

const TestimonialSection = () => {
  return (
    <section className='bg-gray-900 py-20 px-6 text-center  mx-auto lg:min-h-[80dvh] flex flex-col justify-center items-center'>
    <h2 className='text-4xl font-bold text-sky-400'>
        What Our Students Say
    </h2>
    <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-6'>
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
  )
}

export default TestimonialSection
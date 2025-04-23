"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>About Us | ProMaker Institute</title>
        <meta
          name="description"
          content="Learn more about Santosh Devare and ProMaker Institute – one of India's top stock market training platforms with 8+ years of expertise, 1000+ trained students, and award-winning TradingView indicators."
        />
        <meta
          name="keywords"
          content="stock market, trading, ProMaker Institute, Santosh Devare, TradingView, stock analysis, custom indicator, stock market education, technical analysis"
        />
        <meta name="author" content="ProMaker Institute" />
      </Head>

      <section className="flex max-w-7xl mx-auto min-h-[80dvh] flex-wrap items-center justify-between lg:flex-nowrap py-16 px-4">
        <div className="w-full text-center flex flex-col justify-center gap-4 lg:text-start lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-sky-400">
            About ProMaker Institute
          </h1>
          <p className="text-xl text-gray-300">
            Founded by <span className="font-semibold text-white">Santosh Devare</span>, a seasoned stock market educator with over 8 years of hands-on experience, ProMaker Institute is dedicated to transforming trading journeys. Our approach blends deep technical insight with simplified learning methods.
          </p>
          <p className="text-md text-gray-400">
            Santosh Devare was honored by TradingView for analyzing the most stocks under a single profile. He has educated more than <strong>1000 students</strong> across India and beyond. His proprietary TradingView analysis tool boasts a <strong>99%+ accuracy guarantee</strong>, helping users make informed, confident trades.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/contact"
              className="button rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-green-600 transition">
              Contact Us
            </Link>
            <Link
              href="/courses"
              className="button rounded-full bg-green-500 text-white px-6 py-2 hover:bg-blue-600 transition">
              Explore Courses
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 justify-center">
          <Image
            src="/assets/images/ownerPic.jpg"
            alt="Online Learning Illustration"
            width={500}
            height={500}
			className="object-contain rounded-tr-[4rem] rounded-bl-[4rem] hover:rounded-tl-[6rem] hover:rounded-br-[6rem] hover:rounded-bl-none hover:rounded-tr-none transition-all duration-300"
          />
        </div>
      </section>

      {/* Second Section - Vision & Values */}
      <section className="bg-[#020f29] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-6">Our Vision & Core Values</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            At ProMaker Institute, we envision building a financially independent community by demystifying the stock market. Our core values revolve around integrity, transparency, and result-oriented mentorship.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
              <p className="text-gray-400">We share what works — real strategies with real data and results.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Accuracy</h3>
              <p className="text-gray-400">Our custom-built TradingView tools deliver 99%+ reliable market calls.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Empowerment</h3>
              <p className="text-gray-400">We educate and equip you to trade independently with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#081a3a] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-10">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl text-left">
              <p className="text-gray-200">"Santosh sir's strategies changed my entire trading mindset. Within 2 months, I started seeing consistent profits!"</p>
              <h4 className="text-white font-semibold mt-4">– Aakash J., Mumbai</h4>
            </div>
            <div className="bg-white/5 p-6 rounded-xl text-left">
              <p className="text-gray-200">"His indicator is next level. So accurate and easy to use. I never enter a trade without it now."</p>
              <h4 className="text-white font-semibold mt-4">– Priya R., Pune</h4>
            </div>
            <div className="bg-white/5 p-6 rounded-xl text-left">
              <p className="text-gray-200">"The live sessions are very engaging. Doubts are cleared instantly. You can feel the expertise in every word."</p>
              <h4 className="text-white font-semibold mt-4">– Harsh M., Nashik</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#020f29] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-sky-400 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">What makes your TradingView tool special?</h3>
              <p className="text-gray-400">It is a proprietary indicator developed over years of real market experience and backtesting — delivering over 99% accurate signals.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">Can a beginner join your courses?</h3>
              <p className="text-gray-400">Absolutely. We have tailored content from beginner to advanced levels, with live support and mentorship included.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a guarantee for profits?</h3>
              <p className="text-gray-400">While no one can promise profits in the market, our goal is to make you an informed and disciplined trader with data-backed strategies.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import TestimonialsSlider from "@/components/common/TestimonialsSlider";
import { motion } from "framer-motion";
import { HighlighterIcon } from "lucide-react";
import { FiTrendingDown } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { GiDiamondHard } from "react-icons/gi";
import { TbTableOptions } from "react-icons/tb";
import { GiStumpRegrowth } from "react-icons/gi";
import TestimonialSection from "@/components/TestimonialSection";

// Data for Milestones
const milestones = [
	{
		title: "1000+ Students",
		description: "Trained worldwide through our courses.",
	},
	{
		title: "5 Years of Growth",
		description: "Since launching ProMaker in 2019.",
	},
	{

		title: "Free Zone Alerts Group",
		description: "Special Telegram group for students from free zones.",
	},
	{

		title: "Special student Telegram group",
		description: "Special Telegram group for students from free zones.",
	}
];

// Data for Core Values
const coreValues = [
	{
		title: "Practical Learning",
		description: "Hands-on training with real-world examples.",
	},
	{
		title: "Community Support",
		description: "A thriving network of fellow traders.",
	},
	{
		title: "Ethical Guidance",
		description: "Integrity and transparency in our teachings.",
	},
	// Add more core values here
];

const AboutUsPage = () => {
	const tradingJourney = [
		{
			type: "paragraph",
			text: `I started trading in the stock market just like many others — without any formal learning.`,
		},
		{
			type: "highlight",
			text: `2014-15: The First Dive and the First Loss`,
			icon: (
				<FiTrendingDown className='h-5 w-5 inline-block mr-2 text-red-400' />
			),
		},
		{
			type: "paragraph",
			text: `Inspired by a friend, I jumped into intraday, futures, and options trading. Without proper knowledge, I made one mistake after another — until I wiped out my entire trading account.`,
		},
		{
			type: "pull-quote",
			text: `"At that moment, I convinced myself that trading was not for me and returned to my business, thinking success in the stock market was just luck."`,
		},
		{
			type: "highlight",
			text: `2017: A Renewed Hope`,
			icon: (
				<HighlighterIcon className='h-5 w-5 inline-block mr-2 text-yellow-400' />
			),
		},
		{
			type: "paragraph",
			text: `But destiny had other plans. I again met some trader friends who motivated me to return to trading. With hope but no strategy, I started again — and suffered an even bigger loss. This time, the failure hit deeper.`,
		},
		{
			type: "paragraph",
			text: `I began questioning myself — "If I could succeed in every other area of life, why not in trading?"`,
		},
		{
			type: "highlight",
			text: `The Turning Point: Seeking Knowledge`,
			icon: (
				<GiReturnArrow className='h-5 w-5 inline-block mr-2 text-green-400' />
			),
		},
		{
			type: "paragraph",
			text: `I consulted experienced traders and realized a hard truth: I had incomplete knowledge. So, I decided to stop trading temporarily and dedicated myself fully to learning and practicing — seriously, passionately, like crazy.`,
		},
		{
			type: "highlight",
			text: `One Year of Intense Learning`,
			icon: (
				<GiDiamondHard className='h-8 w-8 inline-block mr-2 text-yellow-200' />
			),
		},
		{
			type: "list",
			items: [
				"Analyzed 4-5 lakh charts",
				"Practiced day and night",
				"Slowly built real understanding, patience, and skills",
			],
		},
		{
			type: "paragraph",
			text: `By 2018-2019, my equity trading accuracy crossed 70%, and I started sharing stock tips with a small community on WhatsApp. As the community grew, I moved it to Telegram and kept helping new traders.`,
		},
		{
			type: "highlight",
			text: `Cracking the Code of Option Trading`,
			icon: (
				<TbTableOptions className='h-5 w-5 inline-block mr-2 text-sky-400' />
			),
		},
		{
			type: "paragraph",
			text: `Even after mastering equity, options trading still challenged me. Despite my efforts, consistent accuracy in options was missing. I knew — Options are risky, and without precision, success is temporary.`,
		},
		{
			type: "list",
			items: [
				"Studied market moves",
				"Understood price movements needed for options to double",
				"Discovered patterns that could consistently deliver profits",
			],
		},
		{
			type: "paragraph",
			text: `After thousands of charts, hours of practice, and countless failures, I finally developed my high-probability option trading strategies.`,
		},
		{
			type: "highlight",
			text: `Why I Started Pro Maker Institute (2023)`,
			icon: (
				<GiStumpRegrowth className='h-8 w-8 inline-block mr-2 text-amber-400 ' />
			),
		},
		{
			type: "paragraph",
			text: `After 8+ years of real trading experience — of failure, learning, discipline, and growth — I founded Pro Maker Institute in 2023. Because trading and investing are not hard — if done the right way.`,
		},
		{
			type: "paragraph",
			text: `But unfortunately, 95% of traders start trading without learning. 95% don't even know what accuracy is needed to succeed. Most traders lose emotionally before they lose financially.`,
		},
		{
			type: "paragraph",
			text: `My mission is simple: ✅ Help you avoid the mistakes I made, ✅ Teach you the right way, ✅ And guide you towards confident, independent trading.`,
		},
		{
			type: "paragraph",
			text: `Final Words to New Traders: You study for 20-25 years to get a 20,000-25,000 rupees salary. But many jump into trading without even 2 months of serious learning.`,
		},
		{
			type: "list",
			items: [
				"Bank FD doubles your money in 10 years.",
				"Bank Nifty doubles in around 4.75 years.",
				"Stock market can give better returns — if you have the right knowledge and mindset.",
			],
		},
		{
			type: "paragraph",
			text: `You are at the right place. You are not failing because trading is hard. You are failing because you are following the wrong method.`,
		},
		{
			type: "paragraph",
			text: `Learn the right way — and trading will feel as easy and thrilling as playing a live game.`,
		},
		{
			type: "call-to-action",
			text: `🚀 At Pro Maker Institute, We turn confused beginners into confident traders. Let's start your real trading journey today!`,
		},
	];

	const faqs = [
		{
			question: "What makes your TradingView tool special?",
			answer:
				"It is a proprietary indicator developed over years of real market experience and backtesting — delivering over 99% accurate signals.",
		},
		{
			question: "Can a beginner join your courses?",
			answer:
				"Absolutely. We have tailored content from beginner to advanced levels, with live support and mentorship included.",
		},
		{
			question: "Is there a guarantee for profits?",
			answer:
				"While no one can promise profits in the market, our goal is to make you an informed and disciplined trader with data-backed strategies.",
		},
		// Add more FAQ items here
	];

	const [activeTab, setActiveTab] = useState("journey");

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	return (
		<>
			<Head>
				<title>About Us | ProMaker Institute</title>
			</Head>
			{/* Banner Section */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='flex max-w-7xl mx-auto min-h-[calc(100vh-64px)] flex-wrap items-center justify-between lg:flex-nowrap py-16 px-4'>
				{/* Banner Content */}
				<div className='w-full text-center flex flex-col justify-center gap-4 lg:text-start lg:w-1/2'>
					<motion.h1
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='text-5xl lg:text-7xl font-extrabold text-sky-400'>
						About ProMaker Institute
					</motion.h1>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className='text-xl text-gray-300'>
						Founded by{" "}
						<span className='font-semibold text-white'>Santosh Devare</span>, a
						seasoned stock market educator with over 8 years of hands-on
						experience, ProMaker Institute is dedicated to transforming trading
						journeys.
					</motion.p>
					<div className='mt-6 flex gap-4'>
						<Link
							href='/contact'
							className='button rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-green-600 transition'>
							Contact Us
						</Link>
						<Link
							href='/courses'
							className='button rounded-full bg-green-500 text-white px-6 py-2 hover:bg-blue-600 transition'>
							Explore Courses
						</Link>
					</div>
				</div>
				<div className='hidden lg:flex lg:w-1/2 justify-center'>
					<Image
						src='/assets/images/ownerPic.jpg'
						alt='Online Learning Illustration'
						width={500}
						height={500}
						className='object-contain rounded-tr-[4rem] rounded-bl-[4rem] hover:rounded-tl-[6rem] hover:rounded-br-[6rem] hover:rounded-bl-none hover:rounded-tr-none transition-all duration-300'
					/>
				</div>
			</motion.section>

			{/* Vertical Tabs Section */}
			<section className='py-12 px-4 bg-[#081a3a] min-h-screen'>
				<div className='max-w-6xl mx-auto flex lg:flex-row flex-col'>
					{/* Left Side - Sticky Vertical Tabs */}
					<div className='w-full lg:w-1/5 pr-8 flex flex-col lg:sticky top-1/3 h-full md:h-[50vh] overflow-y-auto'>
						<button
							className={`py-3 px-4 text-left font-semibold text-white rounded-md transition-colors duration-300 ${
								activeTab === "journey" ? "bg-sky-500" : "hover:bg-gray-800"
							}`}
							onClick={() => handleTabClick("journey")}>
							My Journey
						</button>
						<button
							className={`mt-2 py-3 px-4 text-left font-semibold text-white rounded-md transition-colors duration-300 ${
								activeTab === "reviews" ? "bg-sky-500" : "hover:bg-gray-800"
							}`}
							onClick={() => handleTabClick("reviews")}>
							Reviews
						</button>
						<button
							className={`mt-2 py-3 px-4 text-left font-semibold text-white rounded-md transition-colors duration-300 ${
								activeTab === "faq" ? "bg-sky-500" : "hover:bg-gray-800"
							}`}
							onClick={() => handleTabClick("faq")}>
							FAQ
						</button>
					</div>

					{/* Right Side - Content */}
					<div className='w-full lg:w-4/5 py-4 lg:py-0 lg:pl-8 overflow-y-scroll max-h-screen scrollbar-hide'>
						<motion.div
							key='journey'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ duration: 0.3 }}
							className={activeTab === "journey" ? "block" : "hidden"}>
							<motion.h2
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1, duration: 0.3 }}
								className='text-2xl font-semibold text-sky-400 mb-4'>
								The Journey That Shaped Pro Maker Institute
							</motion.h2>
							{tradingJourney.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
									className='mb-4'>
									{item.type === "paragraph" && (
										<p className='text-gray-300 whitespace-pre-line'>
											{item.text}
										</p>
									)}
									{item.type === "highlight" && (
										<h3 className='text-sm lg:text-xl font-extrabold text-sky-400 transition-all duration-300 ease-in-out  group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:via-sky-600 group-hover:to-green-700 group-hover:bg-clip-text group-hover:text-transparent'>
											{item.icon} {item.text}
										</h3>
									)}
									{item.type === "pull-quote" && (
										<blockquote className='border-l-4 border-sky-500 pl-4 italic text-gray-400'>
											{item.text}
										</blockquote>
									)}
									{item.type === "list" && (
										<ul className='list-disc list-inside text-gray-300'>
											{item?.items?.map((listItem, i) => (
												<li key={i}>{listItem}</li>
											))}
										</ul>
									)}
									{item.type === "call-to-action" && (
										<motion.p
											className='mt-6 text-green-400 font-semibold cursor-pointer hover:text-green-300 transition'
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}>
											{item.text}
										</motion.p>
									)}
								</motion.div>
							))}
						</motion.div>

						<motion.div
							key='reviews'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ duration: 0.3 }}
							className={activeTab === "reviews" ? "block" : "hidden"}>
							
							<TestimonialSection/>
						</motion.div>

						<motion.div
							key='faq'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ duration: 0.3 }}
							className={activeTab === "faq" ? "block" : "hidden"}>
							<motion.h2
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1, duration: 0.3 }}
								className='text-2xl font-semibold text-sky-400 mb-4'>
								Frequently Asked Questions
							</motion.h2>
							<div className='space-y-4'>
								{faqs.map((faq, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
										className='bg-gray-900 rounded-md p-4'
										whileHover={{ scale: 1.03 }}>
										<h4 className='text-lg font-semibold text-sky-400 mb-2'>
											{faq.question}
										</h4>
										<p className='text-gray-400'>{faq.answer}</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Milestones & Achievements Section */}
			<section className='bg-[#081a3a] py-16'>
				<div className='container mx-auto px-4'>
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-3xl font-bold text-center text-sky-400 mb-8'>
						Our Journey, Our Impact
					</motion.h2>
					<div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{milestones.map((milestone, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.2, duration: 0.4 }}
								className='p-6 bg-gray-900 rounded-lg shadow hover:shadow-xl transition-transform duration-300 hover:scale-105'>
								<h4 className='text-xl font-semibold text-sky-400 mb-2'>
									{milestone.title}
								</h4>
								<p className='text-gray-300'>{milestone.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className='bg-[#081a3a] py-16'>
				<div className='container mx-auto px-4'>
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-3xl font-bold text-center text-sky-400 mb-8'>
						Our Core Values
					</motion.h2>
					<div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{coreValues.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.2, duration: 0.4 }}
								className='p-6 bg-gray-900 rounded-lg shadow hover:shadow-xl transition-transform duration-300 hover:scale-105'>
								<h4 className='text-xl font-semibold text-sky-400 mb-2'>
									{value.title}
								</h4>
								<p className='text-gray-300'>{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Final Call to Action */}
			<section className='py-16 bg-gray-900'>
				<div className='container mx-auto text-center'>
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-3xl font-bold text-white mb-8'>
						Ready to Transform Your Trading Journey?
					</motion.h2>
					<Link
						href='/courses'
						className='inline-block bg-gradient-to-r from-sky-500 to-green-500 text-white px-8 py-3 rounded-full hover:from-sky-600 hover:to-green-600 transition-all duration-300 shadow-lg text-lg font-semibold'>
						Explore Our Courses
					</Link>
				</div>
			</section>
		</>
	);
};

export default AboutUsPage;

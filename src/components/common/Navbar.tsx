"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { title } from "process";

const navLinks = [
	{ title: "Home", link: "/" },
	{ title: "About", link: "/about" },
	{ title: "Courses", link: "/courses" },
	{ title: "Contact", link: "/contact" },
	{ title: "Blogs", link: "/blogs" },
];
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='p-4 backGradient text-white flex justify-center items-center fixed w-full top-0 z-50 shadow-lg'>
			<div className='flex justify-between items-center max-w-7xl w-full bg-transparent'>
				{/* Logo */}
				<Link href='/' className='font-extrabold md:text-3xl text-sky-400'>
					ProMaker <span className='text-green-500'>Institute</span>
				</Link>

				{/* Desktop Menu */}
				<div className='hidden md:flex text-lg font-medium'>
					<ul className='flex space-x-6 items-center'>
						{navLinks.map((item) => (
							<li key={item.title}>
								<Link
									href={`${item.link}`}
									className='relative after:content-[""] after:absolute after:bg-white after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full'>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden text-white z-50 transition-all duration-300  '
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={28}  /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<motion.div
				initial={{ x: "100%" }}
				animate={{ x: isOpen ? "0%" : "100%" }}
				exit={{ x: "100%" }}
				transition={{ duration: 0.5 }}
				className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 p-6 flex flex-col md:hidden ${
					isOpen ? "shadow-xl" : ""
				}`}>
				<ul className='space-y-6 text-lg font-medium'>
					{navLinks?.map((item) => (
						<li key={item.title}>
							<Link href={`${item.link}`} onClick={() => setIsOpen(false)}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</nav>
	);
};

export default Navbar;

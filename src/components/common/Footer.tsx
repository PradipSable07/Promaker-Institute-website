import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

const address =
	"Cidco Growth Center, CIDCO Waluj Mahanagar 1, Waluj, Chhatrapati Sambhaji Nagar, Dharmapur, Maharashtra 431136";
const Footer = () => {
	console.log("This Project is made by the Pss.tech");
	return (
		<footer className=' p-4 bg-black text-white w-full col-auto   '>
			<div className='max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 h-full'>
				{/* Left Section */}
				<div className='flex flex-col gap-4 w-full md:w-1/2 justify-start items-start min-h-full h-full'>
					<div className='h-full w-full'>
						<h2 className='text-2xl font-bold'>ProMaker Institute</h2>
						<div>
							Address:{" "}
							<Link
								href='https://maps.app.goo.gl/MEhQ41ZHDcUrU5XeA'
								target='_blank'
								className='max-w-lg text-sm'>
								Cidco Growth Center, CIDCO Waluj Mahanagar 1, Waluj, Chhatrapati
								Sambhaji Nagar, Dharmapur, Maharashtra 431136
							</Link>
						</div>
						<div>
							Contact Number:
							<Link href='tel:7219396227' className='text-sm ml-2 '>
								 7219396227
							</Link>
						</div>
					</div>
					{/* Social Links */}
					<div className='flex gap-4 h-full'>
						<div className='p-2 bg-blue-600 rounded'>
							<Link href='/' title='Facebook' className='text-2xl text-white'>
								<FaFacebook />
							</Link>
						</div>
						<div className='p-2 bg-red-600 rounded'>
							<Link href='/' title='YouTube' className='text-2xl text-white'>
								<ImYoutube2 />
							</Link>
						</div>
						<div className='p-2 bg-pink-500 rounded'>
							<Link href='/' title='Instagram' className='text-2xl text-white'>
								<FaInstagram />
							</Link>
						</div>
					</div>
				</div>

				{/* Right Section - Map */}
				<div className='w-full md:w-1/2 h-full flex  justify-end max-h-80'>
					<iframe
						className='w-full h-full rounded-lg max-w-96'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7855809019043!2d75.25283857585741!3d19.849023481521378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb999f27fd584d%3A0x445f293e359b4738!2sPRO%20MAKER%20INSTITUTE%20(Stock%20Market%20Training%20%26%20Investment!5e0!3m2!1sen!2sin!4v1745144415435!5m2!1sen!2sin'
						loading='lazy'
						allowFullScreen></iframe>
				</div>
			</div>
			<div className='  flex justify-between items-center border-t border-gray-200 p-4 '>
				<div className='max-w-7xl text-start'>
					{" "}
					ProMaker Institute © 2024 All Rights Reserved.
				</div>{" "}
			</div>
		</footer>
	);
};
export default Footer;

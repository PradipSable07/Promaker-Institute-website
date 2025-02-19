import Link from "next/link";

const Footer = () => {
	return (
		<footer className=" p-4 bg-black text-white">
			<div className='flex'>
				<div className='text-lg font-bold'>
					<Link href='/'>ProMaker Institute</Link>
				</div>
			</div>
			<div className="  flex justify-between items-center border-t border-gray-200 p-4">
				<p>  ProMaker Institute © 2024 All Rights Reserved.</p>{" "}
				<p>
					{" "}
					Design & Developed by{" "}
					<Link href={"https://linktr.ee/pss.tech"}>PSS.tech</Link>{" "}
				</p>
			</div>
		</footer>
	);
};
export default Footer;

"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import security from "../../../public/Secure data-bro.svg";
export default function Page() {
	const [showPassword, setShowPassword] = useState(false);

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="h-screen md:py-10">
			<Card className="hidden md:flex md:flex-row flex-col-reverse bg-transparent shadow-xl shadow-slate-950 border-none lg:h-[80dvh] md:h-[80dv] p-5  ">
				<div className=" md:w-1/2 lg:w-2/5 flex md:flex-col bg-transparent lg:p-5 justify-center">
					<form>
						<div className="hidden md:flex flex-col gap-8  py-5 lg:px-9 text-white">
							<p className="text-[25px] text-white text-pretty font-bold md:py-5">
								University Management system
							</p>
							<Label className="font-semibold text-white text-[17px]">
								enter account details
							</Label>

							<Input
								type="text"
								name="index"
								placeholder="index number"
								className="border-b-2 border-b-[#676c72] rounded-none bg-transparent  focus:outline-none focus:ring-0 p-1"
							/>
							<div className="relative">
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="password"
									className="border-b-2 border-b-[#676c72] rounded-none bg-transparent  focus:outline-none focus:ring-0 p-1 "
								/>
								{showPassword ? (
									<IconEyeOff
										className="text-[#676c72] absolute top-3 right-0 cursor-pointer"
										id="icon"
										onClick={togglePassword}
									/>
								) : (
									<IconEye
										className="text-[#676c72] absolute top-3 right-0 cursor-pointer"
										id="icon"
										onClick={togglePassword}
									/>
								)}
							</div>
							<div className="w-full">
								<Button className="w-full text-[#676c72] rounded-2xl bg-white font-bold hover:text-white ">
									Login
								</Button>
							</div>
							<div className="flex flex-row items-center justify-between w-full">
								<Link href={"/"} className="text-white">
									forgot password?
								</Link>
								<Link href={"/"}>
									<Button size="sm" className="bg-[#fc8984]">
										Sign up
									</Button>
								</Link>
							</div>
						</div>
					</form>
				</div>
				<div className=" hidden md:w1/2 lg:w-3/5  md:flex-col md:flex md:leading-tight text-[#05032a]  lg:p-3 md:p-5 overflow-clip ">
					<p className="lg:text-[70px] md:text-[45px] text-[30px] font-extrabold  tracking-tighter p-1">
						Welcome Back,
					</p>
					<p className="lg:text-[50px]  font-semibold p-1">Antwi-Boasiako</p>
					<p className="p-1">Login to access your account </p>

					<Image
						src={security}
						alt="a security image that represents the how strong the authentication is "
						className="lg:w-[70%] lg:h-[100%] w-[90%] object-contain relative lg:-top-[50px] hidden md:block"
					/>
				</div>
			</Card>
			<div className=" w-full p-4 hidden md:flex my-4">
				<div className="w-2/5"></div>
				<div className=" w-3/5 font-medium text-pretty text-red-600 text-center text-[10px]">
					<div className="flex flex-row items-center justify-center ">
						<p>
							Copyright &#169; 2024 The President and Fellows of Uni College
						</p>
						<div className="flex flex-row  divide-red-600 text-red-500 ">
							<Link href={"/"} className="underline p-1">
								Accessibility
							</Link>
							<Link href={"/"} className="underline p-1">
								Digital Accessibility
							</Link>
							<Link href={"/"} className="underline p-1">
								Privacy
							</Link>
							<Link href={"/"} className="underline p-1">
								Help
							</Link>
						</div>
					</div>
					<p>
						The Unikey system and systems data and other resources that require
						Unikey authentication for access, are only for legitimate University
						users.
					</p>
					<p>
						Use may be monitored and improper use of the Key system or those
						resources may result in disciplinary action and civil and criminal
						charges
					</p>
				</div>
			</div>
			<div className="flex md:hidden w-full border p-2 justify-center">
				<div className="py-10 text-[#0f0520]">
					<div className="flex flex-col gap-1 ">
						<p className="text-[40px] font-bold">Welcome back,</p>
						<p className="font-semibold text-2xl">Antwi Boasiako</p>
						<p className="font-medium">Login to access your account</p>
					</div>
					<div className="py-10">
						<p className="font-bold text-[30px]">login</p>
						<p className="font-semibold">enter your account details</p>
					</div>
					<div>
						<form>
							<div className="flex flex-col gap-12">
								<Input
									type="text"
									placeholder="index number"
									className="border-b-2 border-b-[#676c72] rounded-none bg-transparent  focus:outline-none focus:ring-0 p-1"
								/>

								<div className="relative flex flex-col gap-4">
									<Input
										type={showPassword ? "text" : "password"}
										name="password"
										placeholder="password"
										className="border-b-2 border-b-[#676c72] rounded-none bg-transparent  focus:outline-none focus:ring-0 p-1 "
									/>
									{showPassword ? (
										<IconEyeOff
											className="text-[#676c72] absolute top-3 right-0 cursor-pointer"
											id="icon"
											onClick={togglePassword}
										/>
									) : (
										<IconEye
											className="text-[#676c72] absolute top-3 right-0 cursor-pointer"
											id="icon"
											onClick={togglePassword}
										/>
									)}
									<Link href={"/"} className="hover:text-red-600">
										forgot password?
									</Link>
								</div>
								<div className="w-full">
									<Button
										type="submit"
										className="w-full text-white bg-black"
										size="lg"
									>
										Login
									</Button>
								</div>
								<div className="flex flex-row  w-full justify-between items-center">
									<Link href={"/"}>Don&apos;t have an account</Link>
									<Link href={"/"}>
										<Button size="sm" className="bg-[#fc8984]">
											Sign up
										</Button>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

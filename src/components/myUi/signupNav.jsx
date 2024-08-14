"use client";
import Image from "next/image";
import logo from "../../../public/Uni_Nova.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
	Sheet,
	// SheetClose,
	SheetContent,
	// SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu4 } from "@tabler/icons-react";

export const SignupNav = () => {
	const path = usePathname();
	console.log(path);
	return (
		<nav className="p-4 md:px-20 flex justify-between  bg-slate-5	0">
			<header>
				<Link href={"/"}>
					<Image
						src={logo}
						alt="a logo of the school of nova"
						className="w-[170px]"
					/>
				</Link>
			</header>

			<ul className="md:flex flex-row gap-4 items-center font-medium p-2 hidden   ">
				<Link href={"/"}>
					<li className="hover:text-red-600">Home</li>
				</Link>
				<Link href={"/"}>
					<li className="hover:text-red-600">News</li>
				</Link>
				<Link href={"/"}>
					<li className="hover:text-red-600">About Us</li>
				</Link>
				<Link href={"/"}>
					<li className="hover:text-red-600">Contact Us</li>
				</Link>
			</ul>
			<div className="flex md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline">
							<IconMenu4 />
						</Button>
					</SheetTrigger>
					<SheetContent className="flex flex-col items-start">
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
						</SheetHeader>
						<ul className="flex flex-col gap-5  font-medium p-2 ">
							<Link href={"/"}>
								<li className="hover:text-red-600">Home</li>
							</Link>
							<Link href={"/"}>
								<li className="hover:text-red-600">News</li>
							</Link>
							<Link href={"/"}>
								<li className="hover:text-red-600">About Us</li>
							</Link>
							<Link href={"/"}>
								<li className="hover:text-red-600">Contact Us</li>
							</Link>
						</ul>
						<SheetFooter></SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

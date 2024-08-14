import { SignupNav } from "@/components/myUi/signupNav";

export default function Layout({ children }) {
	return (
		<main className="w-full relative ">
			<div className=" md:w-1/2 lg:w-2/5 bg-[#242625] fixed h-screen z-0 left-0 top-0 hidden md:flex"></div>
			<div className="md:w-1/2 lg:w-3/5 bg-[#efe3f1] fixed h-screen z-0 right-0 top-0 hidden md:flex"></div>
			<div className=" sticky top-0 md:relative z-10">
				<SignupNav />
			</div>
			<div className="md:relative z-10  md:px-10  p-2 md:p-0">{children}</div>
		</main>
	);
}

import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import AboutUs from "@/sections/AboutUs";
import Mission from "@/sections/Mission";
import Join from "@/sections/Join";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Head>
				<title>CGR Consulting</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/img/logo.svg'
				/>
			</Head>
			<Layout>
				<main className=''>
					<Suspense fallback={<p>Loading...</p>}>
						<Hero />
						<AboutUs />
						<Mission />
						<Join />
					</Suspense>
				</main>
			</Layout>
		</>
	);
}

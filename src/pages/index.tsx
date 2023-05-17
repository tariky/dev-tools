import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				{/* <div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro"
					>
						Check out tools I use right now
					</Link>
				</div> */}
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<main>
				{/* <HomepageFeatures /> */}
				<div
					style={{
						padding: "2rem",
					}}
				>
					<h2>
						Hello fellow travler, I'm hopeing that collections of my tools
						and resources will help you to make better decisions
					</h2>
					<p>
						To make sure that this website is easy to access, bookmark it
						in your browser of choise.
					</p>
					<p
						style={{
							textDecoration: "underline",
							fontWeight: "bold",
						}}
					>
						Also I use pnpm and TypeScript everywhere. If you don't like
						it, please give it another chance.
					</p>
				</div>
			</main>
		</Layout>
	);
}

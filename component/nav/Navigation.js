import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from './Hamburger';


function Navbar() {
	const links = [
		{ href: '/', label: 'Accueil' },
		{ href: '/services', label: "Nos Services" },
		{ href: '/contact', label: 'Contact' }
	];

	const router = useRouter();
	const routeSlug = router.pathname;
	return (
		<nav className="container px-4 pt-8">
			<ul className="flex items-center justify-between">
				<li>
					<Link href="/">
						<a className="">
							{/* <img src="/logo.jpg" className="w-16 md:w-24" alt="logo association accès elbeuf sur seine" /> */}
							<p className="text-xl font-black">Déménagement</p>
						</a>
					</Link>
				</li>
				<ul className="hidden lg:flex items-center justify-betweend space-x-4 text-lgl uppercase font-bol">
					{links.map(({ href, label, style }) => (
						<li
							key={`${href}${label}`}
							className={`py-2 ${style == 'style'
								? 'bg-pink-600 rounded-lg text-gray-100 font-bold px-2 shadow text-lg'
								: ''} ${href == routeSlug ? 'activeClass' : ''}`}
						>
							<Link href={href}>{label}</Link>
						</li>
					))}
        </ul>
        <div className="lg:hidden">
					<Hamburger links={links} />
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;

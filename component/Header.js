import React from 'react';
import { FiPhone } from 'react-icons/fi';
import Navigation from './nav/Navigation';

const Header = () => {
	return (
		<div className=" text-gray-100">
			<div className=" container py-4 flex items-center justify-center bg- ">
				<FiPhone className="text-green-500 text-2xl" />
				<p className="pl-2 text-gray-500 font-bold text-xl">
					09.88.04.40.78
				</p>
			</div>
			<div className="flex flex-col items-center justify-center min-h-screenr  bg-green-500 text-center">
				<Navigation />
				<div className="pt-48 pb-52">
					<h1 className="text-xl	lg:text-7xl font-bold pb-4 container">
						Déménagement Normandie
					</h1>
					<p className="text-3xl">
						On rends votre déménagement plus agréable et rapide.{' '}
						<br />{' '}
						<span className="font-bold text-gray-200">
							L'assurance de qualité
						</span>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Header;

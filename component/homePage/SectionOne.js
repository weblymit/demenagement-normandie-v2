import React from 'react';
import Card from './Card';

const SectionOne = () => {
	return (
		<div className="container ">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card
					title="Déménagement dans le 76"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum rem aperiam, quae mollitia eum laudantium, aliquid eligendi asperiores sed rerum omnis beatae. Odit, minus dicta ratione ea vel veritatis."
				/>
				<Card
					title="Déménagement dans le 27"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum rem aperiam, quae mollitia eum laudantium, aliquid eligendi asperiores sed rerum omnis beatae. Odit, minus dicta ratione ea vel veritatis."
				/>
				<Card
					title="Déménagement toute la France"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum rem aperiam, quae mollitia eum laudantium, aliquid eligendi asperiores sed rerum omnis beatae. Odit, minus dicta ratione ea vel veritatis."
				/>
			</div>
			<div className="flex justify-center mt-10">
				<span className="bg-green-400 p-3 text-center rounded-lg text-gray-100">
					Devis gratuit
				</span>
			</div>
		</div>
	);
};

export default SectionOne;

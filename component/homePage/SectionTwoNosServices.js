import React from 'react';
import Card from './Card';

const SectionTwoNosServices = () => {
	return (
		<div className="container ">
			<h2 className="font-bold text-5xl text-center uppercase">Nos services</h2>
			<div className="flex justify-center pt-20">
				<Card title="Garde Meuble" container="bg-green-50"/>
				<Card title="Garde Meuble" container="bg-green-50 mx-5"/>
				<Card title="Garde Meuble" container="bg-green-50"/>
			</div>
		</div>
	);
};

export default SectionTwoNosServices;

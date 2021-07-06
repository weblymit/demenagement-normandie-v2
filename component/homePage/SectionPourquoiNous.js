import React from 'react';
import Card from '../homePage/Card';

function SectionPourquoiNous() {
	return (
		<div className="container">
			<h2 className="font-bold text-5xl text-center uppercase">Pourquoi nous ?</h2>
			<div className="md:flex justify-center pt-20 ">
				<Card title="Meilleur prix garanti" />
				<Card title="Meilleur prix garanti" container="my-5 md:my-0 md:mx-5" />
				<Card title="Meilleur prix garanti" />
			</div>
		</div>
	);
}

export default SectionPourquoiNous;

import React from 'react';
import Card from '../homePage/Card';

function SectionPourquoiNous() {
	return (
		<div className="">
			<h2 className="font-bold text-5xl text-center uppercase">Pourquoi nous ?</h2>
			<div className="flex justify-center pt-20 ">
				<Card title="Meilleur prix garanti" />
				<Card title="Meilleur prix garanti" container="mx-5" />
				<Card title="Meilleur prix garanti" />
			</div>
		</div>
	);
}

export default SectionPourquoiNous;

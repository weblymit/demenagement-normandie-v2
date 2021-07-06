import React from 'react';

const Card = ({ title, description, container }) => {
	return (
		<div className={`bg-white p-10 rounded-lg ${container}`}>
			<p className="text-xl font-bold pb-5 text-center">{title}</p>
			<p className="">{description}</p>
		</div>
	);
};

export default Card;

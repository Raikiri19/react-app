import React, { Component } from 'react';

const Card = ({id, name, anime, imgurl}) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={imgurl} alt={name} className="db center mw5 tc black link dim" />
			<div>

				<h2>{id}. {name}</h2>
				<p>{anime}</p>

			</div>
		</div>
	);
}

export default Card;
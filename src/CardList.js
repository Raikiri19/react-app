import React from 'react';
import Card from './Card';

const CardList = ({waifu}) => {
	return (
		<div>
			{
				waifu.map((user, i) => {
					return (
						<Card
							key={i}
							id={waifu[i].id}
							name={waifu[i].name}
							anime={waifu[i].anime}
							imgurl={waifu[i].img}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
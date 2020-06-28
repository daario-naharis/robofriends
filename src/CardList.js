import React from 'react';
import Card from './Card'


const CardList = ({robots}) =>{
	return(
		<div>
		{
			robots.map((user,i) =>{
				return (
				<Card 
				key={i} //needs to be assigned so that react can keet track of each card
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
				/>
				);
			}
			)
		}
		</div>
	);
}


export default CardList;

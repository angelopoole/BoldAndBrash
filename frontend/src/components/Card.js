import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
	/* display: flexbox; */
	background-color: white;
	border-radius: var(--border-radius);
	margin: 10px 10px;
	padding: 10px 30px;
	flex: 1 3 auto;
	overflow: scroll;
	max-width: 300px;
	max-height: 300px;
`;

const Card = ({ artwork }) => {
	let { artist, bio, reknown, shortname, _id, artForSale } = artwork;

	console.log('object');
	//@TO-DO  right now the art for sale section rails off some random number, we should fix that in a later version. this is a dataSet issue

	return (
		<CardDiv>
			<strong>{artist}</strong>
			<p>{bio}</p>
			<ol>
				{artForSale.map(item => (
					<li key={Math.random()}>
						{item.art} + {item.image}
					</li>
				))}
			</ol>
		</CardDiv>
	);
};

export default Card;

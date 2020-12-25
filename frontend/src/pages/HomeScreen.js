import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../components/Card';

const MainContent = styled.main`
	min-height: 80vh;
	min-width: 100vh;
`;

const CardContiner = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	flex: 1 6 auto;

	/* flex: 1 4 auto; */
	/* height: 24px; */
	/* flex: 40px; */
	/* align-content: stretch; */
`;

const HomeScreen = () => {
	const [artwork, setArtwork] = useState([]);

	console.log(artwork);
	useEffect(() => {
		const getArtData = async () => {
			const res = await axios.get('/api/artworks');

			setArtwork(res.data);
		};

		getArtData();
	}, []);

	const renderCardFromArt = () => {
		return artwork.map(art => <Card artwork={art} key={art._id} />);
	};

	return (
		<MainContent>
			<CardContiner>{renderCardFromArt(artwork)}</CardContiner>
		</MainContent>
	);
};

export default HomeScreen;

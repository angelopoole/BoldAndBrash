import useEffect from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const MainContent = styled.main`
	min-height: 80vh;
	--white: white;
`;

const HomeScreen = () => {
	return (
		<Layout>
			<MainContent>content</MainContent>
		</Layout>
	);
};

export default HomeScreen;

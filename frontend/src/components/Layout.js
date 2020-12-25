import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';

import Nav from './Nav';
import Footer from './Footer';

import React from 'react';

//Layout will have things that are ALWAYS rendered. includes header, footer, any special styling etc...
////nav content footer

const Layout = ({ children }) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Nav />
				<div id='content'>
					{children}
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
};

export default Layout;

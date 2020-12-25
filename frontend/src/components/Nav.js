import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
	padding: 20px 20px;
	margin: 20px 20px;
	font-size: var(--fz-xl);
	border-radius: var(--border-radius);

	background-color: var(--pale-pink);
	transition: var(--transition);

	&:hover {
		transition: var(--transition);
		/* background-color 0.5s ease; */
		background-color: var(--fluorescent-blue);
		filter: blur(0.5px);
		box-shadow: 5px 5px 30px var(--prussian-blue);
	}
`;

const StyledHeader = styled.header`
	align-items: center;
	display: flexbox;

	border-radius: var(--border-radius);
	background-color: var(--viridian);
	height: var(--nav-height);
	justify-content: flex-end;

	${StyledNav}#left {
		justify-self: left;
		margin-right: auto;
	}
`;

const Nav = () => {
	return (
		<StyledHeader>
			<StyledNav id='left'> home </StyledNav>
			<StyledNav> nav </StyledNav>
			<StyledNav> nav </StyledNav>
		</StyledHeader>
	);
};

export default Nav;

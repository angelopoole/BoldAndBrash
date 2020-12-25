import { css } from 'styled-components';

// font-family: 'Open Sans Condensed', sans-serif;
// font-family: 'Roboto', sans-serif;

// OpenSansCondensedBold
// @fonts/Open_Sans_Condensed/OpenSansCondensedBold.tff
// import bart from '../fonts'

import OpenSansCondensedBold from '../fonts/Open_Sans_Condensed/OpenSansCondensedBold.ttf';
import OpenSansCondensedLight from '../fonts/Open_Sans_Condensed/OpenSansCondensedLight.ttf';

import OpenSansCondensedLightItalic from '../fonts/Open_Sans_Condensed/OpenSansCondensedLightItalic.ttf';

import RobotoThin100 from '../fonts/Roboto/Roboto-Thin.ttf';
import RobotoLight300 from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoRegular400 from '../fonts/Roboto/Roboto-Regular.ttf';
import RobotoMedium500 from '../fonts/Roboto/Roboto-Medium.ttf';
import RobotoBold700 from '../fonts/Roboto/Roboto-Bold.ttf';
import RobotoBlack900 from '../fonts/Roboto/Roboto-Black.ttf';

import RobotoThinItalic100 from '../fonts/Roboto/Roboto-ThinItalic.ttf';
import RobotoLightItalic300 from '../fonts/Roboto/Roboto-LightItalic.ttf';
import RobotoRegularItalic400 from '../fonts/Roboto/Roboto-Italic.ttf';
import RobotoMediumItalic500 from '../fonts/Roboto/Roboto-MediumItalic.ttf';
import RobotoBoldItalic700 from '../fonts/Roboto/Roboto-BoldItalic.ttf';
import RobotoBlackItalic900 from '../fonts/Roboto/Roboto-BlackItalic.ttf';

const openSansCondensedNormalWeights = {
	300: [OpenSansCondensedLight],
	700: [OpenSansCondensedBold],
};

const openSansCondensedItalicWeights = {
	300: [OpenSansCondensedLightItalic],
};

const RobotoNormalWeights = {
	100: [RobotoThin100],
	300: [RobotoLight300],
	400: [RobotoRegular400],
	500: [RobotoMedium500],
	700: [RobotoBold700],
	900: [RobotoBlack900],
};
const RobotoItalicWeights = {
	100: [RobotoThinItalic100],
	300: [RobotoLightItalic300],
	400: [RobotoRegularItalic400],
	500: [RobotoMediumItalic500],
	700: [RobotoBoldItalic700],
	900: [RobotoBlackItalic900],
};

const openSansCondensed = {
	name: 'Open Sans Condensed',
	normal: openSansCondensedNormalWeights,
	italic: openSansCondensedItalicWeights,
};

const Roboto = {
	name: 'Roboto',
	normal: RobotoNormalWeights,
	italic: RobotoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
	let styles = '';

	for (const [weight, formats] of Object.entries(family[style])) {
		const woff = formats[0];
		const woff2 = formats[1];

		styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('ttf'),
            url(${woff}) format('ttf');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
	}

	return styles;
};

const openSansNormal = createFontFaces(openSansCondensed);
const openSansItalic = createFontFaces(openSansCondensed, 'italic');

const robotoNormal = createFontFaces(Roboto);
const robotoItalic = createFontFaces(Roboto, 'italic');

const Fonts = css`
	${openSansNormal + openSansItalic + robotoNormal + robotoItalic}
`;

export default Fonts;

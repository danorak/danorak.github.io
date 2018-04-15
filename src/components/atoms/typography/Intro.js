import styled from 'styled-components'
import { color, fontFamily, fontSize } from 'styled-system';

const Intro = styled.span`
    ${fontSize};
    line-height: 1.2;
    ${color};
    ${fontFamily};
`;

Intro.defaultProps = {
    color: 'black',
    fontFamily: 'serif',
    fontSize: [1,1,2,2]
};

export default Intro;
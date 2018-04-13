import styled from 'styled-components';
import { color, fontFamily, fontSize } from 'styled-system';

const P = styled.p`
    ${color};
    ${fontFamily};
    ${fontSize};
    line-height: 1.3;
`;

P.defaultProps = {
    color: 'black',
    fontFamily: 'serif',
    fontSize: [1,3]
};

export default P;
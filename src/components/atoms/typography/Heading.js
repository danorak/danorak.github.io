import styled from 'styled-components';
import { color, fontFamily, fontSize } from 'styled-system';
 // import theme from '../../common/theme';

const Heading = styled.h1`
    ${fontSize};
    line-height: 1;
    font-weight: 600;
    margin: 0;
    ${color};
    ${fontFamily};
`;

Heading.defaultProps = {
    color: 'red',
    fontFamily: 'serif',
    fontSize: [3,4,4,5]
};

export default Heading;

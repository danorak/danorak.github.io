import React from 'react';
import styled from 'styled-components';
import {color, fontFamily, fontSize} from 'styled-system';

const A = styled.a`
    ${fontFamily};
    ${fontSize};
    ${color};
`;

A.defaultProps = {
    fontFamily: 'sansSerif',
    fontSize: [0,1],
    color: 'blue'
}

export default A;
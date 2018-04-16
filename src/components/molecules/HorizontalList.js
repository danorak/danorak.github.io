import styled from 'styled-components';
import { space, flexDirection, alignItems, responsiveStyle } from 'styled-system';

const itemPadding = responsiveStyle({
    prop: 'marginRight',
    cssProperty: 'marginRight',
    key: 'space',
    numberToPx: true,
    getter: n => n,
    alias: 'space'
});

const HorizontalList = styled.ul`
    list-style: none;
    display: flex;
    ${flexDirection};
    justify-content: flex-start;
    ${alignItems};
    margin: 0;
    ${space};
    width: 80%;
    & > * {
        ${itemPadding};
    }
`;

const ItemWrapper = styled.li`
    ${space};
    flex: 0 0 auto;
`;

ItemWrapper.defaultProps = {
    mr: [0,6],
    mb: [4,0]
};

HorizontalList.defaultProps = {
    displayName: 'Contact List',
    py: [2],
    px: 0,
    m: 0,
    flexDirection: ['column', 'row'],
    alignItems: ['flex-start', 'center'],
    itemPadding: [0, 6]
};

// Create list from child elements?

export default HorizontalList;
export {ItemWrapper};
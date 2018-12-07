import styled from 'styled-components';
import { color } from 'styled-system';

const Container = styled.article`
    ${color};
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    min-height: 128px;
`;

Container.defaultProps = {
    bg: 'white'
};

export default Container;
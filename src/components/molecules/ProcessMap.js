import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* overflow-x: hidden; */
;`

const Slider = styled.input`
    width: 100%;
    -webkit-appearance: none;
    &::-webkit-slider-runnable-track {
        background: orange;
        width: 100%;
    }
    &::-webkit-slider-thumb {
        /* box-shadow: 1px 1px 9px #FF1414; */
        border: 0px solid currentColor;
        border-radius: 100px;
        height: 41px;
        width: 44px;
        position: relative;
        top: 20px;
        /* border-radius: 5px; */
        background: #000000;
        cursor: pointer;
        -webkit-appearance: none;
    }
 `;

 const FilmStrip = styled.div`
    width: 100%;
    background: linear-gradient(45deg, papayawhip, pink);
    height: 100px;
 `;

const ViewFinder = styled.div`
    background: transparent;
    width: 25%;
    height: 100px;
    overflow: hidden;
`;

export default (props) => (
    <Container>
        <Slider type="range" step="5" min="0" max="50" />
        <ViewFinder>
            <FilmStrip>
            </FilmStrip>
        </ViewFinder>
    </Container>
);
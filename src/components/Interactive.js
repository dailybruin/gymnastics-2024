import styled from 'styled-components';
import title from '../images/Interactive.png';
import pic from '../images/2021-Chevrolet-Silverado-Yenko-SC-front-three-quarter.png';
import { mediaQueries } from '../shared/config'
import gradient from '../images/Gradient.png'

const BG = styled('div')`
    background-color: #F8EA41;
    height: 898px;
    border-color: black;
    border-top-style: solid;
    border-bottom-style: solid;
    position: relative;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    background-color: #F7EDCC;
    width: 100%;
    z-index: -1;
    ${mediaQueries.mobile}{
        border-width: 12px;
    }
`;

const Title = styled.img`
    top: 15px;
    position: relative;
    z-index: 5; 
    ${mediaQueries.mobile}{
        width: 339px;
    }
`;

const Interactive = (props) => {
    return (
        <>
        <ImageContainer>
                <Title src={title} />
        </ImageContainer>
        <BG>
            <img src={props.interactive}></img>
        </BG>
        <BG>
            <img src={props.interactive}></img>
        </BG>
        </>

    );
};

export default Interactive;
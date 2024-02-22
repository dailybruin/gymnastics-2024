import styled from 'styled-components';
import title from '../images/Interactives.png';
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
    width: 100%;
    position: relative;
`;

const ImageContainer = styled.div`
    background-color: #F7EDCC;
    width: 100%;
    z-index: -1;
    object-fit: fill;
    ${mediaQueries.mobile}{
        border-width: 12px;
    }
`;

const StyledImage = styled.img`
    width: 100%; // Make image fill the container width
    height: auto; // Maintain aspect ratio
    object-fit: cover; // Cover the area, may crop the image
`;


const Title = styled.img`
    width: 50%;
    position: relative;
    z-index: 5; 
    ${mediaQueries.mobile}{
        top: 10px;
        width: 250px;
    }
`;

const Interactive = (props) => {
    return (
        <>
        <ImageContainer>
                <Title src={title} />
        </ImageContainer>
        <BG>
         <StyledImage src={props.interactive} alt="Interactive Content" />
        </BG>
        <BG>
        <StyledImage src={props.interactive} alt="Interactive Content" />
        </BG>
        </>

    );
};

export default Interactive;
import styled from 'styled-components';
import title from '../images/Interactives.png';
import pic from '../images/2021-Chevrolet-Silverado-Yenko-SC-front-three-quarter.png';
import { mediaQueries } from '../shared/config'
import gradient from '../images/Gradient.png'

const BG1 = styled('div')`
    background-color: #F8EA41;
    height: 798px;
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
const BG2 = styled('div')`
    background-color: #F8EA41;
    height: 898px;
    border-color: black;
    border-top-style: none;
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
    width: 80%; // Make image fill the container width
    height: auto; // Maintain aspect ratio
    object-fit: cover; // Cover the area, may crop the image
`;


const Title = styled.img`
    width: 50%;
    position: relative;
    z-index: 5; 
    top: 15px;
    ${mediaQueries.mobile}{
        top: 10px;
        width: 250px;
    }
`;

const Credits = styled.div`
  font-family: Fjalla One;
  border: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: right;
  padding-right: 15px;
  color: #010c39;
  background-color: #F8EA41;
  height: 30px;
  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

const Interactive = (props) => {
    return (
        <>
        <ImageContainer>
                <Title src={title} />
        </ImageContainer>
        <BG1>
        <iframe src="https://wp.dailybruin.com/wp-content/themes/caeruleum/js/interactives/sports.gymnastics.2024/quiz/gymQuiz" width="100%" height="100%"></iframe>
        </BG1>
        <Credits> Liam McGlynn, Assistant Data editor </Credits>
        <BG2>
        <iframe src="https://wp.dailybruin.com/wp-content/themes/caeruleum/js/interactives/sports.gymnastics.2024/timeline/timeline" width="100%" height="100%"></iframe>
        </BG2>
        </>

    );
};

export default Interactive;
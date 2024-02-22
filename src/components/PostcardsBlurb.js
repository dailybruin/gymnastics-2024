import styled from 'styled-components'
import title from '../images/Postcards2.png'
import yellowblurb from '../images/YellowBlurb.png'
import gradient from '../images/Gradient.png'
import { mediaQueries } from '../shared/config'

const Gradient = styled.img`
    width: 100%;
    margin-bottom: -5px;
`;
const ImageContainer = styled.div`
    padding-top: 12%;
    background-color: #8BB8E8;
    width: 100%;
    box-sizing: border-box;
    border-style: solid;
    border-width: 40px; 
    border-color: #F7EDCC;
    border-top-width: 20px; /* shrink to fit landing_credit above */
    z-index: -1;
    ${mediaQueries.mobile}{
        border-width: 12px;
    }
`;
const Title = styled.img`
    width: 60%;
    position: relative;
    z-index: 1; 
    ${mediaQueries.mobile}{
        width: 339px;
    }
`;
const Blurb = styled.div`
    position: relative;
    top: -85px;
    ${mediaQueries.mobile}{
       top: -40px;
       font-size: 10px;
    }
`;

const YellowBlurb = styled.img`
    ${mediaQueries.mobile}{
    width: 339px;
    }
`;
const OverlayText = styled.div`
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-style: normal;
    ${mediaQueries.mobile}{
        width: 300px;
     }
`;
const PostcardsBlurb = (props) => {
    return (
        <> 
        <ImageContainer>
            <Title src={title}/>
            <Blurb>
                <YellowBlurb src={yellowblurb}/>
                <OverlayText>
                {props.blurb_text}
                </OverlayText>
            </Blurb>
            <Gradient src={gradient}/>
        </ImageContainer>
        </>
    )
}

export default PostcardsBlurb
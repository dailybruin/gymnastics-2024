import React from 'react';
import styled from 'styled-components';

const cardBackgroundColor = '#F7EDCC';
const textColor = '#2B241F';



const CardContainer = styled.div`
    
    background-color: ${cardBackgroundColor};
    width: 80%
	height: auto;
    border: 20px solid ${cardBackgroundColor};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
    
`;

const Image = styled.img`
postion: absolute;
display:flex;
width: 100%;
height: 40%;
justify-contents: center;
    
    
`;

const ArticleText = styled.div`
    display:flex;
    color: ${textColor};
    padding: 5%;
    font-family: Fjalla One;
    font-size: 140%;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0em;
    text-align: center;


`;

const BylineText = styled.div`
color: ${textColor};
margin-top: auto;
    padding: 5%;
    font-family: Fjalla One;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-align: center;


`;

const StyledLink = styled.a`
    text-decoration: none;
    color: inherit; // Inherit text color from parent
`;



const MobileArticleCard = (props) => {
    const image = props.article_image

    return (
        <StyledLink href={props.article_url}>
            <CardContainer>
                <Image src={image} alt="Card Image" /> 
                <ArticleText>{props.article_title}</ArticleText>
                <BylineText>{props.article_byline}</BylineText>   
            </CardContainer>
        </StyledLink>
       
    );
};

export default MobileArticleCard;
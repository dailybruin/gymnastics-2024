// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

const cardBackgroundColor = '#F7EDCC';
const textColor = '#2B241F';

const CardContainer = styled.div`
    position: relative;
    width: 100%;
    border: 10px solid ${cardBackgroundColor};
    overflow: hidden;
    background-color: ${cardBackgroundColor};
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease-in-out;
`;

const TextOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${cardBackgroundColor};
    color: ${textColor};
    display: flex;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${CardContainer}:hover ${Image} {
        opacity: 0.5;
    }

    ${CardContainer}:hover & {
        opacity: 1;
    }
`;

const ArticleText = styled.div`
    padding: 5%;
    font-family: Fjalla One;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
`

const BylineText = styled.div`
    margin-top: auto;
    padding: 5%;
    font-family: Fjalla One;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;

`

const DesktopCard = (props) => {
    const image = props.article_image

    return (
        <a href={props.article_url}>
            <CardContainer>
                <Image src={image} alt="Card Image" />
                <TextOverlay>
                    <ArticleText>{props.article_title}</ArticleText>
                    <BylineText>{props.article_byline}</BylineText>
                </TextOverlay>
            </CardContainer>
        </a>
    );
};

export default DesktopCard;

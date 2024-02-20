import styled from 'styled-components';
import DesktopCard from "./DesktopCard.jsx";
import card_image from './card_image.png';
import { mediaQueries } from '../shared/config';


const Gradient = styled.div`
    height: 387px;
    background: linear-gradient(to top,  #8BB8E8, #F7EDCC);
`
const Bottom = styled.div`
    height: 387px;
    background: linear-gradient(to bottom,  #8BB8E8, #F7EDCC);
`
const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    background-color: #8BB8E8;
    position: relative;
    height: auto;
`
/*
    flex-direction: column;
*/
const Grid = styled.div`
    padding: 2%;
    margin: auto;
    display: grid;
    column-gap: 3em;
    row-gap: 3em;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    align-items: center;
    flex-direction: column;
    ${mediaQueries.mobile} {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        margin: auto;
        align-items: center;
        column-gap: 2em;
        row-gap: 1em;
    }
`
const article_name = "This is an article title This is an article title This is an article title This is an article title This is an article title This is an article title This is an article title "

export default function ArticleGrid(props) {
    return (
        <>
            <Gradient/>
            <Container>
                <Grid>
                {props && props.article ? props.article.map((item) => {
                        return(
                            <DesktopCard article_title={article_name} article_url="https://www.google.com" article_byline="BY JOE BRUIN" article_image={card_image} />
                        );
                    })
                : null}
                </Grid>
            </Container>
            <Bottom/>
        </>
    )
}

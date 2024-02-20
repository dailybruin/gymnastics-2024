import styled from 'styled-components';
import DesktopCard from "./DesktopCard.jsx";
import MobileArticleCard from './MobileArticleCard.jsx';
import card_image from './card_image.png';
import { mediaQueries } from '../shared/config';
import { isMobile } from 'react-device-detect';



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
        padding: 2em;
    }
`

export default function ArticleGrid(props) {
    if(!isMobile){
        return (
        <>
            <Gradient/>
            <Container>
                <Grid>
                {props && props.articles ? props.articles.map((item) => {
                        return(
                            <DesktopCard article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image} />
                        );
                    })
                : null}
                </Grid>
            </Container>
            <Bottom/>
        </>
        )
    }
    else{
        return (
            <>
                <Gradient/>
                <Container>
                    <Grid>
                    {props && props.articles ? props.articles.map((item) => {
                            return(
                                <MobileArticleCard article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image} />
                            );
                        })
                    : null}
                    </Grid>
                </Container>
                <Bottom/>
            </>
        )
    }
}

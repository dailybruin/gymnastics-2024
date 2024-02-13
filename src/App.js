import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import DesktopCard from "./components/DesktopCard";
import Header from './components/Header';
import Footer from './components/Footer';
import card_image from './components/card_image.png'


const TestGrid = styled.div`
    height: 400px;
    width: 400px;
    padding: 5%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/gymnastics-2024")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml']))
  }, [])

  const article_name = "This is an article title This is an article title This is an article title This is an article title This is an article title This is an article title This is an article title "


  return data && (
    <div className="App">
      <Header />
      <TestGrid>
        <DesktopCard article_title={article_name} article_url="https://www.google.com" article_byline="BY JOE BRUIN" article_image={card_image} />
      </TestGrid>
      <Footer />
    </div>
  );
}

export default App;

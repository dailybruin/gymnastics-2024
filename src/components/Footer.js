import fb from '../images/socials/fb.svg';
import insta from '../images/socials/insta.svg';
import twitter from '../images/socials/twitter.svg';
import tiktok from '../images/socials/tiktok.svg';
import email from '../images/socials/email.svg';
import backgroundImage from '../images/Footer.png';

import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
  background-color: #8bb8e8;
  background-image: url(${backgroundImage});
  height: auto;
  color: #2b241f;
  padding: 60px 0 10px 0;
  text-align: center;
  line-height: 20px;
  margin: 0;
  font-family: 'ITCCenturyStdBook';
  font-size: 29px;
  //font-size: 40px;
  font-weight: 400px;
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`;

const Socials = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    position: relative;
    margin: 0 20px;
  }
  p {
    position: relative;
    margin: 80px 20px;
    ${mediaQueries.mobile} {
      margin: 50px 20px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      DAILY BRUIN
      <Socials>
        <a href="https://www.instagram.com/dailybruin" target="_blank">
          <img src={insta} />
        </a>
        <a href="https://www.facebook.com/dailybruin" target="_blank">
          <img src={fb} />
        </a>
        <a href="https://www.twitter.com/dailybruin" target="_blank">
          <img src={twitter} />
        </a>
        <a href="https://www.tiktok.com/@dailybruin" target="_blank">
          <img src={tiktok} />
        </a>
        <a href="http://eepurl.com/cFEiZX" target="_blank">
          <img src={email} />
        </a>
        <p>
          Built with Suzy&apos;s ♥ in Kerckhoff 118 by Annie Tran, Donny Rimer, Ed Nawrocki, Hameed
          Shaik, Katherine Li, Maria Martins, Marvin Deng, Michelle Kim, Nicole Ju, Rama Das,
          Richelle Shim, Sakshi Thoutireddy, Yifan Tang, Yubo Zhang. Designed by  Helen Quach.
        </p>
      </Socials>
    </Container>
  );
};

export default Footer;

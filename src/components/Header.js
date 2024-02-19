import styled from 'styled-components';

import DBLogo from '../images/DailyBruinLogo.svg';
import { colors } from '../shared/config';

const DBHeader = styled('div')`
  z-index: 2001;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #f7edcc;
  width: 100%;
  padding: 0.2em 0;
  color: #2b241f;
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;
  border-bottom: 1px solid #2b241f;
`;

const Header = () => {
  return (
    <DBHeader>
      <a
        href="https://dailybruin.com"
        target="_blank"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Daily Bruin
      </a>
    </DBHeader>
  );
};

export default Header;

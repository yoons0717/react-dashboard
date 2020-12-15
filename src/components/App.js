import React from 'react';

import styled from 'styled-components';
import Drawer from "./views/Drawer/Drawer"
import Summary from './views/Main/Summary/Summary';
import Topbar from './views/Top/Topbar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  
  background-color:#f1f4fa;
  padding:80px;
`;

const Main = styled.div`
  background-color:white;
  padding-right:50px;
`;

function App() {
  return (
    <Wrapper>
      <Drawer />
      <Topbar/>
      <Main>
        
        <Summary/>
      </Main>
    </Wrapper>
  );
}

export default App;

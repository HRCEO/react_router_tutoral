import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";


function App() {


    return (
      <>
          <ul>
              <li>
                  <Link to={'/'}>홈</Link>
              </li>
              <li>
                  <Link to={'/about'}>소개</Link>
              </li>
          </ul>
          <hr/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<About/>}/>
          </Routes>
      </>
  );
}

export default App;

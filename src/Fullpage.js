/* eslint-disable import/no-extraneous-dependencies */
import React,{useState} from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";    
import List from "./List";
import styled from 'styled-components';

const Inner = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding:160px 0;
`;
const anchors = ["page01", "page02", "page03","page04"];


const FullpageWrapper = ({cls, getData}) =>{
  return(
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      scrollOverflow={true}
      sectionsColor={["white", "white", "green"]}
      afterLoad = {(origin, destination, direction) => {
        cls = 'sec'+destination.index;
        getData(cls)
      }}
    
        //using index
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <h3>Section 1</h3>
            </div>
            <div className="section">
              <div className="slide">
                <Inner>
                    <List />
                </Inner>
              </div>
              <div className="slide">
                <h3>Slide 2.2</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.3</h3>
              </div>
            </div>
            <div className="section">
              <h3>Section 3</h3>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>
                Move top
              </button>
            </div>
            <div className="section">
              <h3>Section 3</h3>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>
                Move top
              </button>
            </div>
          </div>
        );
      }}
    />
  )
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));

export default FullpageWrapper;

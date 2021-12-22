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
`;
const anchors = ["page01", "page02", "page03","page04"];
const FullpageWrapper = ({cls, getData}) =>{
  return(
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      scrollOverflow={true}
      sectionsColor={["#ccc", "#ccc", "#ccc","#ccc"]}
      afterLoad = {(destination) => {
        cls = 'sec'+destination.index;
        getData(cls)
      }}
    
        //using index
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
                <Inner>
                  <h3>Section 1</h3>
                </Inner>
            </div>
            <div className="section">
              <div className="slide">
                <Inner>
                    <List prop="maptype"/>
                </Inner>
              </div>
              <div className="slide">
                <Inner>
                    <List prop="webtype"/>
                </Inner>
              </div>
            </div>
            <div className="section">
              <div className="slide">
                <Inner>
                    <List prop="maptype"/>
                </Inner>
              </div>
              <div className="slide">
                <Inner>
                  <h3>Slide 2.2</h3>
                </Inner>
              </div>
            </div>
            <div className="section">
                <Inner>
                  <h3>Section 3</h3>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    Move top
                  </button>
                </Inner>
            </div>
          </div>
        );
      }}
    />
  )
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));

export default FullpageWrapper;

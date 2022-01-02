/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import List from "./components/card/List";
import BtnPage from "./pages/BtnPage";
import TablePage from "./pages/TablePage";
const Inner = styled.div`
    width: 1400px;
    margin: 0 auto;
`;
const anchors = ["page01", "page02", "page03", "page04"];
const FullpageWrapper = ({ cls, getData }) => {
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            scrollOverflow={true}
            sectionsColor={["#ccc", "#ccc", "#ccc", "#ccc"]}
            afterLoad={(destination) => {
                cls = "sec" + destination.index;
                getData(cls);
            }}
            //using index
            render={({ state, fullpageApi }) => {
                return (
                    <div id="container">
                        <div id="fullpage-wrapper">
                            <div className="section">
                                <Inner>
                                    <h3>Section 1</h3>
                                </Inner>
                            </div>
                            <div className="section">
                                <div className="slide">
                                    <Inner>
                                        <List prop="maptype" />
                                    </Inner>
                                </div>
                                <div className="slide">
                                    <Inner>
                                        <List prop="webtype" />
                                    </Inner>
                                </div>
                            </div>
                            <div className="section">
                                <div className="slide">
                                    <Inner>
                                        <BtnPage />
                                    </Inner>
                                </div>
                                <div className="slide">
                                    <Inner>
                                        <TablePage />
                                    </Inner>
                                </div>
                            </div>
                            <div className="section">
                                <Inner>
                                    <h3>Section 3</h3>
                                    <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
                                </Inner>
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
};

ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));

export default FullpageWrapper;

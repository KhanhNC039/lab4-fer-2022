import React from "react";
import { Container, Tabs, Tab, Icon } from "react-materialize";
import { filmNews } from "../Share/ListOfNews";


export default function New () {
    return (
      <Container>
        <h3>Weekly News</h3>
        <Tabs
                className="teal lighten-2"
                options={{
                    swipeable: true,
                }}
                scope="tabs-71"
            >
                {filmNews.map((filmNew) => {
                    return (
                        <Tab
                            span className="tab-card"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false,

                            }}
                            title={(filmNew.title, <Icon>dsentiment_very_satisfied</Icon>)}
                        >
                            <img
                                src={filmNew.image}
                                alt=""
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 1,
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 3,
                                    color: "white",
                                    padding: "1rem 2rem",
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                }}
                            >
                                <h4 className="red-text text-accent-4">
                                    {filmNew.title}
                                </h4>
                                <p>{filmNew.description}</p>
                            </div>
                        </Tab>
                    );
                })}
            </Tabs>

        {/* <Tabs
          className="tab-demo z-depth-1"
          options={{
            swipeable: true,
          }}
          scope="tabs-71"
        >
            {filmNews.map((filmNew) => {
                return (
          <Tab
            className="blue"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            image={filmNew.image}
            title="Test 1"
          >
            Test 1
          </Tab>
                );
        })}
          <Tab
            active
            className="test2"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title=" "
            img ="https://images.bauerhosting.com/empire/2022/10/bp-wf-main-pod.jpg?q=80&w=1400&ar=16:9&fit=crop&crop=top"
          >
            Test 2
          </Tab>
          <Tab
            className="green"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Test 3"
          >
            Test 3
          </Tab>
        </Tabs> */}
      
      </Container>
    );
}
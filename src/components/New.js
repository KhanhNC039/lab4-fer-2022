import React from "react";
import { Container, Tabs, Tab, Icon, Carousel } from "react-materialize";
import { filmNews } from "../Share/ListOfNews";

export default function New() {
  return (
    <Container>
      {/* <Carousel
        carouselId="Carousel-85"
        images={[
          "https://m.media-amazon.com/images/M/MV5BNTgxYzBmM2ItY2JiYi00ZTdiLWI1YWUtMzBkNzNmYjVlNjc4XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR200,0,200,300_AL_.jpg",
          "https://m.media-amazon.com/images/M/MV5BNjVjZmQ4YWYtMzk2Zi00MjRkLWI5YTEtYjIxY2Q3MTNhYzM5XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR200,0,200,300_AL_.jpg",
          "https://m.media-amazon.com/images/M/MV5BNjc4MmQ4MjUtNTZiOS00MDI0LTliY2EtNzYyNGZkMzVhNjY2XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR200,0,200,300_AL_.jpg",
        ]}
        options={{
          dist: -100,
          duration: 200,
          fullWidth: false,
          indicators: false,
          noWrap: false,
          numVisible: 3,
          onCycleTo: null,
          padding: 0,
          shift: 0,
        }}
      /> */}

      {/* <Carousel
  carouselId="Carousel-89"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="red">
    <img src='https://m.media-amazon.com/images/M/MV5BNTgxYzBmM2ItY2JiYi00ZTdiLWI1YWUtMzBkNzNmYjVlNjc4XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR200,0,200,300_AL_.jpg'/>
    <h2>
      First Panel
    </h2>
    <p>
      This is your first panel
    </p>
  </div>
  <div className="amber">
    <h2>
      Second Panel
    </h2>
    <p>
      This is your second panel
    </p>
  </div>
  <div className="green">
    <h2>
      Third Panel
    </h2>
    <p>
      This is your third panel
    </p>
  </div>
  <div className="blue">
    <h2>
      Fourth Panel
    </h2>
    <p>
      This is your fourth panel
    </p>
  </div>
</Carousel> */}

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
                            title={(filmNew.title,1)}
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

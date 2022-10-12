import React from "react";
//import { useState } from 'react'
import { Films } from "../Share/ListOfFilms";
import { Link } from "react-router-dom";
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";

export default function Fimlss() {
  // const { theme } = useContext(ThemeContext)
  // const [, setFilm] = useState([])

  return (
    // <div key='film-index' className='container' style={{
    //   backgroundColor: theme.backgroundColor,
    //   color: theme.color
    // }}>
    //   {Films.map((film) => (
    //     <div className='column'>
    //       <div className='card'>
    //         <img src={film.img} alt='nice' />
    //         <h3>{film.title}</h3>
    //         <p className='title'>{film.year}</p>
    //         <Link to={`detail/${film.id}`}>
    //         <p><button onClick={() => { setFilm(film) }}>
    //         <a href='#popup1'
    //         id='openPopUp' style={{
    //           height:30,
    //           borderRadius:5,
    //           paddingTop:10,
    //           paddingLeft:12,
    //           marginTop:-2,
    //           marginLeft:-6,
    //           marginRight:-7,
    //           backgroundColor: theme.backgroundColor,
    //           color: theme.color,
    //         }}>Detail</a></button></p>
    //         </Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <Container>
      <Row>
        {Films.map((film) => (
          <Col l={4} m={4} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={film.img} reveal waves="light" />}
              reveal={<p>{film.info}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={film.title}
            >
              <p>
                <Link to={`detail/${film.id}`}>Detail</Link>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

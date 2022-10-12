import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export default function FlimsPresentation({ films }) {
  
  const { theme } = useContext(ThemeContext)

  return (
      <div  className='container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      {films.map((film) => (
        <div className='column'>
          <div className='card'>
            <img src={film.img} alt='nice' />
            <h3>{film.title}</h3>
            <p className='title'>{film.year} - {film.nation}</p>
            
            <Link to={`detail/${film.id}`}><p>
              <button>Detail</button></p>
          </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
// key='film-index' 
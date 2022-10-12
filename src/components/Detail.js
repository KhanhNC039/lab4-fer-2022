import React from 'react';
import { useParams } from 'react-router-dom'
import { Films} from '../Share/ListOfFilms'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react';
import { Icon} from "react-materialize";
import ModalCase from './FilmCase';    

export default function Detail() {
    const [isOpen,setIsOpen] =useState(false);
    const { theme } = useContext(ThemeContext)
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    let view = film.view.toLocaleString();
    return (
        <div className='containers' style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color
        }}>
                    {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                    
                    <div className='badge'>{film.title}</div>
                    <div className='product-tumb'>
                        <img src={`../${film.img}`} alt='' />
                        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red"><Icon>ondemand_video</Icon>
                    </a>
                    </div>
                    <div className='product-details'>
                        <h4>{film.year}-{film.nation}</h4>
                        <div className='product-price'>Market value: € {view}</div>
                        <p>{film.info}</p>
                        <div className='product-bottom-details'></div>
                    </div>
                
        </div>
    )
}
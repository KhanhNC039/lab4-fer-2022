import React from 'react'


export default function FilmCase ({setIsOpen, film}) {
    return (
      <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id="modal1" className="modal" style={{display :'block', top:'35%'}}>
            <div className="modal-content">
            <h4>{film.title} Trailer</h4>
            <p><iframe width="570" height="320px" src={film.clip} title={film.title} frameborder="0"
                allow="accelerometer; autoplay; clipboard-wire; encryted-media; gyroscope; picture-in-picture" allowfull screen/>
            </p>
            </div>
            <div className='modal-footer'>
                <a href="#"className='modal-close red-test'
                >Close</a>
            </div>
        </div>
      </div>
    )

}

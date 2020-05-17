import React, { Component } from 'react'

// json de lista
import listApp from './listApp'

export default class Card extends Component {
	constructor(props) {
		super(props)
		
		// Define valores iniciais
		this.state = {
            name: '',
            data: listApp
        }
    }

    onKeyPressed(e) {
        if (e.keyCode === 37) {
            e.preventDefault();
            console.log(e.keyCode, 'left', this)
        }

        if (e.keyCode === 39) {
            e.preventDefault();
            console.log(e.keyCode, 'left', this)
        }
    }
    

    render() {
        const renderCard = this.state.data.map(name => {
            return(
                <button className={'card__item '+ name.name.toLocaleLowerCase()}>
                    <img src={name.logo} className="card__logo" alt={name.name} />
                    <p>Abrir {name.name}</p>
                </button>
            )
        })

        return (
            <div className="card">
                <div className="card__group">
                    {renderCard}
                </div>
            </div>
        )
    }
}
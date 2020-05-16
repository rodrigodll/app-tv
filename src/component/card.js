import React, { Component } from 'react'

import logoNetflix from '../svg/netflix_logo.svg'
import logoGloboplay from '../svg/globoplay_logo.svg'
import logoAmazonprime from '../svg/amazon_prime_video_logo.svg'
import logoHbo from '../svg/hbo_go_logo.svg'

export default class Card extends Component {
	constructor(props) {
		super(props)
		
		// Define valores iniciais
		this.state = {
            name: '',
            class: 'active'
        }
    }
    

    render() {
        // let player = this.props.boards.dungeons[this.props.boards.currentBoard].player;

        return (
            
            <div className="card">
                <input
                    type="text"
                    onKeyDown={this.handleKeyUp}
                    onChange={this.handleChangeName}
                />

                <div className="card__group">
                    <button className="card__item netflix">
                        <img src={logoNetflix} className="card__logo" alt="Netflix" />
                        <p>Abrir</p>
                    </button>

                    <button className="card__item amazon">
                        <img src={logoAmazonprime} className="card__logo" alt="Amazon Prime" />
                        <p>Abrir</p>
                    </button>

                    <button className="card__item globoplay">
                        <img src={logoGloboplay} className="card__logo" alt="Globo Play" />
                        <p>Abrir</p>
                    </button>

                    <button className="card__item hbo">
                        <img src={logoHbo} className="card__logo" alt="Hbo Go" />
                        <p>Abrir</p>
                    </button>
                </div>
            </div>
        )
    }
}
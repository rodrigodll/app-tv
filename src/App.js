import React from 'react';
import './App.scss';

import googleCast from './svg/google-cast.svg'
import fullscreen from './svg/fullscreen.svg'
import mute from './svg/mute.svg'
import volumeminus from './svg/volumeminus.svg'
import volumeplus from './svg/volumeplus.svg'
import back from './svg/back.svg'

function App() {
    return (
        <div className="App">
            <div className="player-topo" id="opcoes_topo">
                <h2>fox comedy</h2>
                <a href="/?" class="button__back">
                    <font color="white">
                        <b>
                            <h3><img src={back} width="20" alt=""/> VOLTAR</h3>
                        </b>
                    </font>
                </a>
                <div className="player-topo_logo">
                    <div id="logo" data="assets/images/cluxter_site-03.png"></div> 
                </div>
            </div>


            <div className="player-rodape" id="opcoes_rodape">
                <div className="fLeft">
                    <button className="button button__volminus" onclick="javascript:volume_menos();" type="button">
                        <img src={volumeminus} alt=""/>
                    </button>
                    <button className="button button__mute" onclick="javascript:mudo();" type="button">
                        <img src={mute} alt=""/>
                    </button>
                    <button className="button button__volplus" onclick="javascript:volume_mais();" type="button">
                        <img src={volumeplus} alt=""/>
                    </button>
                </div>

                <div className="fRight">
                    <button className="button button__sheare" onclick="javascript:transmitir();" type="button">
                        <img src={googleCast} alt=""/>
                    </button>
                    <button className="button button__fullscreen" onclick="javascript:cheia();" type="button">
                        <img src={fullscreen} alt=""/>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default App;

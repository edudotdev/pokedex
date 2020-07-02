import React from 'react'

const Pokedex = ({id, setId, pokemon}) => {
 
    
    
    const {name, sprites, types} = pokemon

    
 
    const handleClick = e => {
        if(e.target.name === 'more') {
            if(id === 150){
                setId(1)
            }else {
                setId(id+1)
            }
        }else {
            if(id === 1){
                setId(150)
            }else {
                setId(id-1)
            }
        }
    }  

    return (
        <> 

            <div className="container">
                <div className="container__left">
                    <div className="container__left__header">
                        <div className="circle"></div>
                        <div className="circle2"></div>
                        <div className="circle2 yellow"></div>
                        <div className="circle2 green"></div>
                    </div>
                    <div className="container__left__body">

                        <div className="display"> 
                            <div className="image">
                                {pokemon.sprites ?
                                    <img src={sprites.front_default} alt=""/>
                                    :
                                    null
                                }
                            </div>
                        </div>

                        <div className="buttons">

                            <div className="buttons1">
                                <div className="btnCircle"></div>
                            </div>
                            <div className="buttons2">
                                <div className="bar1"></div>
                                <div className="bar1 blue"></div>
                                <div className="bar3 green"></div>
                            </div>
                            <div className="buttons3">
                                <input 
                                    type="button"
                                    value="mas"
                                    onClick={handleClick}
                                    className="morebutton"
                                    name="more"
                                />
                                <input 
                                    type="button"
                                    value="less"
                                    onClick={handleClick}
                                    className="lessbutton"
                                    name="less"
                                />
                                <div className="vertical"></div>
                                <div className="horizontal"></div>
                                
                            </div> 
                        </div>
                    </div>
                    
                </div>
                <div className="container__right">
                    <div className="showName">
                       <p>{name}</p>
                    </div>
                    <div className="blueRectangle">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="dosbotones">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="blanco_amarillo">
                        <div className="divblanco">
                                <div></div>
                                <div></div>
                        </div>
                        <div className="divamarillo yellow"></div>
                    </div>
                    <div className="divbottom">
                        <div className="large">
                            {pokemon.types ?
                                <p>{types[0].type.name}</p>
                            :
                                null
                            }
                        </div>
                        <div className="short">{id} </div>
                    </div>
                </div>
            </div>
            
        </> 
     );
}
 
export default Pokedex;
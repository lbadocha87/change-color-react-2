import React from 'react';


const ButtonsPanel = (props) => {

    console.log(props)
    
    return (
        <div>
          <button onClick={()=>props.changeColorHeandler('red')}>Red</button>
          <button onClick={()=>props.changeColorHeandler('green')}>Green</button>
          <button onClick={()=>props.changeColorHeandler('blue')}>Blue</button>

          <input placeholder="set heading text" onChange={(e)=>props.changeTextHeandler(e)}/>

        </div>
    )
}

export default ButtonsPanel;
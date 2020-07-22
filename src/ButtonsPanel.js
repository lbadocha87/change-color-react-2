import React from 'react';


const ButtonsPanel = (props) => {

    console.log(props)
    
    return (
        <div>
          <button onClick={()=>props.changeColorHeandler('red')}>Red</button>
          <button onClick={()=>props.changeColorHeandler('green')}>Green</button>
          <button onClick={()=>props.changeColorHeandler('blue')}>Blue</button>
        </div>
    )
}

export default ButtonsPanel;
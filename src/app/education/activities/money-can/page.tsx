'use client'

import { Stage,  Sprite } from '@pixi/react';
import '@pixi/events';
import ReactDOM from 'react-dom';


export default function MoneyCanActivity(){
    const bunny = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";
    let scale = { x: 1, y: 1 };
    
    return (
    <Stage options={{ backgroundColor: 0x012b30 }}>
    <Sprite
      x={250}
      y={250}
      anchor={[0.5, 0.5]}
      scale={scale}
      image={bunny}
      interactive={true}
      pointerdown={() => {
        console.log("click");
        scale.x *= 1.25;
        scale.y *= 1.25;

        //render();
      }}
    />
  </Stage>
    );
}

function render() {
    ReactDOM.render(<MoneyCanActivity/>, document.body);
  }
  
  render();
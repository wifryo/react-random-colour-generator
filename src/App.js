import './App.css';
import { ClassNames, css, Global, jsx } from '@emotion/react';
import invert from 'invert-color';
import randomColor from 'randomcolor';
import { useState } from 'react';

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function App() {
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [inverseColour, setInverseColour] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');
  const colourChoices = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'monochrome',
  ];

  return (
    <div className="App">
      <h1
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Random Colour Generator
      </h1>
      <br />
      <div
        className="colourTransition"
        style={{
          width: 450,
          height: 200,
          margin: '0 auto',
          display: 'flex',
          padding: '50px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 50,
          border: '1px solid black',
          borderRadius: 25,
          backgroundColor: colourHex,
        }}
      >
        <div style={{ fontSize: 1 }}>
          Generated Color: {`${colour} ${colourHex}`}
          <br />
        </div>
        <div
          className="colourTransition"
          style={{ fontSize: 50, color: inverseColour }}
        >
          Generated Colour: {`${colour} ${colourHex}`}
        </div>
      </div>
      <br />
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => {
            // the problem is that the hue is set from the previous loop
            let newColour = randomItem(colourChoices);
            if (hue.length > 0) {
              setColour(hue);
              newColour = hue;
            } else {
              setColour(newColour);
            }
            const newColourHex = randomColor({
              hue: newColour,
              luminosity: luminosity,
            });
            setColourHex(newColourHex);
            setInverseColour(invert(newColourHex));
          }}
        >
          Generate
        </button>
      </div>
      <br />
      <div>
        <input
          placeholder="Input hue here"
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
        <br />
        <input
          placeholder="Input luminosity here"
          value={luminosity}
          onChange={(event) => {
            setLuminosity(event.currentTarget.value);
          }}
        />
        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 500px;
            border-radius: 4px;
            &:hover {
              color: yellow;
            }
          `}
        >
          Hover to change color.
        </div>
      </div>
    </div>
  );
}

export default App;

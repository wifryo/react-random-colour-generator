/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import invert from 'invert-color';
import randomColor from 'randomcolor';
import { useState } from 'react';

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
const mainStyle = css`
  text-align: center;
  align-items: center;
`;
const headerStyle = css`
  margin: '200 auto';
  display: 'flex';
`;
const colourTransition = css`
  transition: background-color 0.5s ease-in;
`;
function App() {
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [inverseColour, setInverseColour] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');
  const [height, setHeight] = useState(150);
  const [newHeight, setNewHeight] = useState(150);
  const [width, setWidth] = useState(450);
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

  const heightPx = height + 'px';
  const widthPx = width + 'px';
  return (
    <div css={mainStyle}>
      <h1 css={headerStyle}>Random Colour Generator</h1>

      <div
        css={colourTransition}
        style={{
          margin: '0 auto',
          padding: '50px',
          fontSize: 50,
          borderRadius: 25,
          height: heightPx,
          width: widthPx,
          backgroundColor: colourHex,
        }}
      >
        <div style={{ fontSize: 1 }}>
          Generated Color: {colourHex}
          <br />
        </div>
        <div
          css={colourTransition}
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

            if (hue.length > 1) {
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
            setHeight(newHeight);
            setWidth(newHeight * 2 + 200);
          }}
        >
          Generate
        </button>
      </div>
      <br />
      <div>
        <select
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        >
          <option value="">random hue</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="purple">purple</option>
          <option value="pink">pink</option>
          <option value="monochrome">monochrome</option>
        </select>
        <br />

        <select
          onChange={(event) => {
            setLuminosity(event.currentTarget.value);
          }}
        >
          <option value=" ">random luminosity</option>
          <option value="bright">bright</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
        <br />
        <select
          onChange={(event) => {
            setNewHeight(event.currentTarget.value);
            console.log(`newheight2= ${newHeight}`);
          }}
        >
          <option value="200">default size</option>
          <option value="300">big</option>
          <option value="500">megabig</option>
        </select>
      </div>
    </div>
  );
}

export default App;

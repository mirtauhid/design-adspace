import { default as React, useContext } from 'react';
import uuid from 'react-uuid';
import { GlobalContext } from '../App';
import '../styles/Editor.css';
import Window from './Window';

const Editor = () => {
  const [windows, setWindows] = useContext(GlobalContext);

  return (
    <div id='editor'>
      <div id='editorHeader'>
        <h2>Editor</h2>
        <div>
          <button
            onClick={(e) =>
              setWindows([
                ...windows,
                {
                  id: `W-${uuid()}`,
                  title: 'Window',
                  name: 'Window',
                  height: 60,
                  width: 36,
                  position: { x: 400, y: 200 },
                  bg: 'lightgrey',
                  price: '',
                },
              ])
            }>
            Add Box
          </button>
          <button
            onClick={(e) =>
              setWindows([
                ...windows,
                {
                  id: `M-${uuid()}`,
                  title: 'Mullion',
                  height: 60,
                  width: 3.4,
                  position: { x: 400, y: 200 },
                  bg: 'skyblue',
                },
              ])
            }>
            Add Mullion
          </button>
        </div>
      </div>
      <div id='editorBody'>
        <Window windows={windows} setWindows={setWindows} />
      </div>
    </div>
  );
};

export default Editor;

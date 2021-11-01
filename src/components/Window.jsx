import { DraggableChild, DraggableContainer } from 'react-dragline';
import '../styles/Window.css';

const Window = ({ windows, setWindows }) => {
  const heightHandler = (e, id) => {
    const window = windows.find((w) => w.id === id);
    const allWindows = windows.filter((w) => w !== window);
    window.height = e.target.value || 60;
    allWindows.push(window);
    setWindows(allWindows);
  };

  const widthHandler = (e, id) => {
    const window = windows.find((w) => w.id === id);
    const allWindows = windows.filter((w) => w !== window);
    window.width = e.target.value || 36;
    allWindows.push(window);
    setWindows(allWindows);
  };

  const nameHandler = (e, id) => {
    const window = windows.find((w) => w.id === id);
    const allWindows = windows.filter((w) => w !== window);
    window.name = e.target.value || 'Window';
    allWindows.push(window);
    setWindows(allWindows);
  };

  return (
    <DraggableContainer style={{ height: '75vh', position: 'relative' }}>
      {windows.map((window, index) => {
        return (
          <DraggableChild key={window.id} defaultPosition={window.position}>
            <div
              className='box'
              style={{
                width: window.width * 5,
                height: window.height * 5,
                cursor: 'move',
                background: window.bg,
              }}>
              {window.title === 'Mullion' ? (
                <input
                  style={{
                    transform: 'rotate(-90deg)translateY(-157%)',
                    width: '50px',
                    marginTop: '56px',
                    border: 'none',
                    background: 'transparent',
                    padding: '0px 7px',
                    cursor: 'auto',
                  }}
                  onBlur={(e) => heightHandler(e, window.id)}
                  type='text'
                  name=''
                  id=''
                  placeholder={window.height}
                />
              ) : null}
              {window.title === 'Window' ? (
                <div className='boxChild'>
                  <h3 style={{ margin: '15px auto', textAlign: 'center' }}>
                    <input
                      style={{
                        fontSize: '18px',
                        width: '100%',
                        margin: '0 auto',
                        fontWeight: '700',
                        padding: '5px 0px',
                      }}
                      onChange={(e) => nameHandler(e, window.id)}
                      type='text'
                      name='name'
                      id='name'
                      placeholder={window.name}
                    />
                  </h3>

                  <small>
                    <span>
                      <input
                        type='text'
                        name='height'
                        id='height'
                        placeholder={window.height}
                        onBlur={(e) => heightHandler(e, window.id)}
                      />
                    </span>{' '}
                    X{' '}
                    <span>
                      <input
                        type='text'
                        name='height'
                        id='height'
                        placeholder={window.width}
                        onBlur={(e) => widthHandler(e, window.id)}
                      />
                    </span>
                  </small>
                  <br />
                  <br />
                  <small style={{ color: 'blue' }}>
                    {window.id.substr(window.id.length - 6)}
                  </small>
                </div>
              ) : null}
            </div>
          </DraggableChild>
        );
      })}
    </DraggableContainer>
  );
};

export default Window;

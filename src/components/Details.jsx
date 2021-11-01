import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import '../styles/ProductDetails.css';

const Details = () => {
  const [windows, setWindows] = useContext(GlobalContext);
  const priceHandler = (e, id) => {
    const window = windows.find((w) => w.id === id);
    const allWindows = windows.filter((w) => w !== window);
    window.price = e.target.value || 100;
    allWindows.push(window);
    setWindows(allWindows);
  };
  return (
    <div id='ProductDetails'>
      <h2>Product Details</h2>
      {windows.length !== 0 ? (
        <table id='proTable'>
          <tbody>
            {windows
              .filter((wind) => wind.title === 'Window')
              .map((win, index) => {
                return (
                  <tr key={win.id}>
                    <td>{index + 1}.</td>
                    <td>{win.id}</td>
                    <td>{win.name}</td>
                    <td>
                      {win.height}" x {win.width}"
                    </td>
                    <td>
                      $
                      <span>
                        <input
                          onChange={(e) => priceHandler(e, win.id)}
                          style={{
                            fontSize: '16px',
                            border: 'none',
                            background: 'transparent',
                            width: '30px',
                          }}
                          type='text'
                          name='price'
                          id='price'
                          placeholder={win.price || 100}
                        />
                      </span>
                      /mo
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Details;

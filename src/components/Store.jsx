import React from 'react';
import '../styles/StoreDetails.css';

const Store = () => {
  return (
    <div id='StoreDetails'>
      <h2>Store Details</h2>
      <form action='' id='storeForm'>
        <div className='flex'>
          <div style={{ width: '65%' }}>
            <label htmlFor=''>Store Name</label>
            <input placeholder='Store Name' type='text' name='' id='' />
          </div>
          <div style={{ width: '30%' }}>
            <label htmlFor=''>Store ID</label>
            <input placeholder='Store ID' type='text' name='' id='' />
          </div>
        </div>
        <div className='flex'>
          <div style={{ width: '100%' }}>
            <label htmlFor=''>Address</label>
            <input placeholder='Address' type='text' name='' id='' />
          </div>
        </div>
        <div className='flex'>
          <div style={{ width: '40%' }}>
            <label htmlFor=''>City</label>
            <input placeholder='City' type='text' name='' id='' />
          </div>
          <div style={{ width: '25%' }}>
            <label htmlFor=''>State</label>
            <input placeholder='State' type='text' name='' id='' />
          </div>
          <div style={{ width: '25%' }}>
            <label htmlFor=''>Zip</label>
            <input placeholder='Zip' type='text' name='' id='' />
          </div>
        </div>
        <div style={{ width: '20%', marginLeft: 'auto', marginTop: '30px' }}>
          <input
            style={{
              height: '42px',
              fontSize: '18px',
              fontWeight: 'bold',
              background: 'lightblue',
              border: '1px solid grey',
              cursor: 'pointer',
            }}
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default Store;

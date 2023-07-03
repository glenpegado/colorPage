import { useState } from 'react';
import Values from 'values.js';

function Form({ addColor }) {
  //useState
  const [color, setColor] = useState('');

  //FUNCTION handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    addColor(color);
  };

  //RETURN
  return (
    <section className='container'>
      {/* TITLE */}
      <h4>Color Generator</h4>

      {/* FORM */}
      <form className='color-form' onSubmit={handleSubmit}>
        {/* color picker */}
        <input
          type='color'
          id='color'
          name='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        {/* text input */}
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#fffff'
        />
        {/* button */}
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}
export default Form;

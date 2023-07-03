import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  //useState
  const [colors, setColors] = useState(new Values('red').all(10));

  //FUNCTION
  const addColor = (color) => {
    try {
      let chosenColor = new Values(color).all(10);
      setColors(chosenColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  //RETURN
  return (
    <main>
      <ToastContainer position='top-center' />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;

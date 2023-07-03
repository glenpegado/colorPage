import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

function ColorList({ colors }) {
  //RETURN
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}
export default ColorList;

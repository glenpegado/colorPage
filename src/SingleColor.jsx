import { toast } from 'react-toastify';

function SingleColor({ color, index }) {
  //variables
  const { hex, weight } = color;

  //FUNCTION
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Clipboard copied');
      } catch (error) {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  //RETURN
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
}
export default SingleColor;

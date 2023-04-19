import { useEffect, useState } from "react";

type Image = "cat" | "dog";

export default function App() {
  const [imageType, setImageType] = useState<Image>();
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setImageType("cat");
  const handleDoubleClick = () => setImageType("dog");

  useEffect(() => {
    let singleClickTimer: ReturnType<typeof setTimeout>;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        handleClick();
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      handleDoubleClick();
      setClicks(0);
    }
    return () => clearTimeout(singleClickTimer);
  }, [clicks]);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        Show image of cat or dog
      </button>
      {imageType ? (
        <img
          src={`https://source.unsplash.com/random/300x300?${imageType}`}
          alt=""
        />
      ) : null}
    </>
  );
}

// const handleClick = () => setImageType("cat");
// const handleDoubleClick = () => setImageType("dog");
/* <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
Show image of cat or dog
</button>
{imageType ? (
<img
  src={`https://source.unsplash.com/random/300x300?${imageType}`}
  alt=""
/> */

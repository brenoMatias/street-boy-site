import React from 'react';
import './slide.css'
import acessories from './mockData';

const colors = ["#0088FE", "#00C49F", "#0088FE", "#FFBB28", "#00C49F"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === acessories.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <><div className='acesssorio'>
      Acessórios
    </div>
    
    <div className='slideDiv'>
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {acessories.map((acessorie, index) => (
              <div
                className="slide"
                key={index}
                // style={{ backgroundColor }}
                
              >
              <div className='slideDivs'> 
                <h1> {acessorie.name}</h1>
                <img className='imgSlide' src={acessorie.imgUrl}/>
              </div>
              </div>

              
            ))}
          </div>

          <div className="slideshowDots">
            {acessories.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                } }
              ></div>
            ))}
          </div>
        </div>
      </div></>
  );
}

export default Slideshow;

// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
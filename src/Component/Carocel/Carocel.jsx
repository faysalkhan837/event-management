

const Carocel = () => {
    return (
        <div className="carousel w-full max-h-[450px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/jG0cL1X/Retirementbn.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/hKBdH4d/baby-showerbn.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/FBrLfy1/birth-Day-Ban.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide4" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TgJkrvB/anniversariesbn.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Carocel;
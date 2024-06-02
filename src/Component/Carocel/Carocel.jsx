

const Carocel = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          <div className="absolute flex transform -translate-y-1/2 right-24 bottom-10 gap-5">
            <a href="#slide4" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          <div className="absolute flex transform -translate-y-1/2 right-24 bottom-10 gap-5">
            <a href="#slide1" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          <div className="absolute flex transform -translate-y-1/2 right-24 bottom-10 gap-5">
            <a href="#slide2" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide4" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex transform -translate-y-1/2 right-24 bottom-10 gap-5">
            <a href="#slide3" className="btn btn-circle hover:bg-[#FDFFAB]">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-[#FDFFAB]">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Carocel;
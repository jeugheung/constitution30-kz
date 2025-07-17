import React from "react";
import cls from './Framer.module.css'
import { Slide } from "react-awesome-reveal";
import backIcon from '../../components/assets/back.svg'
import ornamentBg from '../../components/assets/ornament3.svg';

const Framer = () => {
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
    
  };

  return (
    <div style={containerStyle}>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border "
        style={{
          backgroundImage: `url(${ornamentBg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >

        <div className="container items-center flex mx-auto px-4 sm:px-6 lg:px-8">
          <Slide direction="left"  duration={400}  triggerOnce>
            <button
              onClick={() => window.history.back()}
              className="relative z-10 mt-3 mb-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-pointer flex gap-2"
            >
              <img src={backIcon} width={8} alt="назад" />
              Назад
            </button>
          </Slide>
        </div>
      </header>
    
      <iframe
        src="https://storage.googleapis.com/ue5-html5-tour1/index.html"
        title="3D Игра"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
  );
};

export default Framer;

import preloader from "../../../assets/images/preolader.svg";
import React from "react";

type PreloaderType = {}

let Preloader: React.FC<PreloaderType> = () => {
 return (
   <>
     <img src={preloader} />
   </>
 )
}

export default Preloader;
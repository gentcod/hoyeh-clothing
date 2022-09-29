
import SliderImage from "../slider-image/slider-image.component";

import { SliderContainer, SliderImagesContainer } from "./slider.styles";

const sliderData = [
   {
      "id": 0,
      "imageSrc": "https://i.ibb.co/Sn2h6Vz/4.jpg",
   },

   {
      "id": 1,
      "imageSrc": "https://i.ibb.co/TLyfMgV/3.jpg",
   },

   {
      "id": 2,
      "imageSrc": "https://i.ibb.co/ccGCBKy/5.jpg",
   },

   {
      "id": 3,
      "imageSrc": "https://i.ibb.co/MfN1MjQ/10.jpg",
   },

   {
      "id": 4,
      "imageSrc": "https://i.ibb.co/7VP6rZ2/2.jpg",
   }
]

const Slider = () => {


   return (
      <SliderContainer>
         <SliderImagesContainer>
            {
               sliderData.map(data => <SliderImage key={data.id} image={data.imageSrc}/>)
            }
         </SliderImagesContainer>
      </SliderContainer>
   )
};

export default Slider;
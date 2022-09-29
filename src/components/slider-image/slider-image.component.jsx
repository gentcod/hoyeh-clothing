import { SliderImageContainer, Image } from './slider-image.styles';

const SliderImage = ({image}) => {
   return (
      <SliderImageContainer>
         <Image src={image}/>
      </SliderImageContainer>
   )
};

export default SliderImage;
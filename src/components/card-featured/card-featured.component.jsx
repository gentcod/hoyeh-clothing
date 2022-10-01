import Button from '../button/button.component';

import { CardContainer, CardImage, CardContentContainer, CardContentHeading, CardButtonContainer } from "./card-feature.styles";

const CardFeature = () => {
   return (
      <CardContainer>
         <CardImage src="https://i.ibb.co/n0nnD4z/9.jpg"/>
         <CardContentContainer>
            <CardContentHeading>Accessories portrays style</CardContentHeading>
            <CardButtonContainer>
               <Button text={"Shop Now"}/>  
               <Button text={"Explore"}/>  
            </CardButtonContainer>
         </CardContentContainer>
      </CardContainer>
   )
}

export default CardFeature;
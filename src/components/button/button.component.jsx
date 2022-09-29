import { ButtonContainer, ButtonText} from './button.syles';

const Button = ({text}) => {
   return (
      <ButtonContainer>
         <ButtonText>{text}</ButtonText>
      </ButtonContainer>
   )
};

export default Button;
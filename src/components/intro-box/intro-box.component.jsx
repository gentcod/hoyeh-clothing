import {IntroContainer, IntroHeader, IntroText} from './intro-box.styles';

const textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper odio in rhoncus vehicula. Vivamus a viverra lorem, id gravida ligula. Morbi et placerat elit, eu efficitur elit. Quisque at tincidunt neque. Nunc at dui vitae ipsum ornare ornare. Proin nibh libero, molestie id quam eu, aliquam rutrum arcu. Morbi molestie nibh a erat finibus consequat. Cras sit amet laoreet elit. Praesent sit amet ipsum aliquet, faucibus urna vitae, ultrices lectus. Proin tincidunt, nibh id varius ultricies, nisi mi consectetur velit, ac aliquet magna enim ut ipsum. Phasellus laoreet semper nulla a laoreet. Maecenas aliquet sapien sed purus convallis congue. In finibus sagittis dui sed semper. Aenean varius fermentum nisl ac pretium. Vestibulum cursus turpis in sapien posuere ultrices. Fusce volutpat auctor felis pellentesque euismod."

const IntroBox = () => {
   return (
      <IntroContainer>
         <IntroHeader>Break The Ice</IntroHeader>
         <IntroText>{textContent}</IntroText>
      </IntroContainer>
   )
}

export default IntroBox;
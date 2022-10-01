import { HomeContainer } from "./home.styles";

import CardFeature from "../../components/card-featured/card-featured.component";
import Slider from "../../components/slider/slider.component";
import IntroBox from "../../components/intro-box/intro-box.component";

const Home = () => {
   return (
      <HomeContainer>
         <CardFeature/>
         <IntroBox/>
         <Slider/>
      </HomeContainer>
   )
}

export default Home;
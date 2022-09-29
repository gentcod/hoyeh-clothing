import { HomeContainer } from "./home.styles";

import CardFeature from "../../components/card-featured/card-featured.component";
import Slider from "../../components/slider/slider.component";

const Home = () => {
   return (
      <HomeContainer>
         <CardFeature/>
         <Slider/>
      </HomeContainer>
   )
}

export default Home;
import { HomeContainer } from "./home.styles";

import CardFeature from "../../components/card-featured/card-featured.component";
import IntroBox from "../../components/intro-box/intro-box.component";

const Home = () => {
   return (
      <HomeContainer>
         <CardFeature/>
         <IntroBox/>
      </HomeContainer>
   )
}

export default Home;
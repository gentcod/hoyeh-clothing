import { Fragment } from "react";
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from "../../assets/SVG/hoyeh_logo.svg";
import SearchBox from "../../components/search-box/search-box.component";
import UserLog from "../../components/user-log/user-log.component";

import { NavigationContainer, LogoContainer, NavigationLink} from "./navigation.styles";

const Navigation = () => {
   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer>
               <Logo/>
            </LogoContainer>
            <NavigationLink to={'/mens'}>Men's Fashion</NavigationLink>
            <NavigationLink to={'/womens'}>Women's Fashion</NavigationLink>
            <NavigationLink to={'/unisex'}>Unisex</NavigationLink>
            <SearchBox/>
            <UserLog/>
         </NavigationContainer>
         <Outlet/>
      </Fragment>
   )
};

export default Navigation;
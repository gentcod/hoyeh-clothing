import styled from "styled-components";
import { ReactComponent as User } from "../../assets/SVG/user-icon.svg";
import { ReactComponent as Tag } from "../../assets/SVG/tag-icon.svg";
import { ReactComponent as Cart } from "../../assets/SVG/cart-icon.svg";

export const UserLogContainer = styled.div`
   display: flex;
   margin: 0 auto;
`

export const UserIcon = styled(User)`
   margin-top: .5rem;
   margin-right: 1.5rem;
   height: 1.8rem;
   fill: #fff;
`

export const TagIcon = styled(Tag)`
   margin-top: .5rem;
   margin-right: 1.5rem;
   height: 1.8rem;
   fill: #fff;
`

export const CartIcon = styled(Cart)`
   margin-top: .5rem;
   margin-right: 1.5rem;
   height: 1.8rem;
   fill: #fff;
`
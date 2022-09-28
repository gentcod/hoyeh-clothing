import styled from "styled-components";
import { ReactComponent as User } from "../../assets/SVG/user-icon.svg";
import { ReactComponent as Tag } from "../../assets/SVG/tag-icon.svg";

export const UserLogContainer = styled.div`
   display: flex;
   width: 6rem;
   margin: 0 auto;
`

export const UserIcon = styled(User)`
   margin-top: .5rem;
   margin-right: 1rem;
   height: 2rem;
   fill: #fff;
`

export const TagIcon = styled(Tag)`
   margin-top: .5rem;
   margin-right: 1rem;
   height: 2rem;
   width: 2rem;
   fill: #fff;
`
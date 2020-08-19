import styled, { css } from 'styled-components';

import { RiGroupLine, RiBuilding4Line, RiMapPinLine, RiMailLine, RiLinksLine } from 'react-icons/ri'

export const Container = styled.div`
  
`;



export const Flex = styled.div`
display: flex;
align-items: center;
> div {
  margin-left: 24px;

   > h1 {
     text-overflow: ellipsis;
     white-space: nowrap;;
     font-size: 26px;
     line-height: 1.25px;
     color: var(--gray-dark);
     font-weight: 600;
     margin: 10px 0 10px 0;

    @media (min-width: 768px) {
      margin-top: 10px;
    }
     
   }
   > h2 {
     font-size: 20px;
     color: var(--username);
     font-weight: 300;
     margin-top: 15px;
   }
  }


  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
> div {
  margin-left: 0;
}

  }
`;

export const Avatar = styled.img`
width: 16%;
border-radius: 50%;

@media(min-width: 768px) {
  width: 100%;
  margin-top: -34px;
}

`;

export const Row = styled.ul`
display: flex;
align-items: center;
flex-wrap: wrap;
margin: 20px 0px;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > * {
      margin-right: 5px 
    }
  }



`;

export const PeopleIcon = styled(RiGroupLine)``;

export const Column = styled.ul` 
li {
  display: flex;
  align-items: center;
  font-size: 14px;
}

li + li {
  margin-top: 10px;
}
span {
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

`;


const IconCSS = css`
width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;
margin-right: 5px;
`

export const CompanyIcon = styled(RiBuilding4Line)`${IconCSS}`;

export const LocationIcon = styled(RiMapPinLine)`${IconCSS}`;

export const EmailIcon = styled(RiMailLine)`${IconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${IconCSS}`;
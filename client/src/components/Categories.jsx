import { categories } from "../data"
import styled from "styled-components"
import CategoriesItem from "./CategoriesItem"
import {Fade} from "react-reveal";


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr; /* Stacks items in a single column on mobile */
    padding: 0px;
  }
`;
const Title = styled.h1`
width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin: 18px 0px;
  font-weight: 700;
  font-family: 'Dancing Script', cursive;
  /* color: #cf4d23; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Categories = () => {
  return (
    <div>
         <Title>Our Services</Title>
         <Fade>
         <Container>
         {categories.map(item=>(
           <CategoriesItem item={item} key={item.id}/>
          ))}
         </Container>
         </Fade>
    </div>
  )
}

export default Categories
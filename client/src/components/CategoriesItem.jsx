import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Video = styled.video`
   width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      {item.id === 3 ? (
        <Video autoPlay loop muted>
          <source src="../image/v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      ) : (
        <Image src={item.img} alt={item.title} />
      )}
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;

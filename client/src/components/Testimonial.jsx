import React from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.section`
  position: relative;
  padding: 30px 20px;
  margin-top: 20px;
  margin-bottom: 35px;;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.8); /* A slight overlay for readability */
  z-index: 1; /* Ensure content stays above the background */

  /* Background image with blur effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./image/slider2.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    filter: blur(10px); /* Apply blur effect */
    z-index: -1; /* Place behind the content */
    opacity: 0.6; /* Adjust the opacity to make text more readable */
  }
`;

const TestimonialHeading = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 18px;
  font-weight: 700;
  font-family: 'Dancing Script', cursive;
  /* color: #cf4d23; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const TestimonialWrapper = styled.div`
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.3);
  }
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555555;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ClientPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  /* border: 3px solid #cf4d23; */
  box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.2);
`;

const ClientName = styled.h3`
  font-size: 1.4rem;
  color: #333333;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const ClientRole = styled.p`
  font-size: 1rem;
  color: #777777;
  margin-bottom: 0;
  font-weight: 500;
`;

const Testimonial = () => {
  const testimonials = [
    {
      text: "Printing and typesetting industry’s go-to dummy text. Lorem Ipsum has remained the standard dummy text since the 1500s when a printer took a galley of type.",
      name: "Vinod Dhalsingh",
      role: "",
      photo: "https://via.placeholder.com/100",
    },
    {
      text: "The typesetting industry’s simple dummy text. Lorem Ipsum has remained the industry standard since the 1500s.",
      name: "kisan sinha",
      role: "",
      photo: "https://via.placeholder.com/100",
    },
    {
      text: "A standard placeholder for the typesetting industry. Lorem Ipsum has continued as the industry norm since the 1500s.",
      name: "sameer bhardiya",
      role: "Reguler client",
      photo: "./image/sameer.jpg",
    },
  ];


  return (
    <TestimonialSection>
      <TestimonialHeading>Our Testimonial</TestimonialHeading>
      {testimonials.map((testimonial, index) => (
        <TestimonialWrapper key={index}>
          <ClientPhoto src={testimonial.photo} alt={`${testimonial.name}'s testimonial`} />
          <QuoteText>{testimonial.text}</QuoteText>
          <ClientName>{testimonial.name}</ClientName>
          <ClientRole>{testimonial.role}</ClientRole>
        </TestimonialWrapper>
      ))}
    </TestimonialSection>
  );
};

export default Testimonial;

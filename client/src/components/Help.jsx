import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: auto;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center; // Center aligns the title
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 40px;
  text-align: center;
  ${mobile({
    textAlign: "center",
  })}
`;

const FAQItem = styled.div`
  width: 80%;
  margin: 10px 0;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  ${mobile({
    width: "90%",
  })}
`;

const Question = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.div`
  font-size: 16px;
  margin-top: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  color: #333;
`;

const Drop = styled.span`
  border: 1px solid teal;
  border-radius: 50%;
  padding: 0px 5px;
  background: teal;
  color: white;
`;

export const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How is the digital artwork customized and approved?",
      answer: "The digital artwork is customized according to your instructions and sent to you for approval before finalizing. Revisions are allowed during this process."
    },
    {
      question: "How long does it take to complete and deliver the artwork?",
      answer: "The softcopy design takes 5 to 7 working days, while the full process including delivery typically takes 7 to 10 days, depending on your location."
    },
    {
      question: "How will I receive the softcopy and what are the delivery options?",
      answer: "The softcopy will be sent via Email or WhatsApp in JPEG or PNG format for approval. Once approved, we proceed with printing, framing, and dispatch to your provided address."
    },
    {
      question: "Can I make changes to my order after confirmation?",
      answer: "Once the order is confirmed, photo replacement won’t be accepted. After printing, modifications to the artwork are also not allowed."
    },
    {
      question: "What should I keep in mind for uploading photos and contacting support?",
      answer: "Please upload high-resolution photos with clear instructions. You may also reach out to discuss details via the provided contact number for further guidance."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <Description>
        Here you will find answers to frequently asked questions. Please contact us if your question is not listed below.
      </Description>
      {faqs.map((faq, index) => (
        <FAQItem key={index} onClick={() => toggleAnswer(index)}>
          <Question>
            {faq.question}
            <Drop>{activeIndex === index ? '-' : '+'}</Drop>
          </Question>
          <Answer show={activeIndex === index}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </Container>
  );
};

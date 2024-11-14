import React, { useEffect } from 'react';
import Announcement from '../components/Announcement';
import Navbar1 from '../components/Navbar1';
import styled from 'styled-components';

// Styled-components for the gallery layout
const Container = styled.div`
  /* width: 100%;
  padding: 20px;
  box-sizing: border-box; */
`;

const Title = styled.div`
  margin-top: 8%;
  text-align:center;

  @media (max-width: 488px) {
    margin-top:25%;
  }
`;

const Wrapper = styled.div`
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const EmbedContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 600px; /* Increase this to set desired height */

  /* Styling for responsiveness */
  iframe {
    width: 100%;
    height: 100%; /* Make iframe take full height of container */
    border: none;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
`;

const Quote = styled.p`
  font-size: 20px;
  color: #666;
  font-style: italic;
  margin-bottom: 40px;
`;


const Gallery = () => {
    // Load Instagram Embed JS after the component mounts
    useEffect(() => {
      // Dynamically load the Instagram Embed script
      const script = document.createElement('script');
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);

      // Re-initialize the embeds after the script loads
      script.onload = () => {
        window.instgrm.Embeds.process();
      };

      return () => {
        // Clean up the script if necessary when the component unmounts
        document.body.removeChild(script);
      };
    }, []); // Empty dependency array ensures this only runs once after initial mount

  return (
    <Container>
      <Announcement />
      <Navbar1 />
      <Title>
      <Heading>Our Creation</Heading>
      <Quote>"We create memories, and here they are captured forever."</Quote>
      </Title>
      <Wrapper>
        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/CmBBYBRJGG6/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/CmBBYBRJGG6/?utm_source=ig_embed&utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/CjIKKZnpD0T/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/CjIKKZnpD0T/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/C1J0daItEdr/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/C1J0daItEdr/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/C2-W0MNJsAs/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/C2-W0MNJsAs/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/CuYqlV8JDyA/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/CuYqlV8JDyA/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/Cx5SKeVJMoL/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/Cx5SKeVJMoL/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/CyGRlAWpeXg/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/CyGRlAWpeXg/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/Cx0JsNmJqyH/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/Cx0JsNmJqyH/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/Cu3g1I6Jk4h/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/Cu3g1I6Jk4h/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>

        <EmbedContainer>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/Cu8p4xWpW3-/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/p/Cu8p4xWpW3-/?utm_source=ig_embed&amp;utm_campaign=loading"></a>
          </blockquote>
        </EmbedContainer>
        {/* Add more Instagram embeds here */}
      </Wrapper>
    </Container>
  );
};

export default Gallery;

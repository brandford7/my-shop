import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet eget nibh dignissim gravida. Praesent convallis
            metus a purus rutrum consectetur in quis ipsum. Sed rutrum enim sit
            amet commodo dapibus. Proin id posuere libero. Quisque lobortis urna
            sit amet est congue, non tempor diam dictum. Integer venenatis et
            massa quis mollis. Morbi euismod turpis purus, nec dictum lectus
            hendrerit vehicula. Praesent eleifend cursus tincidunt. Nullam
            feugiat sem et velit faucibus consequat. Sed posuere blandit nulla
            id aliquet. Sed vel sapien ex. Etiam id pellentesque tellus, sed
            posuere ante. Proin id vulputate urna. Sed aliquet dui est. Ut in
            maximus nunc. Duis eget eleifend purus, non pellentesque turpis.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

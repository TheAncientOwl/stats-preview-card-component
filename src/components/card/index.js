import React from 'react';
import {
  CardContainer,
  CardImageWrapper,
  CardContent,
  CardImage,
  Header,
  Description,
  DetailsContainer,
  Detail,
  DetailTitle,
  DetailSubtitle,
  Accent,
} from './CardElements';
import Image from '../../images/image-header-desktop.jpg';

export default function Card() {
  return (
    <CardContainer>
      <CardContent>
        <Header>
          Get <Accent>insights</Accent> that help your business grow.
        </Header>
        <Description>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and
          overall efficiency.
        </Description>
        <DetailsContainer>
          {[
            { title: '10k+', subtitle: 'companies' },
            { title: '314', subtitle: 'templates' },
            { title: '12M+', subtitle: 'queries' },
          ].map((item, index) => (
            <Detail key={index} onClick={() => alert('Hello there!')}>
              <DetailTitle>{item.title}</DetailTitle>
              <DetailSubtitle>{item.subtitle}</DetailSubtitle>
            </Detail>
          ))}
        </DetailsContainer>
      </CardContent>
      <CardImageWrapper>
        <CardImage src={Image} alt='people coding' />
      </CardImageWrapper>
    </CardContainer>
  );
}

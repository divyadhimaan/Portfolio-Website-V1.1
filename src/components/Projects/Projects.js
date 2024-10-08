import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    {/* <SectionDivider /> */}
    <SectionTitle main>Featured Work</SectionTitle>
    <SectionText>Coming Soon...</SectionText>
    
    {/* <GridContainer >
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id} >
          <Img src={image}/>
          <TitleContent>
            <headerThree title>{title}</headerThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Demo</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer> */}
  </Section>
);

export default Projects;
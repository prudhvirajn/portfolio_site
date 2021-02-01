import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Activities">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          line2={project.line2}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;

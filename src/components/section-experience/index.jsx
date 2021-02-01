import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          line2={item.line2}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;

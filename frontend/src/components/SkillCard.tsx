import React from 'react';
import '../styles/SkillCard.css';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <i className={`skill-icon ${icon}`}></i>
        <h3>{title}</h3>
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
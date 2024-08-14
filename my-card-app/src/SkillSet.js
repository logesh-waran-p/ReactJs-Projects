import React from "react";

export const SkillSet = (props) => {
  return (
    <div className="skill-list" style={{ backgroundColor: props.color }}>
      <span className="skill">{props.skill}</span>
    </div>
  );
};

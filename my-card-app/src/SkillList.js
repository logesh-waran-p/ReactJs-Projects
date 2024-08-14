import React from "react";
import { SkillSet } from "./SkillSet";
export const SkillList = () => {
  return (
    <div className="skill-list">
      <SkillSet skill="HTML + CSS" color="red" />
      <SkillSet skill="JavaScript" color="blue" />
      <SkillSet skill="React" color="orange" />
      <SkillSet skill="Java" color="violet" />
      <SkillSet skill="Spring Boot" color="aqua" />
      <SkillSet skill="Spring Data JPA" color="gray" />
    </div>
  );
};

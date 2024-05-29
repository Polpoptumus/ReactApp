//Faoziyah Bankole
import React, { useState } from "react";
import "./Team.css"; //team css
import lady from "./images/lady.png";
import man from "./images/man.jpg";
import man1 from "./images/man1.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Jane Smith",
    role: "CEO",
    description:
      "Visionary leader driving growth with strategic insight and collaboration, fostering company success and innovation.",
    img: lady,
    socialMedia: {
      facebook: "https://facebook.com/JaneSmith",
      twitter: "https://twitter.com/JaneSmith",
      linkedin: "https://www.linkedin.com/in/JaneSmith",
    },
  },
  {
    id: 2,
    name: "Scot Reni",
    role: "CTO",
    description:
      "Tech strategist leading innovation and development, driving cutting-edge solutions for company growth and success.",
    img: man,
    socialMedia: {
      facebook: "https://facebook.com/Maryreni",
      twitter: "https://twitter.com/Maryreni",
      linkedin: "https://www.linkedin.com/in/Maryreni",
    },
  },
  {
    id: 3,
    name: "Javid Johnson",
    role: "Designer",
    description:
      "Creative visionary shaping visual identity, elevating brand aesthetics, and crafting engaging user experiences",
    img: man1,
    socialMedia: {
      facebook: "https://facebook.com/javidjohnson",
      twitter: "https://twitter.com/javidjohnson",
      linkedin: "https://www.linkedin.com/in/javidjohnson",
    },
  },
];

const Team = () => {
  const [visibleMember, setVisibleMember] = useState(null);

  const toggleDetails = (id) => {
    setVisibleMember(visibleMember === id ? null : id);
  };

  return (
    <div className="team-section">
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-description">
        We are a passionate team dedicated to excellence and innovation.
      </p>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img
              src={member.img}
              alt={`${member.name}`}
              className="team-image"
            />
            <div className="team-info">
              <h2 className="team-name">{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <button onClick={() => toggleDetails(member.id)}>
                {visibleMember === member.id ? "Hide Details" : "Show Details"}
              </button>
              {visibleMember === member.id && (
                <>
                  <p className="team-description">{member.description}</p>
                  <div className="team-social-media">
                    <a
                      href={member.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      Facebook
                    </a>
                    <a
                      href={member.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      Twitter
                    </a>
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      LinkedIn
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

import React from "react";
// import styled from '@emotion/styled';

// const StyledSkill = styled.ul`
//     list-style: none;
//     text-align: center;
//     padding: 0;
// `;

type Skills = {
    id: number,
    title: string,
    votes: number,
}

type Props = {
    skills: Skills[];
}

export default function Skill({ skills }: Props) {
    return (
        <ul
            style={{ 
                listStyle: "none",
                textAlign: "center",
                padding: "0"
            }}
        >
            {skills.map((s) => (
                <li key={s.id}>{s.title} - <span className="votes">{s.votes}</span></li>
            ))}
        </ul>
    );
}
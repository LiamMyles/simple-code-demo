import React from "react"

import { Person } from "../interfaces/GhibliApi"

import { CardWrappingDiv } from "../shared-styles/Card"

export const PersonCard: React.FC<{ person: Person }> = ({
  person: { age, eye_color, gender, hair_color, name },
}) => {
  return (
    <CardWrappingDiv>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Hair Colour:</strong> {hair_color}
      </p>
      <p>
        <strong>Eye Colour:</strong> {eye_color}
      </p>
    </CardWrappingDiv>
  )
}

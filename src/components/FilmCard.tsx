import React from "react"

import { Film } from "../interfaces/GhibliApi"

import { CardWrappingDiv } from "../shared-styles/Card"

export const FilmCard: React.FC<{ film: Film }> = ({
  film: { director, producer, release_date, rt_score, title },
}) => {
  return (
    <CardWrappingDiv>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Director:</strong> {director}
      </p>
      <p>
        <strong>Producer:</strong> {producer}
      </p>
      <p>
        <strong>Release Date:</strong> {release_date}
      </p>
      <p>
        <strong>Score:</strong> {rt_score}
      </p>
    </CardWrappingDiv>
  )
}

import React, { useState } from "react"
import styled from "styled-components"

import { FilmCard } from "../components/FilmCard"
import { PersonCard } from "../components/PersonCard"

import { Film, Person } from "../interfaces/GhibliApi"

type LoadingStates = "DORMANT" | "LOADING" | "LOADED" | "ERROR"

const CategorySelectionWrappingDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`

const CardGridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CategorySelection: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<"FILM" | "PEOPLE">(
    "FILM"
  )

  const [films, setFilms] = useState<Film[] | null>(null)
  const [people, setPeople] = useState<Person[] | null>(null)
  const [loadingState, setLoadingState] = useState<LoadingStates>("DORMANT")

  const requestCategory = async (category: "films" | "people") => {
    setLoadingState("LOADING")
    const ghibliResponse = await fetch(
      `https://ghibliapi.herokuapp.com/${category}`
    ).catch((err) => {
      setLoadingState("ERROR")
      throw new Error(err)
    })
    const ghibliJson = await ghibliResponse.json()

    return ghibliJson
  }

  return (
    <CategorySelectionWrappingDiv>
      <p>pick an option</p>
      <button
        disabled={loadingState === "LOADING"}
        type="button"
        onClick={async () => {
          if (films === null) {
            const filmsJson = await requestCategory("films")
            setFilms(filmsJson)
          }
          setLoadingState("LOADED")
          setCurrentCategory("FILM")
        }}
      >
        Film
      </button>
      <button
        disabled={loadingState === "LOADING"}
        type="button"
        onClick={async () => {
          if (people === null) {
            const peopleJson = await requestCategory("people")
            setPeople(peopleJson)
          }
          setLoadingState("LOADED")
          setCurrentCategory("PEOPLE")
        }}
      >
        Person
      </button>
      <CardGridDiv>
        {currentCategory === "FILM" &&
          films?.map((film) => {
            return <FilmCard film={film} key={film.id} />
          })}
        {currentCategory === "PEOPLE" &&
          people?.map((person) => {
            return <PersonCard person={person} key={person.id} />
          })}
      </CardGridDiv>
    </CategorySelectionWrappingDiv>
  )
}

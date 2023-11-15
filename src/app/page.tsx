'use client'

import { Suspense } from 'react'
import { useFormState } from 'react-dom'
import { gql, useQuery } from 'urql'

import { action } from './action'

const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemons(limit: 10, skip: 0) {
      id
      name
    }
  }
`

function Poke() {
  const [result] = useQuery({
    query: POKEMONS_QUERY,
    variables: {},
  })

  return (
    result.data && (
      <ul>
        {result.data.pokemons.map((pokemon: any) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    )
  )
}

export default function Home() {
  const [state, formAction] = useFormState(action, 0)

  return (
    <main>
      <form>
        <div>{state}</div>
        <div>
          <input className="text-black" name="name" type="text" />
        </div>
        <div>
          <button formAction={formAction}>Send</button>
        </div>
      </form>
      <Suspense fallback={<>loading...</>}>
        <Poke />
      </Suspense>
    </main>
  )
}

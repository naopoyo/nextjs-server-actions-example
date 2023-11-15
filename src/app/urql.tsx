'use client'

import { PropsWithChildren } from 'react'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql'

const client = new Client({
  url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
  exchanges: [cacheExchange, fetchExchange],
  suspense: true,
})

interface Props extends PropsWithChildren {}

export function Urql({ children }: Props) {
  return <Provider value={client}>{children}</Provider>
}

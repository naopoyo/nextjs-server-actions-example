'use client'

import { useFormState } from 'react-dom'

import { action } from './action'

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
    </main>
  )
}

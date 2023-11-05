'use server'

export async function action(previousState: number, data: FormData) {
  console.log('increment: ' + previousState)
  console.log(data.get('name'))

  return previousState + 1
}

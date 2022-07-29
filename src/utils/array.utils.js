import { isNil } from './others.utils'

export const chunkArr = (arr, chunkSize) => {
  if (!chunkSize) return arr
  const newArr = []
  const copiedArr = [...arr]

  while (copiedArr.length > 0) newArr.push(copiedArr.splice(0, chunkSize))

  return newArr
}

export const range = (start, end, excluders = [false, false]) => {
  const arr = []

  if (isNil(end)) for (let i = 0; i <= start; i++) arr.push(i)
  else for (let i = start; i <= end; i++) arr.push(i)

  if (excluders.includes(true))
    return arr.slice(
      excluders[0] ? 1 : 0,
      excluders[1] ? arr.length - 1 : arr.length
    )

  return arr
}

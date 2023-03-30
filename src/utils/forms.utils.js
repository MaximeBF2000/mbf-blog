import { useState } from 'react'

export const useInput = (defaultValue = '') => {
  const [input, setInput] = useState(defaultValue)

  const props = { value: input, onChange: evt => setInput(evt.target.value) }

  return [input, props]
}

import { useState } from "react"

export const useNewsLetter = () => {
  const [message, setMessage] = useState('')

  const subcribeToNewsLetter = ({ email, tags }) => {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({ email, tags }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })
  
    const { error } = await res.json()
  
    if (error) {
      setMessage(error)
      return
    }

    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }

  return [subcribeToNewsLetter, message]
}
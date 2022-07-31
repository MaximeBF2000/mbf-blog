import { useState } from 'react'

const formClassBasedOnState = {
  not_registered: 'bg-gray-700',
  error: 'bg-red-500 flex justify-center items-center',
  success: 'bg-green-600 flex justify-center items-center'
}

export const SubscribeToNewsLetter = ({ className }) => {
  const [state, setState] = useState('not_registered') // [not_registered, error, success]

  const handleSubmit = evt => {
    evt.preventDefault()
    setState('success')
  }

  return (
    <form
      className={`rounded border border-gray-600 p-4 ${formClassBasedOnState[state]} mb-24 ${className}`}
      onSubmit={handleSubmit}
    >
      {state === 'not_registered' && (
        <>
          <h2 className="text-2xl font-medium mb-2">
            Subscribe to my newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Hear about my latest discoveries and thoughts on tech and digital
            businesses. Unsub in a click
          </p>
          <div className="flex gap-3 flex-wrap">
            <input
              placeholder="Firstname"
              type="text"
              className="flex-1 p-2 rounded outline-none ring-primary text-gray-900 focus-within:ring-2 focus:ring-2"
              // required
            />
            <input
              placeholder="Email"
              type="email"
              className="flex-1 p-2 rounded outline-none ring-primary text-gray-900 focus-within:ring-2 focus:ring-2"
              // required
            />
            <button className="rounded bg-gray-900 px-6 py-2 transition-all hover:bg-secondary focus:bg-secondary">
              💌 Subscribe
            </button>
          </div>
        </>
      )}
      {state === 'success' && (
        <>
          <p className="text-lg">
            Success 🎉 You've been registered. Check your email for a little
            surprise ;)
          </p>
        </>
      )}
      {state === 'error' && (
        <>
          <p className="text-lg">
            There has been an error when registering your email, you can retry
            in a few minutes.
          </p>
        </>
      )}
    </form>
  )
}

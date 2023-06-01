import { useEffect, useState } from 'react'
import { useInput } from 'src/utils/forms.utils'
import { isValidEmail } from 'src/utils/string.utils'
import { Loader } from './Loader.component'

const formClassBasedOnState = {
  not_registered: 'bg-gray-700',
  error: 'bg-red-500 flex justify-center items-center',
  success: 'bg-green-600 flex justify-center items-center'
}

export const SubscribeToNewsLetter = ({ className }) => {
  const [state, setState] = useState('not_registered') // [not_registered, error, success]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [firstName, firstNameInputProps] = useInput('')
  const [email, emailInputProps] = useInput('')

  useEffect(() => {
    if (state === 'error') {
      setTimeout(() => {
        setError(null)
        setState('not_registered')
      }, 2000)
    }
  }, [state])

  const handleSubmit = async evt => {
    evt.preventDefault()

    if (!isValidEmail(email)) {
      setState('error')
      setError('Please provide a valid email')
      return
    }

    try {
      setLoading(true)
      const { error } = await fetch('/api/subscribe_mail', {
        method: 'POST',
        body: JSON.stringify({ firstName, email }),
        headers: { 'Content-type': 'application/json' }
      }).then(res => res.json())

      setLoading(false)

      if (error) {
        setState('error')
        setError(error)
        return
      }

      setState('success')
    } catch (err) {
      setState('error')
      setError(
        'There has been an error when registering your email, you can retry in a few minutes.'
      )
    }
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
          <p className="text-gray-300">
            Hear about my latest discoveries and thoughts on tech and digital
            businesses. Unsub in a click.
          </p>
          <p className="text-gray-300 mb-8">
            Or you can contact by email by{' '}
            <a
              href="mailto:maxime.bounaas@gmail.com"
              target="_blank"
              className="text-white underline"
            >
              clicking here
            </a>
            .
          </p>
          <div className="flex gap-3 flex-wrap">
            <input
              placeholder="Firstname"
              type="text"
              className="flex-1 p-2 rounded outline-none text-gray-900 focus:focus-within:outline focus:focus-within:outline-primary/80"
              required
              {...firstNameInputProps}
            />
            <input
              placeholder="Email"
              type="email"
              className="flex-1 p-2 rounded outline-none text-gray-900 focus:focus-within:outline focus:focus-within:outline-primary/80"
              required
              {...emailInputProps}
            />
            <button
              className="rounded bg-gray-900 px-6 py-2 transition-all hover:bg-primary focus:bg-primary flex gap-3 items-center"
              type="submit"
            >
              {loading && <Loader className="text-white w-5 h-5" />}
              <span>{!loading && '💌'} Subscribe</span>
            </button>
          </div>
        </>
      )}
      {state === 'success' && (
        <>
          <p className="text-lg">
            Success 🎉 You've been registered. See you soon in your mails :)
          </p>
        </>
      )}
      {state === 'error' && (
        <>
          <p className="text-lg">{error}</p>
        </>
      )}
    </form>
  )
}

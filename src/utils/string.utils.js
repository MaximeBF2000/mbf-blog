export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function capitalize(str) {
  if (!str || !str[0] || typeof str !== 'string') return str

  return str[0].toUpperCase() + str.slice(1)
}

import { promises as fs } from 'node:fs'
import { resolve as resolvePath } from 'path'
import { csvContentToJsonObject } from 'src/BackendFunctions/csvContentToJsonObject'

export default async function handleMailSubscription(req, res) {
  if (req.method !== 'POST')
    throw new Error('/api/subcribe_mail only accept POST requests')

  const { email, firstName } = req.body

  const userDbPath = resolvePath(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'user.db.csv'
  )

  const csvContent = await fs.readFile(userDbPath, 'utf-8')
  const users = csvContentToJsonObject(csvContent)

  const userAlreadyExists = users.find(user => user.email === email)

  if (userAlreadyExists)
    return res.status(409).json({ error: 'User already exists.', user: null })

  await fs.appendFile(userDbPath, `${email},${firstName}\n`, 'utf-8')

  return res.status(201).json({ error: null, user: { email, firstName } })
}

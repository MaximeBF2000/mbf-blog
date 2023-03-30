import { prisma } from 'prisma/client'

export default async function handleMailSubscription(req, res) {
  if (req.method !== 'POST')
    throw new Error('/api/subcribe_mail only accept POST requests')

  const { email, firstName } = req.body

  const alreadyExists = await prisma.user.findFirst({
    select: { id: true },
    where: { email }
  })

  if (alreadyExists)
    return res.status(409).json({ error: 'User already exists.', user: null })

  const user = await prisma.user.create({
    data: {
      email,
      firstname: firstName
    }
  })

  return res.status(201).json({ error: null, user })
}

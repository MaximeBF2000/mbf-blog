import { AirtableTable } from 'src/utils/airtable'
import { Slack } from 'src/utils/slack'

export default async function handleMailSubscription(req, res) {
  if (req.method !== 'POST')
    throw new Error('/api/subcribe_mail only accept POST requests')

  try {
    const { email, firstName } = req.body

    const usersTable = new AirtableTable('users')

    const records = await usersTable.getRecords()
    const userAlreadyExists = records.find(record => record.email === email)

    if (userAlreadyExists)
      return res.status(409).json({ error: 'User already exists.', user: null })

    await usersTable.addRecord({
      email,
      firstname: firstName
    })

    await Slack.notify(
      `✉️ New User Email @maxime-ferret.vercel.app\nEmail: ${email}\nFirstname: ${firstName}\nCheck database at: https://airtable.com/appWHAstYwOjG9w7H/tblFoi8phsESpF3dy/viw3546PGSFDV9QgO?blocks=hide`
    )

    return res.status(201).json({ error: null, user: { email, firstName } })
  } catch (error) {
    console.error('[api/subscribe_mail]: ', error)

    res.status(500).json({
      error:
        'There has been an error registering you. Please retry in a few minutes or contact me.',
      user: null
    })
  }
}

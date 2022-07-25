import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export default async function handleMailSubscription(req, res) {
  const { email, tags } = req.body

  if (!email) return res.status(400).json({ error: 'Email is required' })

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      tags
    })

    return res.status(201).json({ success: true, error: '' })
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: error.message || error.toString() })
  }
}

class SlackBase {
  async notify(text) {
    try {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      })

      console.log(
        'Message sent to slack to webhook: ',
        process.env.SLACK_WEBHOOK_URL
      )
    } catch (error) {
      console.error('[slack/notify]: ', error)
    }
  }
}

export const Slack = new SlackBase()

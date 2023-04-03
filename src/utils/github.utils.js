import profile from '../../profile.json'

const GITHUB_API_BASE_URL = 'https://api.github.com/users'

export const getNumberOfGithubRepositories = async () => {
  const response = await fetch(
    `${GITHUB_API_BASE_URL}/${profile.socials.githubUsername}`
  )
  const res = await response.json()

  return res?.public_repos
}

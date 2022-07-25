const GITHUB_API_BASE_URL = 'https://api.github.com/users'

export const getNumberOfGithubRepositories = async () => {
  const response = await fetch(
    `${GITHUB_API_BASE_URL}/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  )
  const res = await response.json()

  return res?.public_repos
}

import profile from '../../../profile.json'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { useMediaQuery } from 'src/utils/useMediaQuery.hook'

const SocialIcon = ({ icon: Icon, name, link }) => (
  <a
    href={link}
    target="_blank"
    className="flex-1 sm:border rounded p-4 flex flex-col items-center justify-center text-gray-300 border-gray-300 transition-all hover:text-primary hover:border-primary focus:text-primary focus:border-primary text-center"
  >
    <Icon className="w-10 h-10 mb-2" />
    <p className="text-lg hidden sm:block">{name}</p>
  </a>
)

export const HomeSocials = ({ numberOfGithubRepos }) => {
  const isSmallScreen = useMediaQuery(800, true)

  return (
    <section className="mb-24">
      <div className="text-3xl font-medium mb-8">
        Find me on those plateforms
      </div>
      <div className="flex gap-5 cursor-pointer">
        <SocialIcon
          name={`Github${
            numberOfGithubRepos && !isSmallScreen
              ? ` (${numberOfGithubRepos} public repos)`
              : ''
          }`}
          icon={BsGithub}
          link={profile.socials.github}
        />
        <SocialIcon
          name="LinkedIn"
          icon={BsLinkedin}
          link={profile.socials.linkedin}
        />
        <SocialIcon
          name="Twitter"
          icon={BsTwitter}
          link={profile.socials.twitter}
        />
      </div>
    </section>
  )
}

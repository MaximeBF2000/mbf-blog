import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { useMediaQuery } from 'src/utils/useMediaQuery.hook'

const SocialIcon = ({ icon: Icon, name }) => (
  <div className="flex-1 border rounded p-4 flex flex-col items-center justify-center text-gray-300 border-gray-300 transition-all hover:text-primary hover:border-primary focus:text-primary focus:border-primary text-center">
    <Icon className="w-10 h-10 mb-2" />
    <p className="text-lg">{name}</p>
  </div>
)

export const HomeSocials = ({ numberOfGithubRepos }) => {
  return (
    <section className="mb-24">
      <div className="text-3xl font-medium mb-8">
        Find me on those plateforms
      </div>
      <div className="flex gap-5 cursor-pointer">
        <SocialIcon
          name={`Github${
            numberOfGithubRepos ? ` (${numberOfGithubRepos} public repos)` : ''
          }`}
          icon={BsGithub}
        />
        <SocialIcon name="LinkedIn" icon={BsLinkedin} />
        <SocialIcon name="Instagram" icon={BsInstagram} />
      </div>
    </section>
  )
}

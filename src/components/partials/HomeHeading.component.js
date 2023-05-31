import Image from 'next/image'
import Link from 'next/link'

export const HomeHeading = () => {
  return (
    <section>
      <div className="flex items-center justify-between gap-8 my-16">
        <div className="content">
          <h1 className="text-5xl font-extrabold mb-2">Maxime FERRET</h1>
          <p className="text-2xl mb-8">Fullstack software engineer</p>
          <p className="text-gray-300 leading-6">
            I ship efficient software that really benefits the users 🚀 <br />
            React ⚛️ Node ✨
          </p>
          <Link href="https://drive.google.com/file/d/180DChGiKj2Lem-zvExJ0n8fmpM7cSiJd/view?usp=sharing">
            <a
              className="block mt-4 underline underline-offset-2"
              target="_blank"
            >
              Read my CV
            </a>
          </Link>
        </div>
        <Image
          src="/assets/profilPic.jpeg"
          width={200}
          height={200}
          className="rounded-full"
          alt="Profile picture of Maxime FERRET"
        />
      </div>
    </section>
  )
}

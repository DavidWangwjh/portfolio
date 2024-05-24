import Image from 'next/image'
import { CONTACT_INFO } from '@/constants'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-6 py-10 md:gap-20 md:flex-row min-h-dvh max-h-[1024px] items-center justify-center">
      <Image 
          src="/assets/profile.jpg"
          alt="profile picture"
          width={300}
          height={300}
          className="block h-auto w-4/5 rounded-full md:w-2/5 border-8"
      />
      <div className='flex flex-col items-center md:items-start'>
        <h1 className="bold-32 sm:bold-36 md:bold-48 lg:bold-52">{"I'M DAVID WANG"}</h1>
        <p className="regular-16 lg:regular-22 pt-4 pb-2">
           Software Engineer, Web Developer, and App Developer
        </p>
        <p className="regular-16 lg:regular-22 pb-8">
           2023 UCSD CS Graduate
        </p>
        <ul className="flex flex-row gap-6">
          {CONTACT_INFO.map((link) => (
              <Link href={link.link} key={link.meta} target="_blank" rel="noopener noreferrer nofollow" className="cursor-none flex flex-row gap-2 items-center content-center w-max regular-16 group clickable">
                <Image 
                  src={link.image}
                  alt="camp"
                  width={30}
                  height={30}
                  className="transition-all group-hover:w-9 clickable"
                />
                {/* <span className='transition-all group-hover:font-bold hidden md:block clickable'>
                  {link.metaInfo}
                </span> */}
              </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
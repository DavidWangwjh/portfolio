import Image from 'next/image'
import { contactInfo } from '@/constants'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-16 py-10 md:gap-20 md:flex-row items-center">
      <Image 
          src="/assets/profile.jpg"
          alt="profile picture"
          width={300}
          height={300}
          className="inline-block h-auto w-3/5 rounded-full md:w-2/5 border-8"
      />
      <div className='flex flex-col items-center md:items-start'>
        <h1 className="bold-40 md:bold-52 lg:bold-64">{"I'M DAVID WANG"}</h1>
        <p className="regular-20 lg:regular-24 pt-4 pb-8">
           Software Engineer, Web Developer, and App Developer
        </p>
        <ul className="flex flex-row gap-6 md:flex-col">
          {contactInfo.map((link) => (
              <Link href={link.link} key={link.meta} target="_blank" rel="noopener noreferrer nofollow" className="flex flex-row gap-2 items-center content-center w-max regular-16 group">
                <Image 
                  src={link.image}
                  alt="camp"
                  width={30}
                  height={30}
                  className="cursor-pointer transition-all group-hover:w-9"
                />
                <span className='cursor-pointer transition-all group-hover:font-bold hidden md:block'>
                  {link.metaInfo}
                </span>
              </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
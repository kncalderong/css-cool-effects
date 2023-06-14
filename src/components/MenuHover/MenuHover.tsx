
import { useEffect } from 'react'
import Link from './Link'


const MenuHover = () => {
  useEffect(() => {
    for (const link of document.getElementsByClassName("link") as HTMLCollectionOf<HTMLElement>) {
      link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 80,
          percentRange = 20,
          adjustablePercent = percentRange * decimal;

        const lightBluePercent = basePercent + adjustablePercent;

        link.style.setProperty("--light-blue-percent", `${lightBluePercent}%`);
      }
    }
  }, [])

  return (
    <section className='w-100 bg-dark-magic-background h-auto sm:h-screen flex flex-col justify-center items-center'>
      <Link text='work' />
      <Link text='studio' />
      <Link text='contact' />
    </section>
  )
}

export default MenuHover

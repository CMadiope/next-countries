import Head from "next/head";
import { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rest-Countries</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-very-light-gray  dark:bg-dark-blue'>
        <section className='min-h-screen'>
          <nav className='bg-white py-10 mb-12 flex justify-between dark:bg-light-blue'>
            <h3 className='text-black text-2xl pl-24 dark:text-white cursor-pointer'>
              Where in the world?
            </h3>
            <button className='text-black pr-24 flex gap-3 dark:text-white hover:scale-110' onClick={()=> setDarkMode(!darkMode)}>
              {darkMode ? (
                <BsFillMoonFill className='mt-1' />
              ) : (
                <BsMoon className='mt-1' />
              )}
              Dark Mode
            </button>
          </nav>
        </section>
      </main>
    </div>
  );
}

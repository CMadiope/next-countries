import Head from "next/head";
import { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import germany from "../public/germany.png";

const options = ["Africa", "America", "Asia"];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

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
            <button
              className='text-black pr-24 flex gap-3 dark:text-white hover:scale-110'
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <BsFillMoonFill className='mt-1' />
              ) : (
                <BsMoon className='mt-1' />
              )}
              Dark Mode
            </button>
          </nav>
          <div className='flex justify-between p-24'>
            <div className='bg-white flex dark:bg-light-blue p-5'>
              <BsSearch className='text-dark-gray dark:text-white mr-2' />
              <input
                className='bg-transparent text-sm outline-none text-dark-gray dark:text-white'
                type='text'
                placeholder='Search for a country'
              />
            </div>
            <div className='bg-white dark:bg-light-blue w-37 min-w-fit'>
              <div className='flex cursor-pointer pb-5' onClick={menuToggle}>
                <h3 className='text-dark-gray text-sm pt-5 pl-5 pr-5'>
                  {selectedOption || " Filter by Region"}
                </h3>
                <AiOutlineDown className='text-dark-gray ml-2 mt-6 mr-5' />
              </div>
              {isOpen && (
                <div className='absolute'>
                  <ul className='p-0 m-0 text-sm box-border '>
                    {options.map((option) => (
                      <li
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                        className='text-dark-gray mb-2 min-w-fit cursor-pointer'
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Cards */}

          <div className='grid gap-4 grid-cols-4 pl-24 pr-24'>
            <div className='bg-white dark:bg-light-blue h-80 w-60 rounded-md cursor-pointer hover:scale-110'>
              <Image src={germany} alt='flag' />
              <div className='pl-8 mt-3'>
                <h4 className='text-lg dark:text-white pb-3'>Germany</h4>
                <div className='flex pb-1'>
                  <span className='font-medium text-sm dark:text-white'>
                    Population:
                  </span>
                  <span className='text-sm dark:text-white font-thin pl-2'>
                    81,700,590
                  </span>
                </div>
                <div className='flex pb-1'>
                  <span className='font-medium text-sm dark:text-white'>
                    Region:
                  </span>
                  <span className='text-sm dark:text-white font-thin pl-2'>
                    Europe
                  </span>
                </div>
                <div className='flex pb-1'>
                  <span className='font-medium text-sm dark:text-white'>
                    Capital:
                  </span>
                  <span className='text-sm dark:text-white font-thin pl-2'>
                    Berlin
                  </span>
                </div>

                <span></span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

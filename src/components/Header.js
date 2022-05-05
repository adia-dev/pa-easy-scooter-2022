import React from 'react'

const Header = () => {

    const styles = {
        li: 'h-full text-gray-600 cursor-pointer  hover:text-orange-500 hover:scale-110 transition-all ease-in-out duration-250 '
    }

    return (
        <header className='h-[80px] w-screen flex items-center justify-between px-5'>
            <div className="">
                Easy Scooter
            </div>
            <nav>
                <ul className='flex space-x-3'>
                    <li className={styles.li + "font-bold text-green-500 underline "}>Accueil</li>
                    <li className={styles.li}>Catalogue</li>
                    <li className={styles.li}>Map/Météo</li>
                    <li className={styles.li}>News</li>
                    <li className={styles.li}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
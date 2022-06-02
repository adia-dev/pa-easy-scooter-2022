import { useContext, useEffect, useState } from 'react';
import { BiBell, BiLogOut } from 'react-icons/bi';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { MdElectricScooter } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import menus from '../assets/menus';
import { AuthContext } from '../core/AuthProvider';
import { auth } from '../core/base';
import DropdownMenu from './dropdown/DropdownMenu';

const Header = () => {

    const [menu, setMenu] = useState(menus.unauthenticated)
    const [dropdownOpened, setDropdownOpened] = useState(true)

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {

        if (!currentUser)
            setMenu(menus.unauthenticated)
        else
            setMenu(menus.authenticated)

        return () => {

        }
    }, [currentUser])


    const navigate = useNavigate();

    const styles = {
        li: 'h-full text-gray-600 cursor-pointer  hover:text-orange-500 hover:scale-110 transition-all ease-in-out duration-250 '
    }


    const handleLogOut = () => {
        auth.signOut();
    }


    return (
        <header className='h-[80px] relative w-screen flex items-center px-5 text-black'>
            <div className="absolute left-5 lowercase font-bold">
                Easy Scooter
            </div>
            <nav className='w-full flex justify-center'>
                <ul className='flex w-1/2 justify-around'>
                    {
                        menu.map((menu, i) =>
                            <li key={"header-menu-" + i} className="">
                                <Link to={menu.path}>
                                    {<menu.icon size={32} />}
                                </Link>
                            </li>
                        )
                    }
                    {
                        !!currentUser &&
                        <li onClick={handleLogOut} className="cursor-pointer">
                            {<BiLogOut size={32} />}
                        </li>

                    }

                    {/* <li onClick={() => navigate("/")} className={styles.li + "font-bold text-green-500 underline "}>Accueil</li>
                    <li onClick={() => navigate("/catalogue")} className={styles.li}>Catalogue</li>
                    <li className={styles.li}>Map/Météo</li>
                    <li className={styles.li}>News</li>
                    <li className={styles.li}>Contact</li>
                    <li className={styles.li}>Profile</li>
                    <li onClick={() => navigate("/dashboard")} className={styles.li}>Dashboard (TEMP)</li>
                    <li onClick={() => navigate("/stripe")} className={styles.li}>Stripe</li>
                    <li className={styles.li}>
                        <button onClick={handleLogOut}>Log Out</button>
                    </li> */}
                </ul>
            </nav>
            {
                !!currentUser &&
                (
                    <div div className="absolute right-5 flex items-center h-full space-x-2">
                        <div className="flex items-center h-[50px] space-x-3 py-2 pl-1 pr-3 bg-orange-200 rounded-full">
                            <img className='h-full rounded-full' src={"https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/106476575_1010938885989869_2837272586752487393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9zka7JjJZR8AX_HRM_c&_nc_oc=AQkIZBBfd0dCjVmGVbSJByIaLHzmMfKswyH9NwscS8AGWHOuk7Kuia2rCmGpcaayw8k&_nc_ht=scontent.fcdg4-1.fna&oh=00_AT8LiipsxyaoE-4SXYj7hDKuGZuRaFoNhGHqAukP92vuGA&oe=62B44EC4"} alt="" />
                            <span className='font-semibold text-orange-800'>{currentUser.data.display_name}</span>
                        </div>
                        <div className="p-3 bg-orange-100 rounded-full text-orange-800 cursor-pointer brightness-95 hover:brightness-100">
                            <MdElectricScooter size={24} />
                        </div>
                        <div className="p-3 bg-orange-100 rounded-full text-orange-800 cursor-pointer brightness-95 hover:brightness-100">
                            <BiBell size={24} />
                        </div>
                        <div onClick={() => setDropdownOpened(!dropdownOpened)} className="relative p-3 bg-orange-100 rounded-full text-orange-800 cursor-pointer brightness-95 hover:brightness-100">
                            <BsFillCaretDownFill size={24} />
                        </div>

                        {
                            dropdownOpened &&
                            <DropdownMenu />
                        }
                    </div>
                )
            }

        </header >
    )
}

export default Header
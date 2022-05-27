import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight, FaCog, FaMoon, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = () => {
    const { t } = useTranslation();

    const [activeMenu, setActiveMenu] = useState('main')

    const DropdownItem = ({ redirectTo, children, leftIcon, rightIcon }) => {

        return (
            <Link className="w-full flex items-center relative py-2 pr-5 space-x-4 hover:bg-gray-700 transition-all duration-150 ease-in-out rounded-lg" to={redirectTo}>
                <span className="w-10 aspect-square rounded-full bg-gray-700 flex justify-center items-center">{leftIcon}</span>
                <div className="flex-1 text-sm whitespace-nowrap">
                    {children}
                </div>
                <span>{rightIcon}</span>
            </Link>
        )
    }

    return (
        <div className="absolute top-full right-0 bg-gray-900 text-white w-[375px]  rounded-xl p-3 border z-50 overflow-hidden">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} >

                <div className="flex cursor-pointer hover:bg-gray-700 px-3 rounded-lg items-center space-x-3  pt-1 pb-2 mb-3">
                    <img className="w-16 aspect-square rounded-full" src="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/106476575_1010938885989869_2837272586752487393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9zka7JjJZR8AX_HRM_c&_nc_oc=AQkIZBBfd0dCjVmGVbSJByIaLHzmMfKswyH9NwscS8AGWHOuk7Kuia2rCmGpcaayw8k&_nc_ht=scontent.fcdg4-1.fna&oh=00_AT8LiipsxyaoE-4SXYj7hDKuGZuRaFoNhGHqAukP92vuGA&oe=62B44EC4" alt="" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Belze Bvb</span>
                        <span className="text-xs text-gray-300">{t('Go to your profiel')}</span>
                    </div>
                </div>
                <div className="border-b border-gray-500 w-full mb-3"></div>
                <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Paramètres et confidentialité</DropdownItem>
                <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Help and assistance')}</DropdownItem>
                <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Display')}</DropdownItem>
                <DropdownItem redirectTo="/" leftIcon={<FaSignOutAlt />} rightIcon={<FaChevronRight />}>{t('Log out')}</DropdownItem>
                {/* <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem> */}
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
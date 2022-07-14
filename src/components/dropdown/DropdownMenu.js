import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaChevronRight, FaCog, FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../../core/AuthProvider";
import './_Dropdown.css';

const DropdownMenu = () => {
    const { t } = useTranslation();

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height + 25);
    }

    const { currentUser } = useContext(AuthContext)

    console.log(currentUser)


    const DropdownItem = ({ redirectTo = "#", goToMenu, children, leftIcon, rightIcon }) => {

        return (
            <Link onClick={() => goToMenu && setActiveMenu(goToMenu)} className="w-full flex items-center relative py-2 pr-5 space-x-4 hover:bg-orange-700 transition-all duration-150 ease-in-out rounded-lg" to={redirectTo}>
                <span className="w-10 aspect-square rounded-full bg-orange-700 flex justify-center items-center">{leftIcon}</span>
                <div className="flex-1 text-sm whitespace-nowrap">
                    {children}
                </div>
                <span>{rightIcon}</span>
            </Link>
        )
    }

    return (
        <div style={{ height: menuHeight, width: 375 }} className="transition-all ease-in-out duration-250 absolute top-full right-0 bg-orange-800 text-white rounded-xl p-3 border z-50 overflow-hidden">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="dropdown-menu--primary" onEnter={calcHeight}>
                <div className="dropdown-menu">
                    <div className="flex cursor-pointer hover:bg-orange-700 px-3 rounded-lg items-center space-x-3  pt-1 pb-2 mb-3">
                        <img className="w-16 aspect-square rounded-full" src={currentUser.data.pfp_path} alt="" />
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">{currentUser.data.display_name ?? "undefined"}</span>
                            <span className="text-xs text-gray-300">{t('Go to your profiel')}</span>
                        </div>
                    </div>
                    <div className="border-b border-orange-500 w-full mb-3"></div>
                    <DropdownItem goToMenu={"settings"} redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Paramètres et confidentialité</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Help and assistance')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Display')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaSignOutAlt />} rightIcon={<FaChevronRight />}>{t('Log out')}</DropdownItem>
                </div>
                {/* <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem> */}
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="dropdown-menu--secondary" onEnter={calcHeight}>
                <div className="dropdown-menu">

                    <DropdownItem goToMenu={"main"} redirectTo="/" leftIcon={<FaArrowLeft />} ></DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Paramètres et confidentialité</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Option 1')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Option 2')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Option 3')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Option 4')}</DropdownItem>
                    <DropdownItem goToMenu={"theme"} redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Thème')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaMoon />} rightIcon={<FaChevronRight />}>{t('Option 5')}</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaSignOutAlt />} rightIcon={<FaChevronRight />}>{t('Log out')}</DropdownItem>
                </div>
                {/* <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem> */}
            </CSSTransition>

            <CSSTransition in={activeMenu === 'theme'} unmountOnExit timeout={500} classNames="dropdown-menu--primary" onEnter={calcHeight}>
                <div className="dropdown-menu">

                    <DropdownItem goToMenu={"settings"} redirectTo="/" leftIcon={<FaArrowLeft />} ></DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaMoon />}>Dark</DropdownItem>
                    <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaSun />}>Light</DropdownItem>
                </div>
                {/* <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>{t('Hello')}</DropdownItem> */}
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
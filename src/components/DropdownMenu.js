import { FaChevronRight, FaCog } from "react-icons/fa"
import { Link } from "react-router-dom"

const DropdownMenu = () => {

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
        <div className="absolute top-full right-0 bg-gray-900 text-white w-[375px] h-[450px] rounded-xl p-3 border z-50">
            <DropdownItem redirectTo="/">My Profile</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Paramètres et confidentialité</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Hello</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Hello</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Hello</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Hello</DropdownItem>
            <DropdownItem redirectTo="/" leftIcon={<FaCog />} rightIcon={<FaChevronRight />}>Hello</DropdownItem>
        </div>
    )
}

export default DropdownMenu
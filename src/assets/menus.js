import { BiLogIn } from 'react-icons/bi'
import { BsHouseDoor, BsShop } from 'react-icons/bs'
import { GoDashboard } from 'react-icons/go'
import { MdContactSupport } from 'react-icons/md'
import { TiWeatherPartlySunny } from 'react-icons/ti'

export default
    {
        unauthenticated:
            [
                {
                    name: "Home",
                    icon: BsHouseDoor,
                    path: "/"
                },
                {
                    name: "Products",
                    icon: BsShop,
                    path: "/catalogue"
                },
                {
                    name: "Contact",
                    icon: MdContactSupport,
                    path: "/contacts"
                },
                {
                    name: "Login",
                    icon: BiLogIn,
                    path: "/login"
                }
            ],
        authenticated:
            [
                {
                    name: "Home",
                    icon: BsHouseDoor,
                    path: "/"
                },
                {
                    name: "Products",
                    icon: BsShop,
                    path: "/catalogue"
                },
                {
                    name: "Weather",
                    icon: TiWeatherPartlySunny,
                    path: "/weather"
                },
                {
                    name: "Contact",
                    icon: MdContactSupport,
                    path: "/contacts"
                }
            ],
        admin:
            [
                {
                    name: "Home",
                    icon: BsHouseDoor,
                    path: "/"
                },
                {
                    name: "Products",
                    icon: BsShop,
                    path: "/catalogue"
                },
                {
                    name: "Weather",
                    icon: TiWeatherPartlySunny,
                    path: "/weather"
                },
                {
                    name: "Dashboard",
                    icon: GoDashboard,
                    path: "/v2/dashboard"
                },
                {
                    name: "Contact",
                    icon: MdContactSupport,
                    path: "/contacts"
                }
            ]
    }
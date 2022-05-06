
import { GoHome } from 'react-icons/go';
import { FaBell, FaUsers } from 'react-icons/fa';
import { MdOutlineStore } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { FcSettings } from 'react-icons/fc';
import { GrUserAdmin } from 'react-icons/gr';

export const menuData = [
    {
        label: null,
        menus: [
            {
                icon: GoHome,
                name: "Home",
                id: "home"
            }
        ]
    },
    {
        label: "Manage",
        menus: [
            {
                icon: MdOutlineStore,
                name: "Inventory",
                id: "inventory"
            },
            {
                icon: GiPriceTag,
                name: "Discounts and Coupon codes",
                id: "discounts"
            },

        ]
    },
    {
        label: "Members",
        menus: [
            {
                icon: FaUsers,
                name: "Users",
                id: "users"
            },
            {
                icon: GrUserAdmin,
                name: "Admin Settings",
                id: "admin_preferences"
            },

        ]
    },
    {
        label: "More",
        menus: [
            {
                icon: FaBell,
                name: "Notifications",
                id: "notifications"
            },
            {
                icon: FcSettings,
                name: "Preferences",
                id: "preferences"
            },

        ]
    }
]

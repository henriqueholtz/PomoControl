import { EnumMenus } from '@pomocontrol-enums'

export const Routes = [
    {
        id: 1,
        tag: 'home',
        menus: [EnumMenus.All], 
        title: 'Dashboard',
        paths: ['/', '/home', '/dashboard'],
        componentName: 'Home'
    },
    {
        id: 2,
        tag: 'about',
        menus: [EnumMenus.All], 
        title: 'About',
        paths: ['/about'],
        componentName: 'About'
    },
    {
        id: 3,
        tag: 'login',
        menus: [EnumMenus.All], 
        title: 'Login',
        paths: ['/login', '/signin'],
        componentName: 'Login'
    },
    {
        id: 4,
        tag: 'register',
        menus: [EnumMenus.All], 
        title: 'Register',
        paths: ['/register', '/signup'],
        componentName: 'Register'
    },
    {
        id: 5,
        tag: 'maintenance',
        menus: [], 
        title: 'Maintenance',
        paths: ['/maintenance'],
        componentName: 'Maintenance'
    },
]
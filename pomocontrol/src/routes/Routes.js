export const Routes = [
    {
        id: 1,
        tag: 'home',
        title: 'Dashboard',
        path: ['/', '/home', '/dashboard'],
        componentName: 'Home'
    },
    {
        id: 2,
        tag: 'about',
        title: 'About',
        path: ['/about'],
        componentName: 'About'
    },
    {
        id: 3,
        tag: 'login',
        title: 'Login',
        path: ['/login', '/signin'],
        componentName: 'Login'
    },
    {
        id: 4,
        tag: 'register',
        title: 'Register',
        path: ['/register', '/signup'],
        componentName: 'Register'
    },
    {
        id: 5,
        tag: 'maintenance',
        title: 'Maintenance',
        path: ['/maintenance'],
        componentName: 'Maintenance'
    },
]
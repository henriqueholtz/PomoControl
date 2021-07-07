export const Routes = [
    {
        tag: 'home',
        title: 'Dashboard',
        path: ['/', '/home', '/dashboard'],
        componentName: 'Home'
    },
    {
        tag: 'about',
        title: 'About',
        path: '/about',
        componentName: 'About'
    },
    {
        tag: 'login',
        title: 'Login',
        path: ['/Login', '/signin'],
        componentName: 'Login'
    },
    {
        tag: 'register',
        title: 'Register',
        path: ['/Register', '/signup'],
        componentName: 'Register'
    },
]
// Layouts
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import Discover from '~/pages/Discover';
import Library from '~/pages/Library';
import Promotion from '~/pages/Promotion';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
import Introduce from '~/pages/Introduce';
import Order from '~/pages/Order';
import Admin from '~/pages/Admin';
import { AdminLayout } from '~/components/Layout';
// Không cần login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/discover', component: Discover },
    { path: '/service', component: Service },
    { path: '/promotion', component: Promotion },
    { path: '/libary', component: Library },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/introduce', component: Introduce },
    { path: '/order', component: Order },
    { path: '/admin', component: Admin, layout: AdminLayout },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

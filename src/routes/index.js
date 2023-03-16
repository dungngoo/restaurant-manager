// Layouts
import { DefaultLayout } from '~/components/Layout';
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import Discover from '~/pages/Discover';
import Promotion from '~/pages/Libary';
import Libary from '~/pages/Promotion';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
import Introduce from '~/pages/Introduce';
import Order from '~/pages/Order';
// Không cần login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/discover', component: Discover },
    { path: '/service', component: Service },
    { path: '/promotion', component: Promotion },
    { path: '/libary', component: Libary },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/introduce', component: Introduce },
    { path: '/order', component: Order },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

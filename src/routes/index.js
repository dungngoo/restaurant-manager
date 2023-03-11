// Layouts
import { HeaderOnly } from '~/components/Layout';
import HeaderFooterLayout from '~/components/Layout/HeaderFooterLayout';
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import Tables from '~/pages/Orders';

// Không cần login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/news', component: News, layout: HeaderOnly },
    { path: '/orders', component: Tables, layout: HeaderFooterLayout },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

// Layouts
import { HeaderOnly } from '~/components/Layout';
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';

// Không cần login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/news', component: News, layout: HeaderOnly },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

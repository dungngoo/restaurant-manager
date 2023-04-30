// Layouts
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import Discover from '~/pages/Discover';
import Library, { MonAn } from '~/pages/Library';
import Promotion from '~/pages/Promotion';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
import Introduce from '~/pages/Introduce';
import Order from '~/pages/Order';
import Admin from '~/pages/Admin';
import { AdminLayout, LoginLayout } from '~/components/Layout';
import Docs, { Doc1, Doc2, Doc3, Doc4, Doc5 } from '~/pages/Docs';
import HomeLayout from '~/components/Layout/HomeLayout';
import FormCreateStaff from '~/components/Layout/components/FormCreateStaff';
import PromotionData from '~/pages/Promotion/PromotionData';
import NewsData from '~/pages/News/NewsData';
import NewsLayout from '~/components/Layout/NewsLayout';
import MenuItemsLibrary from '~/components/Layout/components/MenuItemsLibrary';
import EventsLibrary from '~/components/Layout/components/EventsLibrary';
import EventDetail from '~/components/EventDetail';

// Không cần login
const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/discover/:constant', component: Discover },
    { path: '/services/:type', component: Service },
    { path: '/promotion-cat/:param', component: Promotion },
    // { path: '/promotion-cat/type/', component: Promotion },
    { path: '/library', component: Library },
    { path: '/library-cat/:param/', component: EventsLibrary },
    { path: '/library-cat/hinh-am-thuc/', component: MonAn },
    { path: '/libraries/:type', component: MenuItemsLibrary },
    { path: '/events/:name', component: EventDetail },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/introduce', component: Introduce },
    { path: '/order/', component: Order },
    { path: '/admin', component: Admin, layout: LoginLayout },
    { path: '/docs', component: Docs, layout: AdminLayout },
    { path: '/docs/1', component: Doc1, layout: AdminLayout },
    { path: '/docs/1/create', component: FormCreateStaff, layout: AdminLayout },
    { path: '/docs/2', component: Doc2, layout: AdminLayout },
    { path: '/docs/3', component: Doc3, layout: AdminLayout },
    { path: '/docs/4', component: Doc4, layout: AdminLayout },
    { path: '/docs/5', component: Doc5, layout: AdminLayout },
    { path: '/promotions/:id', component: PromotionData },
    { path: '/news/:id', component: NewsData, layout: NewsLayout },
    { path: '/news/page/:page', component: NewsData, layout: NewsLayout },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

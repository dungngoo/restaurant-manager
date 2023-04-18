// Layouts
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import { Diamond, Platinum, Ruby, Topaz } from '~/pages/Discover';
import Library from '~/pages/Library';
import Promotion from '~/pages/Promotion';
import Service, { HoiNghi, SuKien, TiecCuoi, TiecOutside } from '~/pages/Service';
import Contact from '~/pages/Contact';
import Introduce from '~/pages/Introduce';
import Order from '~/pages/Order';
import Admin from '~/pages/Admin';
import { AdminLayout, LoginLayout } from '~/components/Layout';
import Docs, { Doc1, Doc2, Doc3, Doc4, Doc5 } from '~/pages/Docs';
import HomeLayout from '~/components/Layout/HomeLayout';
import FormCreateStaff from '~/components/Layout/components/FormCreateStaff';

// Không cần login
const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/discover/ruby/', component: Ruby },
    { path: '/discover/topaz/', component: Topaz },
    { path: '/discover/diamond/', component: Diamond },
    { path: '/discover/platinum/', component: Platinum },
    { path: '/service/hoi-nghi/', component: HoiNghi },
    { path: '/service/tiec-cuoi/', component: TiecCuoi },
    { path: '/service/tiec-ouside/', component: TiecOutside },
    { path: '/service/su-kien/', component: SuKien },
    { path: '/promotion', component: Promotion },
    { path: '/libary', component: Library },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/introduce', component: Introduce },
    { path: '/order', component: Order },
    { path: '/admin', component: Admin, layout: LoginLayout },
    { path: '/docs', component: Docs, layout: AdminLayout },
    { path: '/docs/1', component: Doc1, layout: AdminLayout },
    { path: '/docs/1/create', component: FormCreateStaff, layout: AdminLayout },
    { path: '/docs/2', component: Doc2, layout: AdminLayout },
    { path: '/docs/3', component: Doc3, layout: AdminLayout },
    { path: '/docs/4', component: Doc4, layout: AdminLayout },
    { path: '/docs/5', component: Doc5, layout: AdminLayout },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

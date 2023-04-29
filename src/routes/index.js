// Layouts
// Pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import Discover from '~/pages/Discover';
import Library, { HinhCuoi, MonAn, SuKienCaNhan, SuKienCongTy } from '~/pages/Library';
import { HoiNghiKM, SuKienKM, TiecCuoiKM } from '~/pages/Promotion';
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

// Không cần login
const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/discover/:constant', component: Discover },
    { path: '/services/:type', component: Service },
    { path: '/promotion-cat/hoi-nghi/', component: HoiNghiKM },
    { path: '/promotion-cat/tiec-cuoi/', component: TiecCuoiKM },
    { path: '/promotion-cat/su-kien/', component: SuKienKM },
    { path: '/library', component: Library },
    { path: '/library-cat/hinh-am-thuc/', component: MonAn },
    { path: '/library-cat/hinh-cuoi/', component: HinhCuoi },
    { path: '/library-cat/hinh-su-kien/', component: SuKienCongTy },
    { path: '/library-cat/hinh-trang-tri/', component: SuKienCaNhan },
    { path: '/library-cat/hinh-cuoi/', component: Library },
    { path: '/library-cat/hinh-su-kien/', component: Library },
    { path: '/library-cat/hinh-trang-tri/', component: Library },
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
    { path: '/promotions/:id', component: PromotionData },
    { path: '/news/:id', component: NewsData, layout: NewsLayout },
    { path: '/news/page/:page', component: NewsData, layout: NewsLayout },
];
// Không vào được nếu chưa login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

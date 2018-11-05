import PageLayout from './components/page-layout';

// Individual pages
import IndexPage from './pages/landing-page';

const $root = document.body.querySelector('#root');

const Routes = {
    '/index': {
        render(vnode) {
            return m(PageLayout, m(IndexPage));
        },
    },
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute };

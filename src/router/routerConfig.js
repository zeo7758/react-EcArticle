import asyncComponent from './asynComponent'
// const _import_views = file => asyncComponent(() => require(`pages/${file}/${file}`))
const _import_views = file => asyncComponent(() => import(`../pages/${file}/${file}`))
 
export const layoutRouterMap = [
    { 
        path: '/', 
        name: '首页', 
        exact: true,
        component:_import_views('home')
    },
    { 
        path: '/home', 
        name: '首页', 
        exact: true,
        component:_import_views('home')
    },
    { 
        path: '/xiaoce', 
        name: '小册',
        component: _import_views('Xiaoce')
    },
    {
        path: '/me', 
        name: '我的', 
        exact: true,
        component: _import_views('Me')
    },
    {
        path: '/find', 
        name: '发现', 
        exact: true,
        component: _import_views('Find')
    }
]

export const notLayoutRouterMap = [
    { 
        path: '/xiaocedetail/:id', 
        name: '小册详情', 
        exact: true,
        component: _import_views('XiaoceDetail')
    },
    { 
        path: '/article/:id', 
        name: '文章', 
        exact: true,
        component: _import_views('Article')
    },
    {
        path: '/login', 
        name: '登录', 
        exact: true,
        component: _import_views('Login')
    },
]

export const routes = layoutRouterMap.concat(notLayoutRouterMap)

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {layoutRouterMap, notLayoutRouterMap} from './routerConfig';
import App from './../pages/App';
import CommonComponent from './../components/commonComponent'

const renderRouteComponent = routes => routes.map( (route, index) => {
    return <Route key={index} {...route}/>
})

const layoutRouter = renderRouteComponent(layoutRouterMap)
const notLayoutRouter = renderRouteComponent(notLayoutRouterMap)

class RouterMap extends React.Component{
    render() {
        return (
            <div>
                {/* <DefaultLoading/> */}
                <CommonComponent/>
                <Router>
                    {/* <Route path="*" exact  component={App} /> */}
                    <Switch>
                        {/* <Route path="*" exact  component={App} /> */}
                        {notLayoutRouter}
                        {layoutRouter}
                        {/* <App/> */}
                        {/* <Route render={ props => {
                            return <App {...props}>
                                <Route render={()=> {
                                    return (
                                        <Switch>
                                            {LoyoutRouter}
                                        </Switch>
                                    )
                                }}/>
                            </App>
                        }} /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}

{/* <HashRouter>
    <Route render={ ({location, history}) => {
        history.slideStatus = history.slideStatus || (history.action === 'POP' ? 'right' : history.slideStatus)
        const pageTransitions = pageTransitionsFn(history.slideStatus)
        const mapStyle = mapStyleFn(history.slideStatus)
        history.slideStatus = false
        return (
            <div style={{width: '100%', height: '100%'}}>
                <GlobalComponents/>
                <AnimatedSwitch
                    {...pageTransitions}
                    runOnMount={location.pathname === '/'}
                    mapStyles={mapStyle}
                    className="animate-wrapper">
                    {NotLoyoutRouter}
                    <Route render={ props => {
                        return <Loyout {...props}>
                            <Route render={()=> {
                                return (
                                    <Switch>
                                        {LoyoutRouter}
                                        <Redirect from="*" to="/404" />
                                    </Switch>
                                )
                            }}/>
                        </Loyout>
                    }} />
                </AnimatedSwitch>
            </div>
        )
    }}/>
</HashRouter> */}

export default RouterMap;

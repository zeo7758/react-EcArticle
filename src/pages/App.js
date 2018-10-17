import React from 'react';
import * as actions from './../actions/action'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Home from './home/home';
import NotFound from './notFound';
import Xiaoce from './Xiaoce/Xiaoce'
import Find from './Find/Find'
import Me from './Me/Me'
import Article from './Article/Article'
import XiaoceDetail from './XiaoceDetail/XiaoceDetail'
import CommonComponent from './../components/commonComponent'
import Login from './Login/Login';
import ComFooter from './../components/ComFooter/ComFooter'
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* <CommonComponent/> */}
                <Router>
                    <Switch>
                        {/* <Route path="/" exact  component={Home} /> */}
                        <Route path="/home"  component={Home} />
                        <Route path="/me" component={Me} />
                        <Route path="/xiaoce" component={Xiaoce} />
                        <Route path="/find" component={Find} />
                        <Redirect to="/home" />
                    </Switch>
                </Router>
                <ComFooter/>
            </div>
        )
    }
}

export default App


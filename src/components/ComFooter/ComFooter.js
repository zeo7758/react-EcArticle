import React from 'react';
import './../../common/style/font.css'
import './index.less';
import {
    nav,NavLink
  } from 'react-router-dom';

class ComFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            selected : 0
        }
    }
    render() {
        return (
            <div className='footers'>
                <nav className='flexs' > 
                    <NavLink to='/home'  activeClassName="active">
                        <span className='icon icon-icon-home1'></span>
                        <span className='icon-word'>首页</span>
                    </NavLink>
                    <NavLink to='/find'  activeClassName="active">
                        <span className='icon icon-icon-seach2'></span>
                        <span className='icon-word'>发现</span>
                    </NavLink>
                    <NavLink to='/xiaoce'  activeClassName="active">
                        <span className='icon icon-icon-list2'></span>
                        <span className='icon-word'>小册</span>
                    </NavLink>
                    <NavLink to='/me'  activeClassName="active">
                        <span className='icon icon-icon-me2'></span>
                        <span className='icon-word'>我的</span>
                    </NavLink>
                </nav>
            </div>
        )
    }

}
export default ComFooter;

import React from 'react';
import './index.less'
import {withRouter} from 'react-router-dom'
export default class UserHead extends React.Component {
    goUserCenter() {
        // 已经登录，去个人中心页
    }
    goLogin() {
        // 未登录，去登录页
        this.props.goLogin()
    }
    render() {
         let {peopleInfo} = this.props;
        return (
            <div className='info profile'>
                {
                    peopleInfo.username ? <div className='cm-flex-col' onClick={this.goUserCenter.bind(this)}>
                    <img className='avatar' src={peopleInfo.avatarLarge} />
                    <div className='text cm-flex-1'>
                        <div className='name'>{peopleInfo.username}</div>
                        <div className='jobtitle'>{peopleInfo.jobTitle}</div>
                        <div className='others'>{peopleInfo.selfDescription }</div>
                    </div>
                    </div> : 
                    <div  className='cm-flex-col' onClick={this.goLogin.bind(this)}>
                        <div className='avatar'>
                            <img src={require("./../../../common/images/empty_avatar_user.png")}/>    
                        </div> 
                        <div className="cm-flex-1">未登录</div>     
                    </div>
                }
             </div>
        )
    }
}
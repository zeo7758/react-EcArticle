import React from 'react';
import * as Storage from './../../common/js/storage';
import {bindActionCreators} from 'redux';
import * as actionsType from './../../actions/action'
import './login.less';
import Mhead from './../../components/Mhead/Mhead';
import {connect} from './../../common/connect';
import 'whatwg-fetch'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            password: '',
            phoneNumber: "",
        }
    }
    componentWillMount() {
        console.log('componentWillMount',this.props)
        this.props.showLoad()
    }
    componentDidMount() {
        console.log(222,this.props)
        this.props.hideLoad()
    }
    submit() {
        let {phoneNumber, password} = this.state;
        // https://juejin.im/auth/type/phoneNumber
        fetch('/juejin-api/auth/type/phoneNumber', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify( {
                phoneNumber,
                password,
            })
        }).then(res => {
            if(res.status == 200) {
              
                return res.json()
            }else if(res.status == 401) {
                // 密码错误www
                alert('密码错误')
            }else if(res.status == 404){
                alert('用户不存在') 
            }else {
                // 未知错误
                alert('未知错误')
            }
            return null
        }).then(data => {
            if(data) {
                this.props.updateUser({
                    'token': data.token,
                    'uid': data.userId,
                    'clientId': data.clientId,
                })
                this.props.history.push('/me')
            }
        })
        // $fetch({
        //     url:'',
        //     type: 'POST',
        //     headers: ,
        //     data:,
        //     success: res => {
        //         console.log(res)
        // this.props.actionInfo.updateUser({
        //     'token': res.token,
        //     'uid': res.userId,
        //     'clientId': res.clientId,
        // })
        // this.props.history.push('/')
        // if(res.statusCode == 200) {
        //     // 登录成功
        //     // Storage.setStore("userInfo", {
        //     //     'token': res.data.token,
        //     //     'uid': res.data.userId,
        //     //     'clientId': res.data.clientId,
        //     //   })

        //     //   登录成功
        // }else if(res.statusCode == 401) {
        //     // 密码错误www
        // //    alert（'密码错误'）
        // }else if(res.statusCode == 404){
        //     //
        //     // alert（'用户不存在'）
        // }else {
        //     // 未知错误
        //     // alert（'未知错误'）
        // }
        //     }
        // })
    }
    handlePhone(e) {
        let phoneNumber = e.target.value;
        this.setState({
            phoneNumber
        })
    }
    handlePass(e) {
        let password = e.target.value;
        this.setState({
            password
        })
    }
    render() {
        let {phoneNumber, password} = this.state;
        return (
            <div>
                <Mhead title='登录'/>
                <div className="input-wrap">
                    <input className='phone' placeholder="手机号" type='number' name='phoneNumber' value={phoneNumber} onChange={this.handlePhone.bind(this)}/>
                    <input className='password' placeholder="密码" password='true'type='password' name='password' value={password} onChange={this.handlePass.bind(this)}/>
                    <button className='login-btn' onClick={this.submit.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
}

export default connect(Login)

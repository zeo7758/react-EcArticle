import React from 'react';
import ComFooter from './../../components/ComFooter/ComFooter';
import UserHead from './subpage/UserHead';
import InfoList from './subpage/InfoList';
import {connect} from './../../common/connect';
class Me extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            peopleInfo: {
            }
        }
    }
    componentWillMount() {
        console.log('componentWillMount',this.props)
        this.props.showLoad()
    }
    componentDidMount() {
        this.props.hideLoad()
        if(this.props.userInfo.uid){
            this.getPeopleInfo()
        }
    }
    getPeopleInfo() {
        let auth = this.props.userInfo;
        $fetch({
            url:'/storage-api/v1/getUserInfo',
            data:{
                  src: "web",
                  uid: auth.uid,
                  token: auth.token,
                  device_id: auth.clientId,
                  current_uid: auth.uid
            },
            success:(res) => {
                console.log(res.d);
                this.setState({
                    peopleInfo: res.d
                })
            }
  
        })
    }
    goLogin() {
        this.props.history.push('/login')
    }
    render() {
        let {peopleInfo} = this.state;
        return(
            <div>
                <div>
                    <UserHead peopleInfo={peopleInfo} goLogin={this.goLogin.bind(this)}/>
                    <InfoList peopleInfo={peopleInfo}/>
                </div>
                 <ComFooter/>
            </div>
        )
    }
}

export default connect(Me);

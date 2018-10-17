import React from 'react';
import './toast.css';
import { connect } from './../../common/connect';
 class Toast extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(a) {
        if( this.timer) {
            let _this = this;
            clearTimeout(_this.timer)
        }
        if(a.toast.isShow) {
          this.timer =  setTimeout(() => {
                this.props.hideToast()
            },1500)
        }
    }
    render() {
        let {toast} = this.props;
        return (
            <div className={toast.isShow ? 'showToast' : 'hideToast'}>
               {toast.tips}
            </div>
        )
    }
}
export default connect(Toast)

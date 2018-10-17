import React from 'react'
import PropTypes from 'prop-types'
import Toast from './Toast/Toast'
import DefaultLoading from './DefaultLoading/DefaultLoading';
import { connect } from '../common/connect';

class CommonComponent extends React.Component {
    constructor(props) {
        super(props)
        // console.log('CommonComponent',this.props)
    }
    render() {
        let {isLoad, isToast} = this.props;
        return (
            <div>
                <Toast toast={isToast} />
                <DefaultLoading isLoad={isLoad}/>
            </div>
        )
    }
}
export default connect(CommonComponent)

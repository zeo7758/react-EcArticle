import React from 'react'
import PropTypes from 'prop-types'
import * as actionType  from './../../actions/action'
import './index.less'

class DefaultLoading extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return this.props.isLoad ?
        (
            <div className = "defaultLoad">
               <div className='cm-txt-c wraps'  >
                    <img src={require('./../../common/images/loading2.gif')}/>
                </div>
                <p className="cm-txt-c">Loading...</p>
            </div>
        )
        : " "

    }
}

export default DefaultLoading;

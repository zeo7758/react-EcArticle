import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsType from './../actions/action';

function newConnect(comp) {
    const mapStateToProps = (state, ownProps) => {
        // console.log('state',state)
        return {
            userInfo: state.userInfo,
            isLoad: state.isLoad,
            isToast: state.isToast,
        }
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
        // console.log('dispatch',dispatch)
        return {
            actions:bindActionCreators(actionsType, dispatch)
        }
    }
    return connect(
        mapStateToProps,
        actionsType
    )(comp)
}

export {
    newConnect as connect
}
// export {newConnect}

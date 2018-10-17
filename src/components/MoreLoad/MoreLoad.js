import React from 'react';
import './moreLoad.less'
class MoreLoad extends React.Component {
    render() {
        return (
            <div className='cm-txt-c wraps'  >
                <img src={require('./../../common/images/loading2.gif')}/>
            </div>
        )
    }
    // componentDidMount() {
    //     this.handleScroll()
    //     let doms= this.refs.moreload;
    //     window.addEventListener('scroll',  () => {
    //         console.log(1);
    //     }, false)
    // }
    // handleScroll() {
    //     // console.log(1);
    // }
}
export default MoreLoad;

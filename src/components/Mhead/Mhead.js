import React from 'react';
class Mhead extends React.Component {
    constructor(props) {
        super(props)
    }
    goBack() {
        // this.props.history.back();
        window.history.back()
        // console.log(this.props.history);
    }
    render() {
        let {title='EcArticle'} = this.props;
        return (
            <div className='cm-pos-rel cm-height cm-bgc-blue'>
                <span onClick={this.goBack.bind(this)} className='cm-left-arrow'>
                </span>
                <p className='cm-title'>{title}</p>
            </div>
        )
    }
}
export default Mhead;

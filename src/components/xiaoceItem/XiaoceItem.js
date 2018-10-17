import React from 'react';
import './xiaoceItem.less'

class XiaoceItem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(id) {
        this.props.goBook(id)
    }
    render() {
        let {data} = this.props;
        return (
            <li className='item-wrap cm-pd-tb' onClick={this.handleClick.bind(this, data.id)}>
                <span  className='head'><img src={data.img}/></span>
                <div className='item-info'>
                    <p>{data.title || ''}</p>
                    <p>{data.userData && data.userData.username || ''}</p>
                </div>
                {
                    this.props.showPrice ? <div className='price'>{data.price}</div> : ''
                }
            </li>
        )
    }
}

export default XiaoceItem;

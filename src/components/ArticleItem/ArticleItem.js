import React from 'react';
import './index.less'

export default class ArticleItem extends React.Component {
    handleClick(url) {
        this.props.goArticle(url)
    }
    render() {
        let {data} = this.props;
        return (
            <li className='cm-pd-tb cm-pd-lr list-item' onClick={this.handleClick.bind(this, data.objectId)}>
                <div>
                    <p className='list-title'>{data.title}</p>
                </div>
                <div>
                    <p className='list-content'>{data.content}</p>
                </div>
                <div className='articleType'>
                    <p className={data.category.title}>{data.category.name}</p>
                    <span>
                       <span className='username'>{data.user.username}</span>
                       <span className="cm-pd-lr cm-grey">{data.viewsCount}次阅读</span>
                    </span>
                </div>
            </li>
        )
    }
}
import React from 'react';
import './index.less'

class ArticleHead extends React.Component {
    constructor(props) {
        super(props)

    }
    goUser() {
        this.props.goUser()
    }
    render() {
        let {data} = this.props;
        
        return (
            <div className='article-user' onClick={this.goUser.bind(this)}>
                <div className='head' style={{backgroundImage: `url(${data.user && data.user.avatarLarge})`}}></div>
                <div className='create-time'>
                    <span className='username'>{data.user && data.user.username || ''}</span>
                    <span>{data.formatTime} 阅读 {data.viewsCount || ''}</span>
                </div>
            </div>
        )
    }
}
export default ArticleHead;
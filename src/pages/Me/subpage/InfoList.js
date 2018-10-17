import React from 'react';

export default class InfoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {peopleInfo} = this.props;
        return (
            <div className='wrapper'>
                <div className='card items'>
                    <div className='item'>
                        <div className='title'>
                            <div>沸点</div>
                        </div>
                        <div className='count'>{peopleInfo.pinCount || 0}</div>
                    </div>
                    <div className='item' bindtap='goUndev'>
                        <div className='title'>
                            <div>原创文章</div>
                        </div>
                        <div className='count'>{peopleInfo.postedPostsCount || 0}</div>
                    </div>
                    <div className='item' bindtap='goUndev'>
                        <div className='title'>
                            <div>分享文章</div>
                        </div>
                        <div className='count'>{peopleInfo.postedEntriesCount || 0}</div>
                    </div>
                    <div className='item' catchtap='navigatItem' data-open='true'>
                        <div className='title'>
                            <div>收藏集</div>
                        </div>
                        <div className='count'>{peopleInfo.collectionSetCount|| 0}</div>
                    </div>
                </div>

                <div className='card items'>
                    <div className='item' bindtap='goUndev'>
                        <div className='title'>
                            <div>喜欢的文章</div>
                        </div>
                        <div className='count'>{peopleInfo.collectedEntriesCount || 0}</div>
                    </div>
                    <div className='item' bindtap='goUndev'>
                        <div className='title'>
                            <div>关注的标签</div>
                        </div>
                        <div className='count'>{peopleInfo.subscribedTagsCount || 0}</div>
                    </div>
                </div>

                <div className='card items'>
                    {
                        peopleInfo.community && peopleInfo.community.weibo && peopleInfo.community.weibo.username  ?
                        <div className='item' >
                            <div className='title'>
                                <img src='../../common/img/icon_profile_weibo.png'/>
                                <div className='val'>{peopleInfo.community.weibo.username}</div>
                            </div>
                        </div> : ''
                    }
                    {
                        peopleInfo.blogAddress ?
                        <div className='item' >
                            <div className='title'>
                                <img src='../../common/img/icon_profile_blog.png'/>
                                <div className='val'>{peopleInfo.blogAddress || ''}</div>
                            </div>
                        </div> : ''
                    }
                </div>
            </div>
        )
    }
}


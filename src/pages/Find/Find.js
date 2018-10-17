import React from 'react';
import ComFooter from './../../components/ComFooter/ComFooter'
import ArticleItem from './../../components/ArticleItem/ArticleItem'
class Find extends React.Component {
    //   // https://timeline-merger-ms.juejin.im
    constructor(props) {
        super(props)
        this.state = {
            articleList: []
        }
    }

    componentDidMount() {
        this.getRankList()
    }

    getRankList() {
        $fetch({
            url: '/timelineApi/v1/get_entry_by_rank',
            data: {
                src:"web",
                uid:"unlogin",
                device_id:"",
                token:"",
                limit:20,
                before:""
            },
            success: data => {
                this.setState({
                    articleList: data.d && data.d.entrylist || []
                })
            }
        })
    }

    goArticle(url) {
        // 跳转文章页

        // let arr = url.split('/post/'),
        // id = arr[1];
        // console.log(url)
        // console.log('====================================')
        // console.log(id)
        // console.log('====================================')
        this.props.history.push(`/article/${url}`)
    }

    render() {
        return(
            <div  className='cm-container '>
                <ul className="cm-page-main">
                    {
                        this.state.articleList.map((val,ix) => {
                            return <ArticleItem goArticle={this.goArticle.bind(this)} data={val} key={ix}/>
                        })
                    }
                </ul>
                 <ComFooter/>
            </div>
        )
    }
}

export default Find;

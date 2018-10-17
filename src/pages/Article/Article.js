import React from 'react';
import ArticleHead from './../../components/ArticleHead/ArticleHead'
import Mhead from './../../components/Mhead/Mhead';
class Article extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            articleContent: {},
            articleInfo: {}
        }
    }
    componentDidMount() {
        // let id = this.props.match && this.props.match.params && this.props.match.params.id || '5a9f36f95188255587231088' ;
        let id = '5a9f36f95188255587231088'
        // console.log('====================================')
        console.log(id)
        // console.log('====================================')
        this.getArticle(id ,'entry')
        this.getArticle(id ,'entryView')
    }
    getArticle(id,type) {
        // type == entryView 获取文章主内容，type == entry 获取文章title,user等信息
        let auth = {};
        $fetch({
            url:'/article-api/v1/getDetailData',
            data: {
                src: "web",
                uid: auth.uid,
                device_id: auth.clientId,
                token: auth.token,
                type: type,
                postId:id
            },
            success:json => {
                if(type == 'entryView') {
                    if(json.m == 'ok') {
                        let article = json.d && json.d.content || '';
                        this.setState({
                            articleContent:article
                        })
                    }
                }else {
                    // console.log(res.data);
                    let data = json.d;
                    data.formatTime = data.createdAt.substr(0,10)
                    this.setState({
                        articleInfo:data
                    })
                }
            }
        })
    }
    render() {
        return (

            <div>
                <Mhead/>
                <div className='cm-footer-main'>
                    <ArticleHead data={this.state.articleInfo}/>
                    <div className="cm-pd-lr markdown-body" dangerouslySetInnerHTML={{__html:this.state.articleContent}}></div>
                </div>
            </div>

        )
    }
}

export default Article;

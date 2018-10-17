import React from 'react';
import ComFooter from './../../components/ComFooter/ComFooter'
import ArticleItem from './../../components/ArticleItem/ArticleItem'
import Banner from './../../components/Banner/Banner'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recomList: [],
            swiperList:[]
        }
    }
    componentDidMount() {
        this.getRecom();
        this.getSwiper();
    }
    getRecom() {
        $fetch({
            url:'/timelineApi/v1/get_entry_by_timeline',
            data:  {
                src:'web',
                uid:'',
                device_id:'',
                token:'',
                limit:20,
                category:'all',
                recomment:'1',
                before:''
            },
            success: data => {
                this.setState({
                    recomList:data && data.d && data.d.entrylist || []
                })
            }
        })
    }

    getSwiper(data) {
        // https://event-storage-api-ms.juejin.im/v1/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&bannerStartTime=2018-08-10T15%3A59%3A59.999Z&pageNum=1&pageSize=20&showBanner=1
         $fetch({
            url: '/swiper-api/v2/getEventList', //仅为示例，并非真实的接口地址
            data: {
                uid:'',
                client_id:"",
                token:"",
                src:'web',
                orderType:'startTime',
                bannerStartTime:'2018-08-10T15%3A59%3A59.999Z',
                pageNum:1,
                pageSize:20,
                showBanner:1
            },
            success: (res) => {
             console.log(res.d);
             let swiperList= res && res.d || [];
              this.setState({
                swiperList: swiperList.splice(0,5)
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
        return (
            <div className='cm-container '>
                <div  className="cm-page-main">
                    <Banner swiperList={this.state.swiperList}/>
                    <ul>
                        {
                            this.state.recomList.map((val, index) => {
                                return <ArticleItem goArticle={this.goArticle.bind(this)} data={val} key={index}/>
                            })
                        }
                    </ul>
                </div>
                <ComFooter/>
            </div>
        )
    }
}

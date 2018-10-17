import React from 'react';
import XiaoceItem from './../../components/xiaoceItem/XiaoceItem';
import MoreLoad from './../../components/MoreLoad/MoreLoad'
import ComFooter from './../../components/ComFooter/ComFooter'
// import {withRouter} from 'react-router-dom'
import {connect} from './../../common/connect';
class Xiaoce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xiaoceList: [],
            hasMore: true,
            page:1
        }
        this.timers = null
    }
    componentWillMount() {
        console.log('componentWillMount',this.props)
        this.props.showLoad()
    }
    componentDidMount() {
        // this.props.actions.showLoad()

        this.getXiaoce(1)

    }
    getXiaoce(page) {
        // 接口每页加载20条
        $fetch({
            url:'/xiaoce-api/v1/getListByLastTime',
            data:{
                uid:'',
                client_id:'',
                token:'',
                src:'web',
                alias:'',
                pageNum:page
            },
            success: data => {
                // 每次20条
                if(data.d.length < 20) {
                    this.setState({
                        hasMore: false
                    })
                }
                this.setState({
                    xiaoceList: this.state.xiaoceList.concat(data.d)
                })
                this.props.hideLoad()
            }
        })
    }
    handleScroll(e) {
        // console.log(e.target);
        if(!this.state.hasMore) {
            return
        }
        let listDom = this.refs.list,
            wrapDom = this.refs.wrap;
        let top = listDom.getBoundingClientRect().top;
        //  20为留有的余量

        if(this.timers) {
            clearTimeout(this.timers)
        }
        this.timers = setTimeout(() => {
            if((listDom.clientHeight - wrapDom.clientHeight - 20) <= Math.abs(top) ) {
                let page = this.state.page + 1;
                this.setState({
                    page: page
                })
                this.getXiaoce(page)
                console.log(this.state.page);
            }

        }, 50)

    }
    goBook(id) {
        // https://juejin.im/book
        console.log(id)
        this.props.history.push(`/xiaocedetail/${id}`)
    }
    render() {
        return (
            <div className='cm-container' ref='wrap' onScroll={this.handleScroll.bind(this)}>
                <div className=' cm-page-main'>
                    <ul className='cm-pd-lr' ref='list'>
                        {
                            this.state.xiaoceList.map((val, index) => {
                                return <XiaoceItem showPrice={true} goBook={this.goBook.bind(this)} key={index} data={val}/>
                            })
                        }

                    </ul>
                    {
                        this.state.hasMore ? <MoreLoad /> : <p className='cm-txt-c'>没有更多了...</p>
                    }
                </div>
                <ComFooter/>
            </div>
        )
    }
}

export default connect(Xiaoce);

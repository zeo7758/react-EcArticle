import React from 'react';
import XiaoceItem from './../../components/xiaoceItem/XiaoceItem';
import Mhead from './../../components/Mhead/Mhead';
import ChapterItem from './subPage/ChapterItem';

class XiaoceDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headInfo : {},
            sectionList:[]
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id || ''
        this.getHeadInfo(id);
        this.getSection(id);
    }
    getHeadInfo(id) {
        $fetch({
            url: '/xiaoceinfo-api/v1/get',
            data:{
                uid:'',
                client_id:'',
                token:'',
                src:'web',
                id
            },
            success: data => {
                console.log(data.d)
                this.setState({
                    headInfo:  data.d
                })
            }                        
        })
    }
    getSection(id) {
        $fetch({
            url:'/xiaoceinfo-api/v1/getListSection',
            data:{
                uid:'',
                client_id:'',
                token:'',
                src:'web',
                id
            },
            success: data => {
                this.setState({
                    sectionList:  data.d
                })
            }
        })
    }
    render() {
        return (
            <div>
                <Mhead/>
                <div className='cm-footer-main'>
                    <XiaoceItem showPrice={false} data={this.state.headInfo}/>
                    <div>
                        {
                            this.state.sectionList.map((item,index) => {
                                return  <ChapterItem key={index} data={item} index={index+1}/>
                            })
                        }

                    </div>
                    <div className='cm-pd-lr' dangerouslySetInnerHTML={{__html:this.state.headInfo.summaryHtml}}></div>
                </div>
            </div>
        )
    }
}
// <XiaoceItem showPrice= {false}/>
{/* */}
export default XiaoceDetail;

import React from 'react';

class ChapterItem extends React.Component {
    render(){
        let {data = {},index= 1} = this.props; 
        return (
            <div className="cm-flex-col">
              
                <div>
                    <p>{data.title}</p>
                    <p>{data.pv}次学习</p>
                </div>
               
            </div>
        )
    }
}
{/* <span>{index}</spam>    
{
    data.isFree ? <span className='cm-grey'> 收费 </span>: <span className='cm-tip'>试读 </span>
}     */}
export default ChapterItem;
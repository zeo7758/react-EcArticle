import React from 'react';
import ReactSwipe from 'react-swipe';
export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.swipers = {
            startSlide: 2,
            speed: 400,
            auto: 3000,
        }
    }
    goUrl(eventUrl) {
        window.location.href = eventUrl;
    }
    render() {
        let {swiperList = []}  = this.props;
        return (
            <div className='cm-w100'>
                <ReactSwipe  className="carousel"   swipeOptions={this.swipers} key={swiperList.length}>
                    {
                        swiperList.map((val, index) => {
                            return <div onClick={this.goUrl.bind(this,val.eventUrl)} key={index}><img src={val.screenshot || ''} style={{width:'100%'}}/></div>
                        })
                    }
                </ReactSwipe>
            </div>
        )
    }
}

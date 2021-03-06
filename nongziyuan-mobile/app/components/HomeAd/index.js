import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class HomeAd extends React.Component {
  /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      index: 0
    }
  }

  render() {
    const opt = {
      auto: 2500,
      callback: function (index) {
        // 更新当前轮播图的index
        this.setState({index: index});
      }.bind(this)
    }

    return (
      <div className="home-ad">
        <ReactSwipe swipeOptions={opt}>
          {this.props.data.map(({title, img, link}, index) => {
            const item = (
              <Link key={index} to={link} className="ad-item">
                <img src={img} alt={title} />
              </Link>
            );

            return item;
          })}
        </ReactSwipe>
        <div className="index-container">
          <ul>
            {this.props.data.map((item, index) => {
              return <li key={index} className={this.state.index === index ? "selected" : ''}></li>;
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeAd

import { Component } from 'react'
import Taro from '@tarojs/taro'
import {Button, Image, Swiper, SwiperItem, View} from '@tarojs/components'
import SwiperImg from "../components/SwiperImg";
import './index.scss'


export default class Index extends Component {
  state = {
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleSave(){
    Taro.navigateTo({
      url: '/pages/index/add_card',
    })
  }
  handleTake(){
    Taro.navigateTo({
      url: '/pages/index/take_card',
    })
  }
  render () {
    return (
      <View className='body'>
        <SwiperImg />
        <View className='btn-group'>
          <Button className='opt-btn save' onClick={this.handleSave.bind(this)}>存入信息</Button>
          <Button className='opt-btn take' onClick={this.handleTake.bind(this)}>取出信息</Button>
        </View>
        <View className='share-section'>
          <Button className='btn'>分享</Button>
        </View>
        <View>

        </View>
      </View>
    )
  }
}

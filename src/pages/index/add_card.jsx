import Taro from '@tarojs/taro'
import {Form, Image, Input, Picker, Radio, View,RadioGroup} from "@tarojs/components";
import SwiperImg from "../components/SwiperImg";
import './add_card.scss'
import man from '../../assets/sex/man.png'
import girl from '../../assets/sex/girl.png'
import {Component} from "react";


export default class AddCard extends Component {
  state = {
    selector: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    selectorChecked: '',
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  formSubmit(){

  }
  onReset(){

  }
  formReset(){

  }
  render() {
    const formSection = () => {
      return (
        <View className='card-body'>
          <Form onSubmit={this.formSubmit} onReset={this.formReset}>
            <View>
              <RadioGroup className='sex'>
                <Radio>
                  <Image src={man} className='sex-img man'/>
                </Radio>
                <Radio>
                  <Image src={girl} className='sex-img girl'/>
                </Radio>
              </RadioGroup>
              <Input className='age' placeholder='年龄' type='number' maxlength='3' />
              <Input className='wx' placeholder='微信号'/>
              <View>
                <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                  <View className='picker'>
                    <Input className='constellation' disabled placeholder='星座' value={this.state.selectorChecked}/>
                  </View>
                </Picker>
              </View>
            </View>
          </Form>
        </View>
      )
    }
    return (
      <View>
        <SwiperImg/>
        {formSection()}
      </View>
    )
  }
}

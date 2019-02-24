import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sound from 'react-native-sound'
import { Slider } from '@ant-design/react-native';
import {httpMusicGet} from '../../http/Http'
let mp3 = require('../../assets/mp3/fyydys.mp3');//支持众多格式
//如果是网络音频，使用 new Sound(mp3,null,error => {})
let whoosh = new Sound(mp3, (error) => {
    if (error) {
        return console.log('资源加载失败', error);
    }
});

export default class mySound extends Component {
    constructor(props){
        super(props);
        this.handleChange = value => {
            this.setState({
                volume: value,
            });
            whoosh.setVolume(this.state.volume);
        };
        this.progressChange = value=>{
            this._getNowTime(value);
        };
        this.state = {
            volume: 0.5,
            seconds: 0, //秒数
            totalTime:0,//总秒数
            totalMin: '', //总分钟
            totalSec: '', //总分钟秒数
            nowMin: 0, //当前分钟
            nowSec: 0, //当前秒钟
            nowProgress:0,//当前进度
            maximumValue: 0, //滑块最大值
        };
        let url='https://api.hibai.cn/api/index/index';
        httpMusicGet(url).then(res=>{
            alert(res);
        })
    }
    componentDidMount(){
        let totalTime = whoosh.getDuration();
        totalTime = Math.ceil(totalTime);
        this.setState({totalTime: totalTime});
        let totalMin = parseInt(totalTime/60); //总分钟数
        let totalSec = totalTime - totalMin * 60; //秒钟数并判断前缀是否 + '0'
        totalSec = totalSec > 9 ? totalSec : '0' + totalSec;
        this.setState({
            totalMin,
            totalSec,
            maximumValue: totalTime,
        })
    }
    componentWillUnmount(){
        this.time && clearTimeout(this.time);
    }
    // 声音+
    _addVolume = () => {
        let volume = this.state.volume;
        volume += 0.1;
        volume = parseFloat(volume).toFixed(1) * 1;
        if(volume > 1){
            return alert('目前已经是最大音量');
        }
        this.setState({volume: volume});
        whoosh.setVolume(volume);
    }
    // 声音-
    _reduceVolume = () => {
        let volume = this.state.volume;
        volume -= 0.1;
        volume = parseFloat(volume).toFixed(1) * 1;
        if(volume < 0){
            return alert('当前为静音');
        }
        this.setState({volume: volume});
        whoosh.setVolume(volume);
    }
    // 播放
    _play = () => {
        whoosh.play();
        this.time = setInterval(() => {
            whoosh.getCurrentTime(seconds => {
                seconds = Math.ceil(seconds);
                this._getNowTime(seconds)
            })
        },1000)
    }
    // 暂停
    _pause = () => {
        clearInterval(this.time);
        whoosh.pause();
    }
    // 停止
    _stop = () => {
        clearInterval(this.time);
        this.setState({
            nowMin: 0,
            nowSec: 0,
            seconds: 0,
        });
        whoosh.stop();
    }
    _getNowTime = (seconds) => {
        let nowMin = this.state.nowMin,
            nowSec = this.state.nowSec;
        if(seconds >= 60){
            nowMin = parseInt(seconds/60); //当前分钟数
            nowSec = seconds - nowMin * 60;
            nowSec = nowSec < 10 ? '0' + Math.floor(nowSec) : Math.floor(nowSec);
        }else{
            nowSec = seconds < 10 ? '0' + Math.floor(seconds):Math.floor(seconds);
        }
        let nowProgress = seconds;
        this.setState({
            nowMin,
            nowSec,
            seconds,
            nowProgress
        })
    };
    render() {
        let time = this.state;

        return (
            <View style={styles.container}>
                <Text>当前音量: {this.state.volume}</Text>
                <Text onPress={this._addVolume}>声音+</Text>
                <Text onPress={this._reduceVolume}>声音-</Text>
                <Text onPress={this._play}>播放</Text>
                <Text onPress={this._pause}>暂停</Text>
                <Text onPress={this._stop}>停止</Text>
                <View>
                    <Text>音量控制</Text>
                    <Slider
                        min={0}
                        max={1}
                        defaultValue={this.state.volume}
                        onChange={value => {
                            this.handleChange(value)
                        }
                            }/>
                    <Text>进度控制</Text>
                    <Slider
                        min={0}
                        max={this.state.totalTime}
                        defaultValue={this.state.nowProgress}
                        onChange={value => {
                            this.progressChange(value)
                        }
                        }/>
                    <Text style={{textAlign:'right'}}>{time.nowMin}:{time.nowSec}/{time.totalMin}:{time.totalSec}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

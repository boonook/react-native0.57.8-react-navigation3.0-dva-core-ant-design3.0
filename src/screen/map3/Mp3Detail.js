import React, { Component } from "react";
import { View, Text,StyleSheet,Dimensions,ImageBackground,Image,TouchableOpacity} from "react-native";
import {
    Icon,Provider
} from '@ant-design/react-native';
import Sound from 'react-native-sound'
import { Slider,Grid } from '@ant-design/react-native';
import {httpMusicGet} from '../../http/Http'
import {BasicModalExample} from "../../components/messageModal/MessageModal";
let mp3 = require('../../assets/mp3/fyydys.mp3');//支持众多格式
//如果是网络音频，使用 new Sound(mp3,null,error => {})
let whoosh = new Sound(mp3, (error) => {
    if (error) {
        return console.log('资源加载失败', error);
    }
});

const data = [
    {id:1,icon:'alipay-circle',text:'播放顺序'},
    {id:2,icon:'alipay-circle',text:'后退'},
    {id:3,icon:'alipay-circle',text:'播放'},
    {id:4,icon:'alipay-circle',text:'前进'},
    {id:5,icon:'alipay-circle',text:'列表'}
];

const {height,width} =  Dimensions.get('window');

export default class Mp3Detail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
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
            player:'play-circle'
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
    };
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
    };
    // 播放
    _play = () => {
        whoosh.play();
        this.time = setInterval(() => {
            whoosh.getCurrentTime(seconds => {
                seconds = Math.ceil(seconds);
                this._getNowTime(seconds)
            })
        },1000)
    };
    // 暂停
    _pause = () => {
        clearInterval(this.time);
        whoosh.pause();
    };
    // 停止
    _stop = () => {
        clearInterval(this.time);
        this.setState({
            nowMin: 0,
            nowSec: 0,
            seconds: 0,
        });
        whoosh.stop();
    };
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
                <ImageBackground source={require('../../assets/images/musicBg.png')} style={{width: '100%', height: '100%',backgroundColor:'rgba(0,0,0,0.2)'}}>
                    <View  style={styles.container2}>
                        <View style={styles.header}>
                            <View style={styles.headLeft}>
                                <Icon style={{color:'#fff',paddingLeft:10}} name={'left'}
                                      onPress={()=>{
                                          this.props.navigation.goBack();
                                      }}
                                />
                            </View>
                            <View style={styles.flex1}>
                                <Text style={{color:'#fff'}}>风一样的勇士</Text>
                            </View>
                            <View style={styles.flex1}>

                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'column'}}>
                            <View style={{flex:2,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                                <Image source={require('../../assets/images/logo.png')} style={{width:300,height:300,borderRadius:150}}/>
                            </View>
                            <View style={{flex:1,flexDirection: 'row'}}>
                                <View style={{flex:1,flexDirection: 'column'}}>
                                    <View style={{flex:2,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'heart'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'download'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'fire'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'star'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.refs.son.setModalVisible(true)
                                                }}
                                            >
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'branches'}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                                        <View style={{width:50}}>
                                            <Text style={{color:'#fff',textAlign:'center'}}>{time.nowMin}:{time.nowSec}</Text>
                                        </View>
                                        <View style={{width:width-120}}>
                                            <Slider
                                                style={{width:width}}
                                                min={0}
                                                max={this.state.totalTime}
                                                defaultValue={this.state.nowProgress}
                                                onChange={value => {
                                                    this.progressChange(value)
                                                }
                                                }
                                            />
                                        </View>
                                        <View style={{width:50}}>
                                            <Text style={{color:'#fff',textAlign:'center'}}>{time.totalMin}:{time.totalSec}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:2,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'sync'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                 <Icon style={{color:'#fff',textAlign:'center',fontSize:40,lineHeight:50}} name={'step-backward'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity onPress={()=>{
                                                if(this.state.player==='play-circle'){
                                                    this.setState({
                                                        player: 'pause-circle',
                                                    });
                                                    this._play();
                                                }else{
                                                    this.setState({
                                                        player: 'play-circle',
                                                    });
                                                    this._pause();
                                                }
                                            }}>
                                                <Icon style={{color:'#fff',textAlign:'center',fontSize:40,lineHeight:50}} name={this.state.player}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity>
                                                <Icon style={{color:'#fff',textAlign:'center',fontSize:40,lineHeight:50}} name={'step-forward'}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: width/5, height: 50}}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                this.refs.son.setModalVisible(true)
                                            }}>
                                                <Icon style={{color:'#fff',textAlign:'center',lineHeight:50}} name={'bars'}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <Provider style={{elevation:99999999}}>
                    <BasicModalExample ref='son'/>
                </Provider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor:'#ccc'
    },
    container2:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor:'rgba(0,0,0,.9)'
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        elevation:9999999
    },
    headLeft:{
        flex: 1,
        justifyContent: 'center',
        color:'#fff'
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color:'#fff'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        color:'rgba(0,0,0,0.6)'
    },
    add: {
        fontSize: 18,
        color: '#fff',
    }
});
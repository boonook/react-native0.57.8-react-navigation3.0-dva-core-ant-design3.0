import React, { Component } from "react";
import { View, Text,StyleSheet,PermissionsAndroid,Dimensions,Platform} from "react-native";
import {
    Icon,
    Button,
    Flex
} from '@ant-design/react-native';
import Echarts from 'native-echarts';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    headLeft:{
        flex: 1,
        justifyContent: 'center',
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    add: {
        fontSize: 18,
        color: '#fff',
    },
    titleView:{
        height:Platform.OS=='ios'?64:44,
        paddingTop:Platform.OS=='ios'?14:0,
        backgroundColor:'#ff6400',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    },

});
export default class MapLocation extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            apple:[2, 4, 7, 2, 2, 7, 13, 16],
            organ: [6, 9, 9, 2, 8, 7, 17, 18],
        }
    }
    render(){
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['苹果','橘子']
            },
            //各种表格
            toolbox: {
                //改变icon的布局朝向
                //orient: 'vertical',
                show : true,
                showTitle:true,
                feature : {
                    //show是否显示表格，readOnly是否只读
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        //折线图  柱形图    总数统计 分开平铺
                        type: ['line', 'bar','stack','tiled'],
                    },

                }
            },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    name : '时间',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '销量(kg)'
                }
            ],
            //图形的颜色组
            color:['rgb(249,159,94)','rgb(67,205,126)'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'苹果',
                    //默认显
                    type:'bar',
                    data:this.state.apple
                },
                {
                    name:'橘子',
                    type:'bar',
                    data:this.state.organ
                }
            ]
        };
        return(
            <View
                style={{
                    flex:1,
                    flexDirection: 'column',
                }}
            >
                <View style={styles.header}>
                    <View style={styles.headLeft}>
                        <Icon style={{color:'rgba(0,0,0,0.6)',paddingLeft:10}} name={'arrow-left'}
                              onPress={()=>{
                                  this.props.navigation.goBack();
                              }}
                        />
                    </View>
                    <View style={styles.flex1}>
                        <Text>统计图</Text>
                    </View>
                    <View style={styles.flex1}>

                    </View>
                </View>
                <View
                    style={{
                        flex:1,
                    }}
                >
                    <Echarts option={option} height={300} width={width}/>
                </View>
            </View>
        )
    }
}
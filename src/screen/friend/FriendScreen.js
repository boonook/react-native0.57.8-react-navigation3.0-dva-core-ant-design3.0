
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image,FlatList,TouchableHighlight,RefreshControl} from 'react-native';
import { DatePicker, List ,Provider,Icon} from '@ant-design/react-native'
export default class FriendScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [{key: 'a1'}, {key: 'b1'},{key: 'a2'}, {key: 'b2'},{key: 'a3'}, {key: 'b3'},{key: 'a4'}, {key: 'b4'},{key: 'a1'}, {key: 'b1'},{key: 'a2'}, {key: 'b2'},{key: 'a3'}, {key: 'b3'},{key: 'a4'}, {key: 'b4'},{key: 'a1'}, {key: 'b1'},{key: 'a2'}, {key: 'b2'},{key: 'a3'}, {key: 'b3'},{key: 'a4'}, {key: 'b4'}],
            nomore: false,
            refreshing: false,
        };
    }

    componentDidMount(){
        this.onEndReachedCalled = false;
    }
    ListFooterComponent=()=>{
        return (
            <View>
                <Text>加载更多...</Text>
            </View>
        );
    }

    ListHeaderComponent=()=>{
        return (
            <View>
                <Text>头部...</Text>
            </View>
        )
    }

    //距离底部不足时触发
    _onEndReached=()=>{
        alert(123)
    }

    _onRefresh=()=>{
        alert(123)
    }

    scrollToIndex=(params)=>{
        alert(params)
    }

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>联系人</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate('FriendAdd')
                        }} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Icon style={{color:'#fff',paddingLeft:10}} name={'usergroup-add'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    ListFooterComponent={this.ListFooterComponent}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.1}///设置底部距离
                    scrollToIndex={this.scrollToIndex}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor={"#ffffff"}
                            onRefresh={() => {
                                this._onRefresh();
                            }}
                        />
                    }
                    data={this.state.data}
                    renderItem={({item}) => <TouchableHighlight style={{paddingTop:2,paddingBottom:5}}><Text style={{lineHeight:30,fontSize:16,backgroundColor:'#2b2b2b'}}>{item.key}</Text></TouchableHighlight>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#0187FB',
        borderBottomWidth: 1,
        borderColor: '#ddd'
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
    title: {
        fontSize: 20,
        color: '#fff'
    },
    add: {
        fontSize: 18,
        color: '#fff',
    },
    container:{
        flex: 1,
    },
    backgroundVideo:{}
});

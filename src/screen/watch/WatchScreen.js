import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    BackHandler,
    TouchableOpacity,
    Image,
    Text,
    ScrollView
} from 'react-native';
import { Button, InputItem, List,Icon,Checkbox } from '@ant-design/react-native';
import Video from 'react-native-video';


export default class WatchScreen extends Component {

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        this.props.navigation.goBack();
        return true;
    };

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
                        <Text style={styles.title}>看点</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate('FriendAdd')
                        }} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Icon style={{color:'#fff',paddingLeft:10}} name={'eye'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{width:'100%'}}>
                        <List>
                            <List.Item>
                                <Text>周杰伦《告白气球》</Text>
                                <Video
                                    source={require('../../assets/video/gbqq.mp4')}
                                    style={styles.fullScreen}
                                />
                            </List.Item>
                        </List>
                    </View>
                </ScrollView>
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
    fullScreen: {
        flex:1,
        flexDirection: 'row',
        height:200,
    },
});
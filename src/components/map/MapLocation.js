import React, { Component } from "react";
import { View, Text,StyleSheet,PermissionsAndroid } from "react-native";
import {
    Icon,
    Button,
    Flex
} from '@ant-design/react-native';
import MapView from 'react-native-maps';
export default class MapLocation extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null, // 隐藏头部
        }
    };

    render(){
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
                        <Text>定位</Text>
                    </View>
                    <View style={styles.flex1}>

                    </View>
                </View>
                 <View style={{marginTop:10}}>
                     <Flex>
                         <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                             <Button type="primary">开始定位</Button>
                         </Flex.Item>
                         <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                             <Button type="primary">结束定位</Button>
                         </Flex.Item>
                     </Flex>
                 </View>
                <View
                    style={{
                        flex:1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                      }}
                >
                    <MapView style={{width:'100%',height:'100%'}}/>
                </View>
            </View>
        )
    }
}

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
    title: {
        fontSize: 20,
        color:'rgba(0,0,0,0.6)'
    },
    add: {
        fontSize: 18,
        color: '#fff',
    }
});
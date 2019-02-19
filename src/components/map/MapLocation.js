import React, { Component } from "react";
import { View, Text,StyleSheet,PermissionsAndroid } from "react-native";
import {
    Icon,
    Button,
    Flex
} from '@ant-design/react-native';
import { Geolocation } from "react-native-amap-geolocation";
export default class MapLocation extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    startLocation=()=>{
        Geolocation.start();
    };

    stopLocation=()=>{
        Geolocation.stop();
    };

    state = { location: {} };

    async componentDidMount() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            await Geolocation.init({
                ios: "9bd6c82e77583020a73ef1af59d0c759",
                android: "043b24fe18785f33c491705ffe5b6935"
            });
            Geolocation.setOptions({
                interval: 10000,
                distanceFilter: 10,
                background: true,
                reGeocode: true
            });
            Geolocation.addLocationListener(location => this.updateLocationState(location));
        } else {
            alert("Location permission denied");
        }
    };

    componentWillUnmount() {
        Geolocation.stop();
    }

    updateLocationState(location) {
        if (location) {
            location.timestamp = new Date(location.timestamp).toLocaleString();
            this.setState({ location });
            console.log(location);
        }
    }

    getLastLocation = async () => this.updateLocationState(await Geolocation.getLastLocation());

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
                             <Button type="primary" onPress={this.startLocation}>开始定位</Button>
                         </Flex.Item>
                         <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                             <Button type="primary" onPress={this.stopLocation}>结束定位</Button>
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
                    <Text>
                        地图
                    </Text>
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
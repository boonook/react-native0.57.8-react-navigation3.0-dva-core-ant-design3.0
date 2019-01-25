/***
 * 轮播图
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Carousel } from '@ant-design/react-native';
export default class CarouselNav extends Component{
    onHorizontalSelectedIndexChange=(index) =>{
        /* tslint:disable: no-console */
        console.log('horizontal change to', index);
    }
    onVerticalSelectedIndexChange=(index)=> {
        /* tslint:disable: no-console */
        console.log('vertical change to', index);
    }
    render(){
        return(
            <View style={{ paddingHorizontal: 15 }}>
                <Text>horizontal</Text>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                    <View
                        style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
                    >
                        <Text>Carousel 1</Text>
                    </View>
                    <View
                        style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
                    >
                        <Text>Carousel 2</Text>
                    </View>
                    <View
                        style={[
                            styles.containerHorizontal,
                            { backgroundColor: 'yellow' },
                        ]}
                    >
                        <Text>Carousel 3</Text>
                    </View>
                    <View
                        style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}
                    >
                        <Text>Carousel 4</Text>
                    </View>
                    <View
                        style={[
                            styles.containerHorizontal,
                            { backgroundColor: 'fuchsia' },
                        ]}
                    >
                        <Text>Carousel 5</Text>
                    </View>
                </Carousel>
                <Text>Carousel will adjust height based on content</Text>
                <Text>{React.Children.count(this.props.children)}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
});
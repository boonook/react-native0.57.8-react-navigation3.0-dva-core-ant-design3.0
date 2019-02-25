import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator,StyleSheet,TouchableOpacity,Image } from "react-native";
import { List, SearchBar,Icon,SwipeAction } from "@ant-design/react-native";

class FlatListDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        const {navigation} = this.props;
        const right = [
            {
                text: 'More',
                onPress: (data) => {
                    alert(data)
                },
                style: { backgroundColor: 'orange', color: 'white' },
            },
            {
                text: 'Delete',
                onPress: () => console.log('delete'),
                style: { backgroundColor: 'red', color: 'white' },
            },
        ];
        return (
                <View>
                    <View style={styles.header}>
                        <View style={styles.flex1}>
                            <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                                <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.title}>好友</Text>
                        </View>
                        <View style={styles.flex1}>
                            <TouchableOpacity
                                onPress={() => this.setState({ state: !this.state.state })}
                                style={{alignSelf:'flex-end',marginRight:10}}>
                                <Icon style={{color:'#fff',paddingLeft:10}} name={'user-add'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <SwipeAction
                                    autoClose
                                    style={{ backgroundColor: 'transparent' }}
                                    right={right}
                                    onOpen={() => console.log('open')}
                                    onClose={() => console.log('close')}
                                >
                                    <List.Item thumb={item.picture.thumbnail}>
                                        {item.name.last}
                                    </List.Item>
                                </SwipeAction>
                            )}
                            keyExtractor={item => item.email}
                            ItemSeparatorComponent={this.renderSeparator}
                            ListHeaderComponent={this.renderHeader}
                            ListFooterComponent={this.renderFooter}
                            onRefresh={this.handleRefresh}
                            refreshing={this.state.refreshing}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={50}
                        />
                    </List>
                </View>
        );
    }
}

export default FlatListDemo;
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
    }
});
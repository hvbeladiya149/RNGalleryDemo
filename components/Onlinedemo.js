import React, { Component } from 'react';
import styles from './style';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImagePicker from 'react-native-image-picker';
import { Container, Header, Content, ListItem, Radio, Right, Icon, Left, Footer, FooterTab, Button } from 'native-base';
import Modal from "react-native-modal";
import {
    StyleSheet,
    View,
    ScrollView, RefreshControl,
    Text,
    Dimensions,
    Easing,
    TouchableHighlight,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';
//import all the components we will need

const listItem = [];
const images = [{
    // Simplest usage.
    url: 'http://www.ncrd.gov.jo/sites/default/files/sample-4_0.jpg',

}]

export default class Onlinedemo extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: {},
            layout: 1,
            column: 2,
            currentImageIndex: 0,
            visibleModal: false,
            gridView: true,
            refreshing: false,
            btnText: 'Show List',
            ic: 'list',
            isLoading: true
        };

        ///this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Online Gallery',
            headerStyle: {
                backgroundColor: '#2c1dec',
            },
            headerTitleStyle: {
                color: '#fff',
                flex: 1,
                textAlign: 'center'
            },
            headerTintColor: '#fff'
        };
    };

    _onRefresh = () => {
        this.setState({ refreshing: true });
        listItem.map((image) => console.log(image))
        this.setState({ refreshing: false });
    }

    componentDidMount() {
        return fetch('http://www.mocky.io/v2/5d14b49d2f00005200c4f385')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    increase = () => {
        this.state.column == 4 ? this.setState({ column: 1, btnText: 'Show Grid', ic: 'apps' }) : this.setState({ column: this.state.column + 1 })
    }

    changeView = () => {
        this.setState({ gridView: !this.state.gridView }, () => {
            if (this.state.gridView) {
                this.setState({ btnText: 'Show List', ic: 'list', column: 2 });
            }
            else {
                this.setState({ btnText: 'Show Grid', ic: 'apps', column: 1 });
            }
        });
    }

    openModal(index) {
        this.setState({ visibleModal: true, currentImageIndex: index })
    }

    _onchangeLayout(setlayout) {
        this.setState({ layout: setlayout })
    }
    render() {
        let ScreenHeight = (Dimensions.get("window").height - 100);

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={styles.MainContainer}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh} />
                    } >

                    <Container>
                        <Content style={{ flex: 1 }}>

                            <Modal
                                isVisible={this.state.visibleModal}
                                onBackdropPress={() => this.setState({ visibleModal: false })}
                            >
                                <ImageViewer imageUrls={this.state.dataSource} index={this.state.currentImageIndex} />
                            </Modal>
                            {
                                this.state.dataSource.length ?

                                    (<FlatList
                                        keyExtractor={(item) => item.id}
                                        key={(this.state.gridView) ? this.state.column : 0}
                                        numColumns={this.state.gridView ? this.state.column : 1}
                                        extraData={this.state}
                                        data={this.state.dataSource}
                                        renderItem={({ item, index }) => (
                                            <View style={{ flex: 1, flexDirection: 'column', margin: 5 }} >
                                                <TouchableOpacity onPress={() => { this.openModal(index) }}>
                                                    <Image style={styles.imageThumbnail} source={{ uri: item.url }} />
                                                </TouchableOpacity>
                                            </View>
                                        )}

                                    />) :
                                    (
                                        <View style={{ flex: 1, height: ScreenHeight, justifyContent: 'center' }}>
                                            <Text style={{ textAlign: 'center', fontSize: 20, alignSelf: 'center' }}>Gallery list is empty</Text>
                                        </View>
                                    )
                            }
                        </Content>
                    </Container>
                </ScrollView>
                <Footer >
                    <FooterTab style={{ backgroundColor: '#2c1dec' }}>
                        <Button onPress={this.changeView}>
                            <Icon name={this.state.ic} style={{ color: '#fff' }} />
                            <Text style={{ color: '#fff' }}>{this.state.btnText}</Text>
                        </Button>
                        {
                            this.state.btnText == 'Show List' &&
                            <Button onPress={this.increase} >
                                <Icon name='arrow-up' style={{ color: '#fff' }} />
                                <Text style={{ color: '#fff' }}>column</Text>
                            </Button>
                        }

                    </FooterTab>
                </Footer>
            </View>
        );
    }
}


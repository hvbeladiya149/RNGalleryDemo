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

export default class Galldemo extends Component {
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
        };

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Gallery Demo',
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


    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            //alert(JSON.stringify(response.fileName));
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                listItem.findIndex(obj => obj.fileName == response.fileName) === -1 ? listItem.push({ url: response.uri, fileName: response.fileName }) : alert("This item already exists");
                this.setState({ dataSource: listItem })
            }
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
                                <ImageViewer imageUrls={listItem} index={this.state.currentImageIndex} />
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
                        <Button onPress={this.selectPhotoTapped.bind(this)}>
                            <Icon name="camera" style={{ color: '#fff' }} />
                            <Text style={{ color: '#fff' }}>Add photo</Text>
                        </Button>

                        <Button onPress={() => { this.props.navigation.navigate('Online') }}>
                            <Text style={{ color: '#fff' }}>Online</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}


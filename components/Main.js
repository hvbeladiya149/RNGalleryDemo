import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react';
import { Modal, FlatList, Text, View, TextInput, StyleSheet, Image, Button, ToastAndroid, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import styles from './style';
import ImageViewer from 'react-native-image-zoom-viewer';


// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const listItem = [];

export class Main extends React.Component {
    state = {
        avatarSource: null,
        videoSource: null,
    };

    state = {
        modalVisible: false,
    };
    constructor(props) {
        super(props);

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    _keyExtractor = (item, index) => index;

    view = () => {
        //alert(listItem);
        listItem.map((image) => alert(image.filename))

    }

    selectPhotoTapped = () => {
        // alert("hello");

        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            // alert(JSON.stringify(response));

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                listItem.push({ filename: response.uri });
                this.setState({ ImageSourceviewarray: listItem })
            }
        });
    }

    _renderItem = ({ item }) => {
        // alert(item.filename)
        return (
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <Image
                    style={{ width: '40%', height: 150 }}
                    source={{ uri: item.filename }}
                />
            </View>
        )

    };

    render() {
        // alert(listItem);
        // const imagecomponent = listItem.map((image) => <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]} > <Image style={styles.avatar} source={{ uri: image }} /> </View>)
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.state.ImageSourceviewarray)}</Text>
                <FlatList
                    data={this.state.ImageSourceviewarray}
                    numColumns={3}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />

                {/* <Modal transparent={true} visible={this.state.modalVisible}>
                    <ImageViewer imageUrls={images} />
                </Modal> */}



                <View style={styles.footer}>
                    <TouchableHighlight style={styles.bottomButtons} onPress={this.selectPhotoTapped.bind(this)}>
                        <Text style={styles.footerText}>Select Photo</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.bottomButtons} onPress={this.view.bind(this)}>
                        <Text style={styles.footerText}>View</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
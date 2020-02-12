import { BackHandler } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React, { Component } from 'react';
import Modal from "react-native-modal";

const images = [{
    // Simplest usage.
    url: 'http://www.ncrd.gov.jo/sites/default/files/sample-4_0.jpg',

}]

export default class Viewzoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleModal: true,
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }


    _hideModal() {
        this.setState({
            visibleModal: false,
        })
    }

    handleBackButtonClick() {

        //alert("hello");
        // this.props.navigation.goBack();
        this.setState({
            visibleModal: false,
        })

        return true;
    }

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick);
    }


    render() {
        return (
            <Modal isVisible={this.state.isModalVisible}>
                <ImageViewer imageUrls={images} />

            </Modal>
        )
    }
}
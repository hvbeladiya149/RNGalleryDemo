import { StyleSheet,PixelRatio } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    viewstyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: 10,
        elevation: 3,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dfdfdf'
    },
    btncontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0
    },
    bcontainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        width: '40%',
        marginLeft: 0
    },
    submit: {
        marginRight: 20,
        marginLeft: 20,
        width: '80%',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f37a1e',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    icstyle: {
        margin: 12,
        color: '#f37a1e',
        fontSize: 20
    },
    viewphone: {
        width: '58%',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dfdfdf',
        elevation: 3
    },
    mainsubmit: {
        marginRight: 40,
        marginLeft: 40,
        width: '80%',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f37a1e',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    validstyle: {
        color: '#de2339',
        textAlign: 'center',
        fontSize: 14
    },
    titleStyle: {
        fontSize: 30,
        marginBottom: 10,
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 3,
        textDecorationLine: 'underline'
    },
    subtitlestyle: {
        fontSize: 16,
        marginBottom: 15,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40
    },
    genderStyle: {
        width: '80%',
        marginBottom: 10,
        elevation: 3,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dfdfdf'
    },
    phonestyle: {
        width: '20%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dfdfdf',
        elevation: 3,
        padding: 10
    },
    viewlaststyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: 10,
        elevation: 3,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dfdfdf'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
    footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'green',
        flexDirection:'row',
        height:80,
        alignItems:'center',
      },
      bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
      },
      footerText: {
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:18,
      },
      textStyle: {
        alignSelf: 'center',
        color: 'orange'
      },
      scrollViewStyle: {
        borderWidth: 2,
        borderColor: 'blue'
      },
      MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        resizeMode: 'cover'
    },

    imageHolder:
    {
        margin: 5,
        height: 160,
        flex: 1,
        position: 'relative'
    },

    image:
    {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
});

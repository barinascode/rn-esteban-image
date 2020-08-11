import React from 'react'
import { Image } from 'react-native'


function index(props){
    
    let styles = {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    }

    if(props.tiny){
        styles.width= 50
        styles.height= 50
    }

    if(props.small){
        styles.width= 70
        styles.height= 70
    }


    if(props.fullRound){
        styles = {
            ...styles,
            borderRadius : 200,
            }
    }

    if(props.round){
        styles = {
            ...styles,
            borderRadius : props.round,
            }
    }


    return ( <Image
        style={styles}
        source={{
        uri : props.uri
    }}/> )
}


export default index


import { Dimensions,Image,Text,ImageBackground,StyleSheet,View,Linking } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import{Ionicons} from 'react-native-vector-icons'

const {width} = Dimensions.get('window')
const IMAGE_WIDHT = width

const TelaDetalhes = (props) =>{
    //console.log(props)
    const data = props.route.params.item
    console.log(data)

    return(
        <ImageBackground
            source={require('../../assets/BG.png')}
            style={estilo.container}
        >
            <SafeAreaView>
                <View style={estilo.cabecalho}>
                    <Ionicons 
                        name='chevron-back'
                        size={40}
                        color='white'
                        onPress={()=>props.navigation.goBack()}
                    />
                    <Text style={estilo.text}>Detalhes</Text>
                </View>
                <Image
                    source={{uri:data.images.original.url}}
                    style={
                        {width:parseFloat(data.images.original.width),
                        height:parseFloat(data.images.original.height)                    
                    }}

                />
                <Text style={estilo.text}>{data.title}</Text>
                <Ionicons 
                    name='globe' 
                    size={40} 
                    color='white'
                    onPress={()=>Linking.openURL(data.images.original.url)}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        color:'white',
        fontSize:22
    },
    cabecalho:{
        flexDirection:'row',
        alignItems:'center'
    },
    // image:{
    //     width:data.images.original.width},
    //     height:data.images.original.height}
    // }
})

export default TelaDetalhes
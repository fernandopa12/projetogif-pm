import { Text,ImageBackground,StyleSheet,View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import{Ionicons} from 'react-native-vector-icons'

const TelaDetalhes = ({navigation}) =>{

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
                        onPress={()=>navigation.goBack()}
                    />
                    <Text style={estilo.text}>Detalhes</Text>
                </View>
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
    }
})

export default TelaDetalhes
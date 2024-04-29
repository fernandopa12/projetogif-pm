import { Text,ImageBackground,StyleSheet,View,FlatList,Image,Dimensions,Keyboard,TouchableOpacity} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from 'react'
import axios from "axios";
import Cabecalho from "../Components/Cabecalho";
import API_KEY from "../API_KEY";
import TextoInfo from "../Components/TextoInfo";

const{width}=Dimensions.get('window')
const IMAGE_WIDTH = width


const TelaResultado = ({route,navigation}) =>{
    const escolha = route.params.escolha;
    const link = `http://api.giphy.com/v1/${escolha}/search`
    const[text,setText]=useState("")
    const[data,setData]=useState([])
    const[mostrarMensagem,setMostrarMensagem]=useState(true)

    
    const solicitar = async (text) =>{
        Keyboard.dismiss()
        try{
            const resultados = await axios.get(link,{
                params:{
                    api_key:API_KEY,
                    q:text,
                    lang:'pt'
                }
            })
            //console.log(resultados.data.data)
            setMostrarMensagem(false)
            setData(resultados.data.data)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground
            source={require('../../assets/BG.png')}
            style={estilo.container}
        >
            <SafeAreaView>
                <Cabecalho 
                    navigation={navigation}
                    text={text}
                    setText={setText}
                    solicitar={solicitar}
                />

                <FlatList 
                    style={{margin:5}}
                    data={data}
                    ListHeaderComponent={
                        <TextoInfo mostrarMsg={mostrarMensagem}/>
                    }
                    numColumns={2}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('TelaDetalhes',{item:item})}
                            >
                                <Image 
                                    source={{uri:item.images.preview_gif.url}}
                                    style={estilo.image}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

            </SafeAreaView>
        </ImageBackground>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1
    },
    cabecalho:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },
    input:{
        backgroundColor:'white',
        flex:1,
        borderRadius:25
    },
    image:{
        width:IMAGE_WIDTH/2,
        height:IMAGE_WIDTH/2,
        margin:5
        
    }
})
export default TelaResultado

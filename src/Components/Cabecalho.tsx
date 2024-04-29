import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

let textoPesquisado = ""

const Cabecalho = ({ navigation, text, setText, solicitar }) => {
    return (
        <View>
            <View style={estilo.cabecalho}>
                <Ionicons
                    name="chevron-back"
                    size={40}
                    color='white'
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    placeholder="Pesquisar"
                    style={estilo.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={text}
                    onChangeText={(value) => setText(value)}
                    onSubmitEditing={() => {
                        solicitar(text)
                        textoPesquisado=text
                    }}
                />
                <Ionicons
                    name='search'
                    size={40}
                    color='white'
                    onPress={() => {
                        solicitar(text)
                        textoPesquisado=text
                    }}
                />
            </View>
            {textoPesquisado!==""?<Text style={{fontSize:20,color:'white'}}>Mostrando resultado para: <Text style={{fontWeight:'bold'}}>{textoPesquisado}</Text></Text> : null}
            
        </View>

    )
}

const estilo = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 25,
        fontSize: 20,
        paddingLeft: 10
    }
})

export default Cabecalho
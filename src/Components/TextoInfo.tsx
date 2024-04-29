import { View, Text } from "react-native";
import React from "react";
import {Ionicons} from 'react-native-vector-icons'

export default function TextoInfo({mostrarMsg}) {
   
    return mostrarMsg ?
        <View style={{ alignItems: 'center' }}>
            <Ionicons name="arrow-up" size={40} color='white' />
            <Text style={{ fontSize: 20, color: 'white' }}>Utilize a barra acima para pesquisa</Text>
        </View>
        :
        null
    
}
import React, { useContext } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_List";

export default({state,navigation})=>{

    const {onOpen} = useContext<any>(AuthContextList)

    const go = (ScreenName:String) =>{
        navigation.navigate(ScreenName)
    } 
    
    return(
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go('Home')}>
                <MaterialIcons
                   name="list-alt"
                   size={25}
                   style={{opacity:state.index ===0?1:0.2,color:themas.colors.icon}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItemButton} onPress={() => onOpen()}>
                <View >
                    <Entypo 
                        name="plus"
                        size={35}
                        color={themas.colors.contraste}
                    />                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={()=>go('User')}>
                <FontAwesome5
                    name="user-circle"
                    size={25}
                    style={{opacity:state.index ===1?1:0.2,color:themas.colors.icon}}
                />
            </TouchableOpacity>
        </View>
    )
}

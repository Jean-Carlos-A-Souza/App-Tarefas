import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
   tabArea:{
      flexDirection: 'row',
      height: 60,
      justifyContent:'space-around',
      shadowColor: "#000",
      shadowOffset: {
            width: 0,
            height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: themas.colors.backgroundAzul
   },
   tabItem:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center'

   },
   tabItemButton:{
      width: 55,
      height: 55,
      borderRadius: 35,
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      zIndex:9999,
      backgroundColor: themas.colors.botaoIntenso,
      top: -25
   },
})
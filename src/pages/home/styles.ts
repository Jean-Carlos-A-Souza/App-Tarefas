import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    },
    header:{
        width:'100%',
        height: Dimensions.get('window').height/7,
        justifyContent:'center',
        backgroundColor:themas.colors.backgroundAzul
    },
    boxInput:{
            width: '90%',
            height: 45,
            borderRadius: 15,
            borderWidth: 1.5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: themas.colors.white,
            marginHorizontal:'5%',
            marginTop:'10%'
        },
    input:{
        width: '92%',
        height: '100%',
        borderRadius: 15,
    },
    boxList:{
        flex:1,
        width:'100%',
    },
    filterContainer: {
      flexDirection: "row",
      flexWrap: "wrap",  
      justifyContent: "center",  
      gap: 5, 
      marginVertical: 5,
      marginTop:10,
      paddingHorizontal: 10,
    }, 
    filterButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: themas.colors.icon,
    },
      
    filterButtonActive: {
        backgroundColor: themas.colors.backgroundAzul,
    },
      
    filterText: {
        fontSize: 14,
        color: themas.colors.icon,
    },
      
    filterTextActive: {
        color: themas.colors.texto,
        fontWeight: "bold",
    },  
})
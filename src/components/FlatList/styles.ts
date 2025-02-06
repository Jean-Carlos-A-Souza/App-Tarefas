import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: themas.colors.background, 
      },
      card: {
        backgroundColor: themas.colors.white,
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themas.colors.texto,
      },
      body: {
        fontSize: 14,
        color: themas.colors.textoSuave,
        marginTop: 5,
      },
      data: {
        fontSize: 15,
        color: themas.colors.texto,
        marginTop: 5,
      },
      localItem:{
        backgroundColor: themas.colors.input_background

      },
}) 
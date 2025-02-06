
import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.background
    },
    posTop:{
        height:'30%',
        width:'100%',   
        alignItems:'center',
        justifyContent: 'center',
    },
    posMid:{
        height:'35%',
        width:'100%',
        
    },
    posBottom:{
        height:'35%',
        width:'100%',
        alignItems:'center',
    },
    logo:{
        width: 100,
        height: 100,
        marginBottom: '2%',
        marginTop: '20%',
    },
    titulo:{
        fontSize: 24,
        marginBottom: '2%'
    },
    texto:{
        fontSize: 18,
        color: themas.colors.textoSuave,
        marginTop: '5%',
        marginLeft: '10%',
        marginBottom: '2%'
    },
    boxInput:{
        width: '80%',
        height: 45,
        borderRadius: 15,
        borderWidth: 1.5,
        flexDirection: 'row',
        marginLeft: '10%',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.input_background
    },
    input:{
        width: '90%',
        height: '100%',
        borderRadius: 15,
    },
    button:{
        width: 250,
        height: 50,
        borderRadius: 20,
        backgroundColor: themas.colors.botaoIntenso,
        alignItems:'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    textButton:{
        fontSize: 16,
        color: themas.colors.white,
        fontWeight: 'bold',
    },
    textCadastro:{
        fontSize: 16,
        opacity: 0.7,
        color: themas.colors.textoSuave,
        marginTop: '4%'
    },
    textForgot:{
        marginTop: '2%',
        textAlign: 'right',
        marginHorizontal: '10%',
        fontSize: 16,
        opacity: 0.7,
    },
    erroText:{
        color: 'red', 
        fontSize: 14, 
        marginTop: 5,
        textAlign: 'left',
        marginHorizontal: '10%',
        opacity: 0.6, 
    },
    modalContainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.2)' 
    },
    modalView:{
        backgroundColor: themas.colors.white, 
        padding: 20, 
        borderRadius: 10, 
        alignItems: 'center' 
    },
    modalText:{
        fontSize: 18, 
        fontWeight: 'bold', 
        color: themas.colors.botaoIntenso
    }
  }
);
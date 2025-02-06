import React, { useState } from "react";
import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Modal
} from 'react-native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { style } from './styles';
import logo from '../../assets/logo_128x128.png';
import { themas } from "../../global/themes";

import { useNavigation,NavigationProp} from '@react-navigation/native'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [senhaVis, setSenhaVis] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
    const navigation = useNavigation<NavigationProp<any>>();

    const validaEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const ajustaVisualizarSenha = () => {
        setSenhaVis(!senhaVis);
    };

    const avisoSemFuncao = () =>{
        Alert.alert('Desculpe, ainda não esta pronto.')
    };

    const validaLogin = () => {
        if (!loading) {
            let valido = true;
            setLoading(true);

            if (!email || ! validaEmail(email)) {
                setEmailError(true);
                valido = false;
                setLoading(false);
            } else {
                setEmailError(false);
            }

            if (!senha) {
                setSenhaError(true);
                valido = false;
                {style.erroText}
                setLoading(false);
            } else {
                setSenhaError(false);
            }

            if (valido) {
                setTimeout(() => {
                    if (email == 'teste@gmail.com' && senha == '123456'){
                        setModalVisible(true);

                        setTimeout(() => {   
                            setModalVisible(false);
                            navigation.reset({routes:[{name:"BottomRoutes"}]});
                        },2000)
                        
                    }else{
                    Alert.alert('E-mail ou senha incorretos. Verifique os dados e tente novamente.');
                    }

                    setLoading(false);
                }, 3000)
            } 
        }
    };

    return (
        <View style={style.container}>
            <View style={style.posTop}>
                <Image 
                    source={logo} 
                    style={style.logo}              
                    resizeMode="contain"
                />
                <Text style={style.titulo}>Bem Vindo ao TaskApp</Text>
            </View>

            <View style={style.posMid}>
                <Text style={style.texto}>E-mail</Text> 
                <View style={[style.boxInput, emailError && { borderColor: 'red', borderWidth: 1 }]}>
                    <TextInput 
                        placeholder="E-mail"
                        style={style.input} 
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={emailError ? 'red' : themas.colors.icon}
                    />
                </View> 
                
                {emailError && <Text style={style.erroText}>{'Informe um e-mail válido'}</Text>}

                <Text style={style.texto}>Senha</Text> 
                <View style={[style.boxInput, senhaError && { borderColor: 'red', borderWidth: 1 }]}>
                    <TextInput 
                        placeholder="Senha"
                        style={style.input}                    
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={!senhaVis}
                    />
                    <TouchableOpacity onPress={ajustaVisualizarSenha}>
                        <Ionicons 
                            name={senhaVis ? 'eye' : 'eye-off-sharp'}
                            size={20}
                            color={senhaError ? 'red' : themas.colors.icon}
                        />
                    </TouchableOpacity>
                </View>
                {senhaError && <Text style={style.erroText}>A senha é obrigatória</Text>}

                <TouchableOpacity onPress={avisoSemFuncao}>
                    <Text style={style.textForgot}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <View style={style.posBottom}>
                <TouchableOpacity style={loading ? {backgroundColor: themas.colors.botaoInativo, width: 250, height: 50,  borderRadius: 20, justifyContent: 'center'} : style.button} onPress={validaLogin}>
                    {
                        loading?
                            <ActivityIndicator color={themas.colors.white} size={"small"}/>
                        :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={avisoSemFuncao}>
                    <Text style={style.textCadastro}>
                        Não possui uma conta? <Text style={{ color: themas.colors.botaoIntenso }}>Crie agora.</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>Login realizado com sucesso.</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

import React, { createContext, useContext, useRef, useState } from "react"; 
import {
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { Modalize } from "react-native-modalize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../global/themes";

export const AuthContextList = createContext<{
    onOpen: () => void;
    refreshList: boolean; 
    setRefreshList: React.Dispatch<React.SetStateAction<boolean>>; 
}>({
    onOpen: () => {},
    refreshList: false, 
    setRefreshList: () => {}, 
});

export const AuthProviderList = (props: any) => {
    const modalizeRef = useRef<Modalize>(null);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');

    const [refreshList, setRefreshList] = useState(false);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const onClose = () => {
        setTitulo('');
        setDescricao('');
        setData('');
        modalizeRef.current?.close();
        setRefreshList((prev) => !prev);
    }

    const salvarTarefa = async () => {
        if (!titulo.trim() || !descricao.trim() || !data.trim()) {
            Alert.alert("Erro", "Preencha todos os campos antes de salvar.");
            return;
        }
        try {
            const storedData = await AsyncStorage.getItem('@modalData');
            let tarefas = storedData ? JSON.parse(storedData) : [];
    
            if (!Array.isArray(tarefas)) {
                tarefas = [];
            }
    
            const novaTarefa = {
                id: Date.now(), 
                title: titulo,
                body: descricao,
                status: false,
                date: data,
            };
    
            tarefas.push(novaTarefa); 
    
            await AsyncStorage.setItem('@modalData', JSON.stringify(tarefas));
    
            Alert.alert("Sucesso", "Tarefa salva com sucesso!");            

            onClose();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar a tarefa.");
        }
     };

    const formatarData = (text: string) => {
        let cleaned = text.replace(/\D/g, '');
        cleaned = cleaned.slice(0, 8);
        let formatted = '';

        if (cleaned.length > 0) {
            formatted = cleaned.slice(0, 2);
        }
        if (cleaned.length > 2) {
            formatted += '/' + cleaned.slice(2, 4);
        }
        if (cleaned.length > 4) {
            formatted += '/' + cleaned.slice(4, 8);
        }

        setData(formatted);
    };

    const area = () => {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardContainer}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Criação de tarefa</Text>
                        <TouchableOpacity onPress={onClose}>
                            <MaterialIcons name="close" size={35} color={themas.colors.red} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.label}>Título</Text>  
                        <TextInput
                            style={styles.input}
                            value={titulo}
                            onChangeText={setTitulo}
                        />
                        <Text style={styles.label}>Descrição</Text>  
                        <TextInput
                            style={[styles.input, styles.descricaoInput]}
                            value={descricao}
                            onChangeText={setDescricao}
                            multiline
                            numberOfLines={4}
                        />
                        <Text style={styles.label}>Data</Text>
                        <TextInput
                            style={[styles.input, styles.dataInput]}
                            value={data}
                            onChangeText={formatarData} 
                            placeholder="DD/MM/AAAA"
                            keyboardType="numeric"
                            maxLength={10} 
                        />
                        <TouchableOpacity style={styles.saveButton} onPress={salvarTarefa}>
                            <Text style={styles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    return (
        <AuthContextList.Provider value={{ onOpen, refreshList, setRefreshList }}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                adjustToContentHeight={true}
                keyboardAvoidingBehavior="padding"
                modalStyle={styles.modalStyle}
                onClosed={() => {
                    setTitulo('');
                    setDescricao('');
                    setData('');
                }}
            >
                {area()} 
            </Modalize>
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    modalStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 20, 
    },
    container: {
        padding: '5%',
    },
    header: {
        flexDirection: 'row',
        width:'100%'
    },
    titulo:{
        color: themas.colors.azulTitulo,
        fontSize: 24,
        width:'90%'
    },
    content: {
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: themas.colors.azulLabel,
    },
    input: {
        width: '100%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: themas.colors.botaoInativo,
        paddingHorizontal: 10,
        backgroundColor: themas.colors.white,
        marginBottom: 15,
    },
    descricaoInput: {
        height: 100, 
        textAlignVertical: 'top', 
    },
    saveButton: {
        backgroundColor: themas.colors.botaoIntenso,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: themas.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    dataInput: {
        width: '40%', 
        textAlign: 'center',
    },
});

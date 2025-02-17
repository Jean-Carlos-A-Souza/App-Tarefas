import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { style } from './styles';
import { themas } from '../../global/themes';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const EditTask = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params as { task: any };

  const getCurrentDate = () => {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR');
  };

  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);
  const [status, setStatus] = useState(task.status);
  const [data, setData] = useState(task.date || getCurrentDate()); 

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

  const saveTask = async () => {
    if (!title.trim() || !body.trim() || !data.trim()) {
        Alert.alert("Erro", "Preencha todos os campos antes de salvar.");
        return;
    }

    try {
      const savedData = await AsyncStorage.getItem('@modalData');
      let tasks = savedData ? JSON.parse(savedData) : [];

      tasks = tasks.map((item: any) => 
        item.id === task.id ? { ...item, title, body, status, date: data } : item
      );

      await AsyncStorage.setItem('@modalData', JSON.stringify(tasks));
      Alert.alert("Sucesso", "Tarefa atualizada!");
      navigation.goBack(); 

    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a tarefa.");
    }
  };

  const deleteTask = async () => {
    Alert.alert(
        "Confirmação", 
        "Você realmente deseja excluir esta tarefa?",
        [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Confirmar",
                onPress: async () => {
                    try {
                        const savedData = await AsyncStorage.getItem('@modalData');
                        let tasks = savedData ? JSON.parse(savedData) : [];

                        tasks = tasks.filter((item: any) => item.id !== task.id);

                        await AsyncStorage.setItem('@modalData', JSON.stringify(tasks));
                        Alert.alert("Sucesso", "Tarefa excluída!");
                        navigation.goBack();

                    } catch (error) {
                        Alert.alert("Erro", "Não foi possível excluir a tarefa.");
                    }
                }
            }
        ]
    );
};


  return (
    <SafeAreaView style={style.safeContainer}>
      <ScrollView>
        <View style={style.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
            <MaterialIcons
                  name="arrow-back-ios"
                  size={20}
                  color={themas.colors.botaoIntenso}
            />
            <Text style={style.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <Text style={style.label}>Título</Text>
          <TextInput 
            style={style.input} 
            value={title} 
            onChangeText={setTitle} 
          />

          <Text style={style.label}>Descrição</Text>
          <TextInput 
            style={[style.input, style.textArea]} 
            value={body} 
            onChangeText={setBody} 
            multiline 
          />

          <Text style={style.label}>Data</Text>
          <TextInput
            style={[style.input, {width: '40%'}]}
            value={data}
            onChangeText={formatarData} 
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            maxLength={10} 
          />

          <Text style={style.label}>Status</Text>
          <View style={style.radioGroup}>
            <TouchableOpacity 
              style={[style.radioButton, status && style.radioConcluido]} 
              onPress={() => setStatus(true)}
            >
              <Text>Concluída</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[style.radioButton, !status && style.radioNConcluido]} 
              onPress={() => setStatus(false)}
            >
              <Text>Não Concluída</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={style.saveButton} onPress={saveTask}>
            <Text style={style.saveButtonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.deleteButton} onPress={deleteTask}>
            <Text style={style.deleteButtonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTask;

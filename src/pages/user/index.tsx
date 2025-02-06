import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { style } from './styles';

const UserScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = async () => {
    Alert.alert(
      "Sair do aplicativo",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: async () => {
            navigation.reset({routes:[{name:"Login"}]});
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={style.safeContainer}>
        <View style={style.container}>
        <Text style={style.title}>Configurações</Text>

        <View style={style.section}>
            <Text style={style.label}>Versão do Aplicativo</Text>
            <Text style={style.info}>1.0.0</Text>
        </View>

        <View style={style.section}>
            <Text style={style.label}>Sobre</Text>
            <Text style={style.description}>
            Este é um aplicativo de gerenciamento de tarefas que ajuda você a organizar 
            seu dia a dia de forma simples e intuitiva.
            </Text>
        </View>

        <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
            <Text style={style.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default UserScreen;

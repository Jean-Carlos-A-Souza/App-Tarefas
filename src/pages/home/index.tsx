import React, { useCallback, useEffect, useState } from "react";

import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

import api from "../../connection/api";
import PostList from "../../components/FlatList";

import { useAuth } from "../../context/authContext_List";

interface Post {
    id: number;
    title: string;
    body: string;
    status?: boolean; 
    date?: string; 
  }

export default function Home(){

    const [data, setData] = useState<Post[]>([]);
    const [pesquisa, setPesquisa] = useState('');
    const [loading, setLoading] = useState(true);
    const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");

    const { refreshList } = useAuth();

    const FILTER_OPTIONS = ["Todos", "Concluídos", "Em Andamento", "Em Atraso"];

    const fetchData = async () => {
      try {
          setLoading(true);
          const response = await api.get('posts');

          if (response?.data) {
              const finalData = Array.isArray(response.data) ? response.data : Object.values(response.data);
              setData(finalData);
          }
      } finally { 
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchData();
  }, [refreshList]);

     <View style={style.filterContainer}>
        {FILTER_OPTIONS.map((filter) => (
          <TouchableOpacity
              key={filter}
              style={[
                style.filterButton,
                filtroSelecionado === filter ? style.filterButtonActive : {}
              ]}
              onPress={() => setFiltroSelecionado(filter)}
          >
            <Text
              style={[
                style.filterText,
                filtroSelecionado === filter ? style.filterTextActive : {}
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    
    return(
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.boxInput}>
                    <MaterialIcons
                        name="search"
                        size={20}
                        color={themas.colors.icon}
                    />
                    <TextInput 
                        placeholder="Pesquisa ..."
                        style={style.input} 
                        value={pesquisa}
                        onChangeText={setPesquisa}
                        autoCapitalize="none"
                    />
                    
                </View>
            </View>
            <View style={style.filterContainer}>
            {FILTER_OPTIONS.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  style.filterButton,
                  filtroSelecionado === filter ? style.filterButtonActive : {}
                ]}
                onPress={() => setFiltroSelecionado(filter)}
              >
                <Text
                  style={[
                    style.filterText,
                    filtroSelecionado === filter ? style.filterTextActive : {}
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
      </View>
            <View style={style.boxList}>
                <View style={{ flex: 1 }}>
                     {loading ? <ActivityIndicator size="large" color="#000" /> : <PostList data={data} pesquisa={pesquisa} filtroSelecionado={filtroSelecionado} />}
                </View>
            </View>
        </View>
    )
}

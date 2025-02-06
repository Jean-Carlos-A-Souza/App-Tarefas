import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect, NavigationProp } from "@react-navigation/native";
import { style } from "./styles";
import { themas } from "../../global/themes";

interface Post {
  id: number;
  title: string;
  body: string;
  date?: string;
  isLocal?: boolean;
  status?: boolean;
}

interface PostListProps {
  data: Post[];
  pesquisa: string;
  filtroSelecionado: string;
}

const PostList: React.FC<PostListProps> = ({ data, pesquisa, filtroSelecionado }) => {
  const [mergedData, setMergedData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp<any>>();

  const loadLocalData = async () => {
    try {
      setLoading(true);
      const savedData = await AsyncStorage.getItem("@modalData");

      let localItems: Post[] = [];

      if (savedData) {
        let parsedData = JSON.parse(savedData);
        if (!Array.isArray(parsedData)) parsedData = [parsedData];

        localItems = parsedData.map((item: any, index: any) => ({
          id: item.id ?? Date.now() + index,
          title: item.title ?? item.titulo ?? "Sem título",
          body: item.body ?? item.descricao ?? "Sem conteúdo",
          date: item.date ?? "",
          isLocal: true,
          status: item.status ?? false
        }));
      }

      setMergedData([...localItems, ...data]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadLocalData();
    }, [data])
  );

  const filteredData = mergedData.filter((item) => {
    const { incluirNoFiltro } = getStatusInfo(item, filtroSelecionado);
    return incluirNoFiltro && (
      item.title.toLowerCase().includes(pesquisa.toLowerCase()) ||
      item.body.toLowerCase().includes(pesquisa.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={style.container}>
      {loading ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>Carregando...</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { backgroundColor } = getStatusInfo(item, filtroSelecionado);
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.isLocal) {
                    navigation.navigate("EditTask", { task: item });
                  }
                }}
                style={[style.card, { backgroundColor }]}
              >
                <Text style={style.title}>{item.title || "Sem título"}</Text>
                <Text style={style.body}>{item.body || "Sem conteúdo"}</Text>
                {item.date && <Text style={style.data}>Data: {item.date}</Text>}
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const getStatusInfo = (item: Post, filtroSelecionado: string) => {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  let backgroundColor = themas.colors.white; 
  let incluirNoFiltro = false;

  if (item.status) {
    backgroundColor = themas.colors.cardFinalizado;
  } else if (item.date) {
    const [dia, mes, ano] = item.date.split('/').map(Number);
    const dataItem = new Date(ano, mes - 1, dia);
    dataItem.setHours(0, 0, 0, 0);

    if (dataItem > hoje) {
      backgroundColor = themas.colors.cardRegular;
    } else {
      backgroundColor = themas.colors.cardAtraso;
    }
  }

  if (filtroSelecionado === "Todos") {
    incluirNoFiltro = true; 
  } else if (filtroSelecionado === "Concluídos" && item.status) {
    incluirNoFiltro = true;
  } else if (filtroSelecionado === "Em Andamento" && !item.status && item.date) {
    const [dia, mes, ano] = item.date.split('/').map(Number);
    const dataItem = new Date(ano, mes - 1, dia);
    dataItem.setHours(0, 0, 0, 0);

    if (dataItem > hoje) {
      incluirNoFiltro = true;
    }
  } else if (filtroSelecionado === "Em Atraso" && !item.status && item.date) {
    const [dia, mes, ano] = item.date.split('/').map(Number);
    const dataItem = new Date(ano, mes - 1, dia);
    dataItem.setHours(0, 0, 0, 0);

    if (dataItem <= hoje) {
      incluirNoFiltro = true;
    }
  }

  return { backgroundColor, incluirNoFiltro };
};



export default PostList;

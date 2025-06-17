import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCategoryViewModel } from "../viewmodels/CategoryViewModel";
import { Category } from "../models/Category";

const CategoryScreen = () => {
  const { categories, loading } = useCategoryViewModel();
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Product", { categoryId: item.id })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photos from API</Text>
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ff52f7", paddingTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 10 },
  list: { padding: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef1ff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
  },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  textContainer: { flex: 1 },
  id: { fontWeight: "600", fontSize: 16 },
  name: { fontSize: 18, fontWeight: "bold" },
  arrow: { fontSize: 24, color: "#999" },
});

export default CategoryScreen;

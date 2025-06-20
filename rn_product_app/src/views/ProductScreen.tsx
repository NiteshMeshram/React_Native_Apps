
/*

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useProductViewModel } from "../viewmodels/ProductViewModel";
import { Product } from "../models/Product";

const ProductScreen = ({ route }: any) => {
  const { categoryId } = route.params;
  const { products, loading } = useProductViewModel(categoryId);



  const renderItem = ({ item }: { item: Product }) => (
    <>
      <View style={styles.textContainer}>

        <Text style={styles.title}>{item.name}</Text>
      </View>
    </>


  );
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Count: {products.length}</Text>

 {loading ? <Text>Loading...</Text> : (
        <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No products found</Text>}
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
  textContainer: { flex: 1, paddingLeft: 10, },
  id: { fontWeight: "600", fontSize: 16 },
  name: { fontSize: 18, fontWeight: "bold" },
  arrow: { fontSize: 24, color: "#999" },
});

export default ProductScreen;


*/

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useProductViewModel } from "../viewmodels/ProductViewModel";
import { Product } from "../models/Product";
import RemoteImage from "../components/RemoteImage";

const ProductScreen = ({ route }: any) => {
  const { categoryId } = route.params;
  const { products, loading } = useProductViewModel(categoryId);

  const renderItem = ({ item }: { item: Product }) => (
    <>
      <RemoteImage
        uri={item.images[0].toString()}
        style={{ width: 80, height: 80, borderRadius: 8 }}
        resizeMode="cover"

      />

      <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.title}</Text>
      </View>
    </View>
    </>
    
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Count: {products.length}</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text>No products found</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ProductScreen;

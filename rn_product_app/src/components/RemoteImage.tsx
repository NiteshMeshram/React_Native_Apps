// src/components/RemoteImage.tsx

import React, { useState } from "react";
import { ImageStyle, StyleProp, ActivityIndicator, View, StyleSheet, ImageSourcePropType } from "react-native";
import { Asset } from 'expo-asset';
import { Image } from 'expo-image';

interface RemoteImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

const fallbackImage = Asset.fromModule(require("../../assets/assets_fallback.png")).uri;


const RemoteImage: React.FC<RemoteImageProps> = ({ uri, style, resizeMode = "cover" }) => {
  const [loading, setLoading] = useState(true);

   const [hasError, setHasError] = useState(false);

  const source = hasError ? { uri: fallbackImage } : { uri };



  return (
    <View style={[styles.container, style]}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#999" />
        </View>
      )}
      <Image
         source={source}
        style={[StyleSheet.absoluteFillObject, style]}
        resizeMode={resizeMode}
        onLoadEnd={() => setLoading(false)}
         onError={() => {
          setHasError(true);
          setLoading(false);
        }}
      />
    </View>
  );
};

export default RemoteImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  loader: {
    position: "absolute",
    zIndex: 1,
  },
});

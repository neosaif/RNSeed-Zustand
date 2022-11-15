
import React from "react";
import { View, Image, Text, Button } from "react-native";
import { page3Styles } from "./Page3.style";
import { IProductCard } from "../../interfaces";

export const ProductCard = ({
  title,
  image,
  id,
  isInCart,
  onRemove,
  onAdd,
}: IProductCard) => {  
  return (
    <View style={page3Styles.card} key={id}>
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={page3Styles.image}
      />
      <View style={page3Styles.row}>
        <Text style={{width:'50%'}}>{title}</Text>
        {isInCart ? (
          <Button title="Remove from Cart" onPress={() => onRemove(id)} />
        ) : (
          <Button title="Add to Cart" onPress={() => onAdd(id)} />
        )}
      </View>
    </View>
  );
};
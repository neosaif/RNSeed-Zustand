import { View, Text, Image, Button } from "react-native";
import { page4Styles } from "./Page4.style";
import { ICartRow } from "../../interfaces";

export const CartRow = ({ image, title, id, onRemove }: ICartRow) => {
  return (
    <View style={page4Styles.cartRow}>
      <Image
        source={{ uri: image }}
        style={page4Styles.cartImage}
        resizeMode="contain"
      />
      <View style={page4Styles.content}>
        <Text>{title}</Text>
        <Button title="Remove from Cart" onPress={() => onRemove(id)} />
      </View>
    </View>
  );
};
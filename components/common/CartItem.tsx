import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Pet } from "@/types/pet";


type Props = {
    item: Pet;
    onRemove: () => void;
}

export default function CartItem({ item, onRemove }: Props) {
    return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>Breed: {item.breed}</Text>
        <Text>Age: {item.age}</Text>
        <Text style={styles.price}>₹{item.price}</Text>

        <TouchableOpacity style={styles.removeBtn} onPress={onRemove}>
          <Text style={styles.removeText}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    elevation: 3,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    marginTop: 4,
    fontWeight: "bold",
    color: "#2563eb",
  },
  removeBtn: {
    marginTop: 10,
    backgroundColor: "#ef4444",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  removeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
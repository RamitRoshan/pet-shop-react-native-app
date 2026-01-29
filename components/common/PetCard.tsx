import { useCartStore } from "@/store/cartStore";
import { Pet } from "@/types/pet";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from "react-native";

 

 
//this is a simple card component to display pet information and it is a interface for the pet object
type Props = {
    pet: Pet;
};

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 3,
    },
    image: {
        height: 160,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});


export default function PetCard({pet}: Props) {

    const addToCart = useCartStore((state) => state.addToCart);

    const router = useRouter();

    const handleAdd = () => {
        addToCart(pet);

        Alert.alert (
            "Added to Cart 🛒",
            `${pet.name} added successfully`,
            [
                {
                    text: "Go to Cart",
                    onPress: () => router.push('../cart'),
                },
                {text: "Ok"},
            ]
        )
    }

    return (
        <View style={styles.card}>

            {/* uri is used to load image from a remote url */}
            <Image source={{uri: pet.image}} style={styles.image}/>

            <Text style={styles.title}>{pet.name}</Text>
            <Text>Breed: {pet.breed}</Text>
            <Text>Age: {pet.age}</Text>
            <Text>Price: ₹{pet.price}</Text>

            {/* <Button title="Add to Cart" onPress={() => addToCart(pet)} /> */}
            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );    
}


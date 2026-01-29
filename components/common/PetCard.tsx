import { useCartStore } from "@/store/cartStore";
import { Pet } from "@/types/pet";
import { Text, View, StyleSheet, Image, Button } from "react-native";

 

 
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
});


export default function PetCard({pet}: Props) {

    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <View style={styles.card}>

            {/* uri is used to load image from a remote url */}
            <Image source={{uri: pet.image}} style={styles.image}/>

            <Text style={styles.title}>{pet.name}</Text>
            <Text>Breed: {pet.breed}</Text>
            <Text>Age: {pet.age}</Text>
            <Text>Price: ₹{pet.price}</Text>

            <Button title="Add to Cart" onPress={() => addToCart(pet)} />
        </View>
    );
}
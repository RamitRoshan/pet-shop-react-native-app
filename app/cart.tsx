import { useCartStore } from "@/store/cartStore";

import { Text, View, FlatList, Button } from "react-native";
 

export default function CartScreen() {

    // we use useCartStore hook to access cart state and actions. useCartStore is a custom hook created using Zustand for state management.
    const {cart, removeFromCart} = useCartStore();

    // here we calculate the total price of all pets in the cart using reduce method
    const total = cart.reduce((sum, p) => {
        return sum + p.price;
    }, 0);


    return (
        <View style={{padding: 20}}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Cart</Text>

            <FlatList
               data={cart}
            //    we use keyExtractor to provide a unique key for each item in the list
               keyExtractor={(item) => item.id}

               renderItem = {({item}) => (

                <View style={{ marginVertical: 10}}>
                    <Text>{item.name}</Text>
                    <Text>₹{item.price}</Text>
                    <Button title="Remove" onPress={() => removeFromCart(item.id)} />
                </View>

               )}
            />

            <Text style={{fontSize: 18, marginTop: 20}}>
                Total: ₹{total}
            </Text>
        </View>
    );
}
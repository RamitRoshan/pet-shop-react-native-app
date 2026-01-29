import { Text, View, FlatList, StyleSheet } from "react-native";
import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/common/CartItem";

 

export default function CartScreen() {

    // we use useCartStore hook to access cart state and actions. useCartStore is a custom hook created using Zustand for state management.
    const {cart, removeFromCart, getTotal} = useCartStore();

    // here we calculate the total price of all pets in the cart using reduce method
    // const total = cart.reduce((sum, p) => {
    //     return sum + p.price;
    // }, 0);

    if(cart.length === 0){
        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
       

            <FlatList
               data={cart}
            //    we use keyExtractor to provide a unique key for each item in the list
               keyExtractor={(item) => item.id}

               renderItem = {({item}) => (

                 <CartItem
                    item={item}
                    onRemove={() => removeFromCart(item.id)}
                 />

               )}
            />

            <View style={styles.footer}>
                <Text style={styles.total}>Total: ₹{getTotal()}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  footer: {
    borderTopWidth: 1,
    paddingTop: 12,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "gray",
  },
});
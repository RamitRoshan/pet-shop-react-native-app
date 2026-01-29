import { TouchableOpacity, Text, StyleSheet } from "react-native";

type props = {
    title: string;
    onPress: () => void;
}


export default function AppButton({ title, onPress }: props) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        borderRadius: 10,
        marginVertical: 6,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
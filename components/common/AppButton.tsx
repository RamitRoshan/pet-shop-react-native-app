import { TouchableOpacity, Text, StyleSheet} from "react-native";
 

type props = {
    title: string;
    onPress: () => void;
    disabled ?: boolean;
}


export default function AppButton({ title, onPress, disabled }: props) {

    return (
         <TouchableOpacity
            style={[
               styles.button,
               //opacity controls how transparent something looks
               disabled && { opacity: 0.6 },
            ]}
           onPress={onPress}
           disabled={disabled}
           activeOpacity={0.8}
        >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        borderRadius: 10,
        marginVertical: 12,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
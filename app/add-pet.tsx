import { Alert, Text, View, TextInput, StyleSheet, Button , Image} from "react-native";
import { useState } from "react";
import {router} from "expo-router";
import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { submitPet } from "@/api/petApi"; 
import { pickImage } from "@/utils/imagePicker";
import { Pet } from "@/types/pet";



const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    breed: z.string().min(2, "Breed must be at least 2 characters"),
    age: z.string().min(1, "Age is required"),
    price: z.string().min(1, "Price is required"),
});

export default function AddPetScreen() {

    // we use <string | null> to specify that image can be a string or null
    const [image, setImage] = useState<string| null>(null);
    // we use loading state to indicate whether the image is being loaded
    const [loading , setLoading] = useState(false);


    // we use useForm hook to manage form state and validation
    const { register, setValue, handleSubmit, formState:{errors},} = useForm({
        resolver: zodResolver(schema),
    });

    // onSubmit event handler for form submission
    const onSubmit = async (data: any) => {
        // validate that an image has been selected
        if(!image){
            Alert.alert("Please select an image for the pet");
            return;
        }
    


    // we use the Pet type to define the structure of the pet object
    const pet: Pet = {
        // we use Date.now().toString() to generate a unique id for the pet
        id: Date.now().toString(),
        name: data.name,
        breed: data.breed,
        age: Number(data.age),
        price: Number(data.price),
        image,
    };


    try{
        setLoading(true);
        await submitPet(pet);
        Alert.alert("Pet added successfully");
        // we use router.back() to navigate back to the previous screen
        router.back();
        
    } catch (error) {
        Alert.alert("Failed to add pet. Please try again.");

        // finallly is used to set loading to false regardless of success or failure
    } finally{
        setLoading(false);
    }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Pet</Text>

            <Button title="Select Image" onPress={async() => setImage(await pickImage())} />

                {/* we use this to conditionally render the image only if it exists */}
             {image && <Image source={{ uri: image }} style={styles.image} />}



             <TextInput
                placeholder="Pet Name"
                style={styles.input}
                // updates the "name" field value whenever user types in the input
                onChangeText={(text) => setValue("name", text)}
             />
             {/* show validation error message only if name field has an error */}
             {errors.name && <Text>{errors.name.message}</Text>}

             <TextInput
                placeholder="Breed"
                style={styles.input}
                // we use onChangeText to update the breed field in the form state
                onChangeText={(text) => setValue("breed", text)}
             />

             <TextInput
                placeholder="Age"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={(text) => setValue("age", text)}
             />

             <TextInput
                placeholder="Price"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={(text) => setValue("price", text)}
             />

             {/* we use loading state to disable the button and show submitting text while the form is being submitted */}
             <Button title={loading ? "Submitting..." : "Submit"} onPress={handleSubmit(onSubmit)} />

        </View>
    );
}


const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 10},
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 8,
        borderRadius: 6,
    },
    image: {
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
});
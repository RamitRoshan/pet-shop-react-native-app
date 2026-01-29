import { Alert, Text, View, TextInput, StyleSheet, Image, ScrollView,} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitPet } from "@/api/petApi";
import { pickImage } from "@/utils/imagePicker";
import { Pet } from "@/types/pet";
import AppButton from "@/components/common/AppButton";

const schema = z.object({
  name: z.string().min(2, "Pet name is required"),
  breed: z.string().min(2, "Breed is required"),
  age: z.string().min(1, "Age is required"),
  price: z.string().min(1, "Price is required"),
});

type FormData = z.infer<typeof schema>;

export default function AddPetScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      breed: "",
      age: "",
      price: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!image) {
      Alert.alert("Image required", "Please select pet image");
      return;
    }

    const pet: Pet = {
      id: Date.now().toString(),
      name: data.name,
      breed: data.breed,
      age: Number(data.age),
      price: Number(data.price),
      image,
    };

    try {
      setLoading(true);
      await submitPet(pet);
      Alert.alert("Success", "Pet added successfully");
      router.back();
    } catch {
      Alert.alert("Error", "Failed to submit pet");
    } finally {
      setLoading(false);
    }

 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Pet</Text>

      <AppButton
        title="Select Image"
        onPress={async () => setImage(await pickImage())}
      />

      {image && <Image source={{ uri: image }} style={styles.image} />}

       
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
         
            <TextInput
            placeholder="Pet Name"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      
      <Controller
        control={control}
        name="breed"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Breed"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.breed && <Text style={styles.error}>{errors.breed.message}</Text>}

      
      <Controller
        control={control}
        name="age"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Age"
            keyboardType="numeric"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.age && <Text style={styles.error}>{errors.age.message}</Text>}

       
      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.price && (
        <Text style={styles.error}>{errors.price.message}</Text>
      )}

      <AppButton
        title={loading ? "Submitting..." : "Submit"}
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    color: "#000", 
    borderRadius: 8,
  },
  image: {
    height: 220,
    borderRadius: 10,
    marginVertical: 12,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
});

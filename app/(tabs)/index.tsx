import {View, Text, Button, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
// import { router } from 'expo-router';
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

import { getRandomPetImage } from "../../api/petApi";
import { Pet } from "../../types/pet";
import Loader from "../../components/common/Loader";
import PetCard from "../../components/common/PetCard";
import AppButton from '../../components/common/AppButton';



 

export default function HomeScreen() {

  const router = useRouter();

  //state variables

  // we use <Pet[]> to specify that pets is an array of Pet objects
  const [pets, setPets] = useState<Pet[]>([]);
  const [image, setImage] = useState("");
  const [loading , setLoading] = useState(true);


//Pet array is always empty, so FlatList shows nothing. so we add one dummy pet inside useEffect to test FlatList rendering
  useEffect(() => {
    //fetch pets from the api
    getRandomPetImage().then((response) => {

      const img = response.data.message;
      setImage(img);

      setPets([
        {
          id: '1',
          name: "Sheru",
          breed: "Labrador",
          age: 2,
          price: 15000,
          image: response.data.message,
        },
      ])
      //we write setLoading false to indicate that the image has been loaded
      setLoading(false);
    });
  }, []);


  return (
    <SafeAreaView style={{ flex:1, padding: 16 }}>

      {/* <Button title="Add Pet" onPress={() => router.push("../add-pet")}/>
      <Button title='Go to Cart' onPress={() => router.push('../cart')}/>   */}

       

        {/* we are using loading state to show a loading message while the image is being fetched */}
        {/* {loading ? (
          <Loader/>
        ) : (
          // we use image and Image component to display the fetched image,we use && to ensure that the image is only rendered if it exists
          image && <Image source={{ uri: image }} style={{ height: 200, marginVertical: 10 }} />
        )} */}

        <FlatList
          data={pets}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <PetCard pet={item} />
          )}
        />

        
      <AppButton title="Add Pet" onPress={() => router.push("../add-pet")}/>
      <AppButton title='Go to Cart' onPress={() => router.push('../cart')}/> 

    </SafeAreaView>
  );
}

 

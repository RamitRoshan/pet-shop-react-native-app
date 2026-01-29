import {View, Text, Button, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { getRandomPetImage } from '@/api/petApi';
import { Pet } from '@/types/pet';
import Loader from '@/components/common/Loader';
import PetCard from '@/components/common/PetCard';



 

export default function HomeScreen() {

  //state variables

  // we use <Pet[]> to specify that pets is an array of Pet objects
  const [pets, setPets] = useState<Pet[]>([]);
  const [image, setImage] = useState("");
  const [loading , setLoading] = useState(true);


  useEffect(() => {
    //fetch pets from the api
    getRandomPetImage().then((response) => {
      setImage(response.data.message);
      //we write setLoading false to indicate that the image has been loaded
      setLoading(false);
    });
  }, []);


  return (
    <View style={{ padding: 16 }}>

      <Button title="Add Pet" onPress={() => router.push('/add-pet')}/>
      <Button title='Go to Cart' onPress={() => router.push('/cart')}/>  

        {/* we are using loading state to show a loading message while the image is being fetched */}
        {loading ? (
          <Loader/>
        ) : (
          // we use image and Image component to display the fetched image,we use && to ensure that the image is only rendered if it exists
          image && <Image source={{ uri: image }} style={{ height: 200, marginVertical: 10 }} />
        )}

        <FlatList
          data={pets}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <PetCard pet={item} />
          )}
        />

    </View>
  );
}

 

import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {

    // Ask permission first(Expo does NOT auto-ask permission anymore.
    // You should request permission before opening the gallery.) camera roll permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    //if permission is not granted, alert the user and return null
    if(!permissionResult.granted){
        alert("Permission to access camera roll is required!");
        return null;
    }

    const result  = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //In Expo Image Picker, quality controls image compression quality.(0.7 = 70% image quality)
        quality: 0.7,
    });

    //when result is not canceled, return the uri of the selected image
    //uri is a string that represents the location of the image
    if(!result.canceled){
        return result.assets[0].uri;
    }

    return null;
};

 
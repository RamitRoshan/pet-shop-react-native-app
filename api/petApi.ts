import axios from 'axios';

export const submitPet = (data: any) => {
    return axios.post("https://reqres.in/api/users", data);
};


export const getRandomPetImage = () => {
    return axios.get("https://dog.ceo/api/breeds/image/random");
}

 
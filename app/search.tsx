import { View , Text } from "react-native"
import GooglePlacesInput from "./components/GooglePlacesInput"
import { useEffect, useState } from "react"
import { useNavigation } from "expo-router";

export default function Search(){
    const [location,setLocation]=useState('');
    const navigator = useNavigation();
    useEffect(()=>{
        navigator.setOptions({
            headerBackTitle: 'Back',
            title:''
        })
    },[])
    return (
        <View>
            <Text>Search Page</Text>
            {/* <GooglePlacesInput setLocation={setLocation} /> */}
        </View>
    )
}
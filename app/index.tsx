import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { Image } from 'expo-image';
import { useEffect, useState } from "react";

// Get the viewport dimensions
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.45,
    paddingTop: 20, 
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  subText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 25
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 20,
    width: width * 0.80,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15
  },
  buttonPressed: {
    backgroundColor: 'black', // Change color when pressed
    opacity: 0.6, // Change opacity when pressed
    transform: [{ scale: 0.95 }], // Scale down when pressed
    paddingVertical: 20,
    width: width * 0.80,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: width, // 100vw
    height: height * 0.55, // 50vh
    backgroundColor: 'white',
  }
});

export default function Index() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <View>
      <Image
        style={styles.image}
        source={require("./travel.jpg")} // Use require for local image
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.container}>
        <Text style={styles.text}>AI Travel Planner App</Text>
        <Text style={styles.subText}>
          Plan your travel effortlessly with our AI-powered travel planner. Discover destinations, organize itineraries, and more.
        </Text>
        <TouchableOpacity
          style={isPressed ? styles.buttonPressed : styles.button}
          onPressIn={() => {
            setIsPressed(true)
            router.push("./login")
          }}
          onPressOut={() => setIsPressed(false)}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

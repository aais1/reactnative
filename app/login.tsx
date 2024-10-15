import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert  } from "react-native";
import { Link } from "expo-router";
import { useNavigation, useRouter } from "expo-router";
import { useUserContext } from "./context/UserContext";

// Get the viewport dimensions
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black'
  },
  input: {
    width: width * 0.8,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    width: width * 0.8,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: 'blue',
  },
  showPasswordText: {
    marginTop: -15,
    marginBottom: 20,
    alignSelf: 'flex-end',
    marginRight: width * 0.1,
    color: 'blue',
  },
});

export default function LoginScreen() {
  const navigation = useNavigation();
  const router=useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {setUser}=useUserContext();

  useEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerTransparent: true,
      headerBackTitle: 'Back',
    });
  }, []);

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
    } else if (username==="admin" && password ==="admin") {
        setUser('admin');
      router.push('./home')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
      />
      <Text
        style={styles.showPasswordText}
        onPress={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link}>
        <Link href="/signup">
            Don't have an account? Register
        </Link>
      </Text>
    </View>
  );
}

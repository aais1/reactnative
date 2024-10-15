import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Link } from "expo-router";
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

export default function SignupSCreen() {
  const navigation = useNavigation();
  const router=useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cnfrmpassword, setCnfrmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {setUser}=useUserContext();

  useEffect(() => {
    navigation.setOptions({
      title: 'Signup',
      headerTransparent: true,
      headerBackTitle: 'Back',
    });
  }, []);

  const handleSignup = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
    } else if (username==="admin" && password ==="admin") {
        Alert.alert('Success', 'You have successfully signed up use username :admin and pass: admin to login');
        router.push('/login');
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={cnfrmpassword}
        onChangeText={setCnfrmPassword}
        secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
      />
      <Text
        style={styles.showPasswordText}
        onPress={() => setShowPassword(!showPassword)}
      >
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={cnfrmpassword}
        onChangeText={setCnfrmPassword}
        secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
      />
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.link}>
        <Link href="/login">
            Already have an account? Login
        </Link>
      </Text>
    </View>
  );
}

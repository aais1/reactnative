import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { useUserContext } from '../context/UserContext';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fd', // Light background color for a softer look
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#333', // Darker shade for better readability
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666', // Softer gray color for the subtitle
    marginBottom: 30,
    textAlign: 'center',
  },
  featureContainer: {
    marginVertical: 12,
    backgroundColor: '#ffffff', // White background for a card-like look
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, // Adds elevation for Android shadow effect
  },
  featureText: {
    fontSize: 16,
    color: '#444', // Slightly softer black for readability
  },
  button: {
    backgroundColor: '#007bff', // Use a primary color for a more vibrant look
    paddingVertical: 15,
    width: width * 0.9,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Adds elevation for Android shadow effect
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
});

export default function Home() {
  const navigation = useNavigation();
  const { user  } = useUserContext();
  console.log(user)

  const handleStartPlanning = () => {
    // Navigate to the planning screen
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Hello There, {user || 'Guest'} 😍</Text>
      <Text style={styles.title}>Welcome to AI Travel Planner</Text>
      <Text style={styles.subtitle}>
        Your smart travel companion for seamless trip planning
      </Text>

      <View style={styles.featureContainer}>
        <Text style={styles.featureText}>• Discover personalized destinations</Text>
      </View>
      <View style={styles.featureContainer}>
        <Text style={styles.featureText}>• Organize your itinerary effortlessly</Text>
      </View>
      <View style={styles.featureContainer}>
        <Text style={styles.featureText}>• Get smart recommendations for attractions and activities</Text>
      </View>
      <View style={styles.featureContainer}>
        <Text style={styles.featureText}>• Manage your bookings in one place</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleStartPlanning}>
        <Text style={styles.buttonText}>Start Planning Your Trip</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

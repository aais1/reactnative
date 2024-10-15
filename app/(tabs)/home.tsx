import { useEffect , useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { useUserContext } from '../context/UserContext';
import { useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  btnText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  noTripsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    padding: 20,
  },
  locationIcon: {
    marginBottom: 10,
  },
  noTripsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  noTripsSubtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  tipsContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 20,
  },
  tipsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  tipsText: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
  featuresContainer: {
    padding: 20,
    backgroundColor: '#e8eaf6',
    borderRadius: 10,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
});

export default function Home() {
    const [trips,setTrips]=useState([]);
  const navigation = useNavigation();
  const router=useRouter();
  const { user } = useUserContext();
  console.log(user);

  useEffect(()=>{
    navigation.setOptions({
        headerShown: true,
        headerStyle: {
            backgroundColor:'white'
        }
    })
  },[])

  const handleStartPlanning = () => {
    // Navigate to the planning screen
  };

  return (
    <ScrollView>
      <View style={styles.topContainer}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}>My Trips</Text>
        <TouchableOpacity style={styles.btn} onPress={handleStartPlanning}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      {
        trips.length===0?
        <View style={styles.noTripsContainer}>
        <Entypo name="location" size={40} color="black" style={styles.locationIcon} />
        <Text style={styles.noTripsText}>No Trips Planned</Text>
        <Text style={styles.noTripsSubtitle}>It's about time you plan a trip ☺</Text>
        <TouchableOpacity onPress={()=>{
            router.push('/search')
        }} style={{
            backgroundColor: 'black',
            paddingVertical: 15,
            width: width * 0.50,
            paddingHorizontal: 20,
            borderRadius: 20,
            marginTop: 15,
            alignItems: 'center',
        }}><Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}>Start a Trip</Text></TouchableOpacity>
      </View>
      :<Text>There are trips </Text>}

    </ScrollView>
  );
}

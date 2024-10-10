import { View , Text , StyleSheet } from "react-native";
import { Link } from "expo-router";

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'red',
      fontSize:20,
      fontWeight:'bold'
    }
  })

export default function Index(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About ME</Text>
            <Text>Nothing much here for now</Text>
            <Link href="/">Go to index</Link>
        </View>
    )
}
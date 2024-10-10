import { View , Text , StyleSheet } from "react-native";
import { Link, Href } from "expo-router";

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
    },
    link:{
      textDecorationStyle:'solid',
      padding:5,
      borderColor:'black',
      borderRadius:5,
      borderWidth:1,
      marginTop:5,
      borderStyle:'solid'
    }
  })

export default function Index(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>App dev I am coming 😁</Text>
            <Link style={styles.link} href={"/about" as Href}>See More about me </Link>

            <Link style={styles.link} href="/test">Test Page</Link>
            <Text>Test link will navigate to a complete different page with diff layout</Text>

        </View>
    )
}
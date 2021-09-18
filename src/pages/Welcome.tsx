import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View
} from "react-native"
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/core";

import wateringImg from '../assets/watering.png'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome(){
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification')
  }




  return(
   <SafeAreaView style={styles.container}>

      <View style={styles.wrapper}>

          <Text style={styles.title}>
            Gerencie {'\n'}
            suas plantas de{'\n'}
            forma fácil
          </Text>

          <Image 
          source={wateringImg}  
          style={styles.img}
          resizeMode='contain'
          />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas{'\n'} 
          plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
        >
           <Feather name="chevron-right"
            style={styles.ButtonIcon}
            />
        </TouchableOpacity>
      </View>  

  </SafeAreaView>  

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
        fontFamily: fonts.heading,
        lineHeight: 34,
        fontSize: 28 ,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: colors.heading,
        marginTop: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56
  },
  img: {
    height: Dimensions.get('window').width * 0.7
  },
  ButtonIcon: {
    color: colors.white,
    fontSize: 32
  }
})

import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props{
    movie: Movie,
    height?: number,
    width?: number
}

const MoviePoster = ({movie, height = 420,width =300}:Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`  

  const navigation = useNavigation();
    
  return (
    <TouchableOpacity 
        onPress={ () => navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:8,
            paddingBottom:20,
            paddingHorizontal:7
        }}
    >
    <View style={styles.imageContainer}>
        <Image
            source={{uri}}
            style={styles.image}
        />
       
      </View>    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    image:{
        flex:1,
        borderRadius:18,
    }
})

export default MoviePoster

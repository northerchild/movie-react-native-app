import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MoviePoster from './MoviePoster'

interface Props{
    title?: string
    movies:Movie[]
}

const HorizontalSlider = ({title = 'Populares', movies}:Props) => {
  return (
    <View style={{height:230}}>
        <Text style={{color:'#000', fontSize:30, fontWeight:'bold', marginLeft:15}}>{title}</Text>
        <FlatList
            data={movies}
            renderItem={ ({item}:any) => <MoviePoster movie={item} width={140} height={200}/>}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default HorizontalSlider

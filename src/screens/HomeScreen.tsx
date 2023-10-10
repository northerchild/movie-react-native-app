import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import MoviePoster from '../components/MoviePoster'
import Carousel from 'react-native-snap-carousel'
import HorizontalSlider from '../components/HorizontalSlider'
import { useMovies } from '../hooks/useMovies'


const windowWidth = Dimensions.get('window').width

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  
  if(isLoading){
    return(
        <View
            style={{flex:1, justifyContent: 'center', alignContent:'center'}}
        >
            <ActivityIndicator color="red" size={100}/>
        </View>
    )
  }
  
  return (

        <ScrollView>

                
                <View>
                    
                    {/* Carosel Principal */}
                    <View style={{ height: 440 }}>
                        <Carousel 
                            data={ nowPlaying }
                            renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                            sliderWidth={ windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.9}
                        />
                    </View>

                    {/* Películas populares */}
                    <HorizontalSlider title="Popular" movies={ popular } />
                    <HorizontalSlider title="Top Rated" movies={ topRated } />
                    <HorizontalSlider title="Upcoming" movies={ upcoming } />


                </View>
            </ScrollView>

  )
}

export default HomeScreen

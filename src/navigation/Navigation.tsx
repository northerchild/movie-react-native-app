import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    HomeScreen:undefined,
    DetailScreen: Movie
}

const Stack = createStackNavigator();

export const Navigation = ()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'#fff'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
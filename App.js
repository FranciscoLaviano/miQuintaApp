
import { StyleSheet, StatusBar } from 'react-native';

import { useFonts } from "expo-font"
import TabNavigator from './src/navegacion/TabNavigator';
import { Provider } from 'react-redux';
import {Fuentes} from "./src/design/Fuentes"
import {store} from "./src/app/Store"




const App = () => {
   const [fontLoaded] = useFonts(Fuentes)
   
  if(!fontLoaded) return null

  return (
    <>
    <Text>SUPLEMENTOS ALIMENTICIOS OMNILIFE</Text>
    <StatusBar backgroundColor={'#e2fc83'} />
     <Provider store={store}>
      <TabNavigator />
     </Provider>
    
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae8e8',
    alignItems: 'center',
    justifyContent: 'start',
  },
})



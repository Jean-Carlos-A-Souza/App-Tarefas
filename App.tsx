import { StyleSheet, View } from 'react-native';
import './gesture-handler';

import Routes from './src/routes/index.stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
         <NavigationContainer>
            <Routes/>
         </NavigationContainer>
   );
}

const styles = StyleSheet.create({

});

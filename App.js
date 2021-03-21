import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigation/stack_navigation/RootStackNavigation';
  
function App() {
  return (
   <NavigationContainer>
       <RootStackNavigation/>
   </NavigationContainer>
  );
}

export default App;

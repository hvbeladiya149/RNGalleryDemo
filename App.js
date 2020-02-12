/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Galldemo from './components/Galldemo';
import Viewzoom from './components/Viewzoom';
import Onlinedemo from './components/Onlinedemo';


const MainNavigator = createStackNavigator({
  Galley: { screen: Galldemo, navigationOptions: {} },
  View: { screen: Viewzoom },
  Online: { screen: Onlinedemo }
});

const App = createAppContainer(MainNavigator);

export default App;

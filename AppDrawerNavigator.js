
import Homescreen from '../Screens/HomeScreen';
import Display from '../Screens/Display'

import SettingsScreen from '../Screens/SettingsScreen'
import { createDrawerNavigator } from 'react-navigation-drawer';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Homescreen,
       },
        Display: {
      screen: Display,
       },
     
        Setting:{
      screen: SettingsScreen,
       },
  },
  {
    initialRouteName: 'Home',
     drawerType:'slide'
  }
);
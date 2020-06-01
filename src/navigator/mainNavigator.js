import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps56636Navigator from '../features/Maps56636/navigator';
import Settings56614Navigator from '../features/Settings56614/navigator';
import Settings56599Navigator from '../features/Settings56599/navigator';
import NotificationList56598Navigator from '../features/NotificationList56598/navigator';
import Maps56597Navigator from '../features/Maps56597/navigator';
import UserProfile56507Navigator from '../features/UserProfile56507/navigator';
import Maps56488Navigator from '../features/Maps56488/navigator';
import Settings56466Navigator from '../features/Settings56466/navigator';
import Settings56451Navigator from '../features/Settings56451/navigator';
import NotificationList56450Navigator from '../features/NotificationList56450/navigator';
import Maps56449Navigator from '../features/Maps56449/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps56636: { screen: Maps56636Navigator },
Settings56614: { screen: Settings56614Navigator },
Settings56599: { screen: Settings56599Navigator },
NotificationList56598: { screen: NotificationList56598Navigator },
Maps56597: { screen: Maps56597Navigator },
UserProfile56507: { screen: UserProfile56507Navigator },
Maps56488: { screen: Maps56488Navigator },
Settings56466: { screen: Settings56466Navigator },
Settings56451: { screen: Settings56451Navigator },
NotificationList56450: { screen: NotificationList56450Navigator },
Maps56449: { screen: Maps56449Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

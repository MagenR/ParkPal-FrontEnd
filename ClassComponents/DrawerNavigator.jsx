import HomePage from '../Pages/HomePage';
import SignUp from '../Pages/SignUp';
import LogIn from '../Pages/LogIn';
import SearchParkingPage from '../Pages/SearchParkingPage';
import ProfilePage from '../Pages/ProfilePage';
import EditProfilePage from '../Pages/EditProfilePage';
import PaymentPage from '../Pages/PaymentPage';
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../Pages/DrawerContent'

const Drawer =  createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomePage" component={HomePage} options={{ headerShown: false , swipeEnabled: false,}} />
        <Drawer.Screen name="SearchParkingPage" component={SearchParkingPage} options={{ headerShown: false }}/>
        <Drawer.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }}/>
        <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: false ,  swipeEnabled: false,}}/>
        <Drawer.Screen name="LogIn" component={LogIn} options={{ headerShown: false , swipeEnabled: false,}}/>
        <Drawer.Screen name="PaymentPage" component={PaymentPage} options={{ headerShown: false }}/>
        <Drawer.Screen name="EditProfilePage" component={EditProfilePage} options={{ headerShown: false }}/>
        {/* <Drawer.Screen name="History" component={History} options={{ headerShown: false }}/> */}
      </Drawer.Navigator>
  );
}

import { StackNavigator } from 'react-navigation';
import Login from '../components/login/login';
import Profile from '../components/profile/profile';

export const navigation = StackNavigator({
    loginScreen: {screen: Login},
    profileScreen: {screen: Profile}
},{
    headerMode:'screen',
    initialRouteName:'loginScreen'
});
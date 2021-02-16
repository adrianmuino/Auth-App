import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import VideoFeed from '../screens/VideoFeed';

const screens = {
    Login: {
        screen: LoginScreen,
    },
    VideoFeed:{
        screen: VideoFeed
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
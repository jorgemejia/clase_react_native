import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/home';
import Products from './pages/products';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Products: { screen: Products },
});

export default AppNavigator;
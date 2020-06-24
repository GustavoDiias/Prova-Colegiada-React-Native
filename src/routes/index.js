import Main from '../pages/main';
import Func1 from '../pages/func1';
import Func2 from '../pages/func2';
import Func3 from '../pages/func3';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const MainPage = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: ({ navigation }) => ({
            title: 'Main',
            header: false,
        }),
    },
});

const Func1Page = createStackNavigator({
    Func1: {
        screen: Func1,
        navigationOptions: ({ navigation }) => ({
            title: 'Func1',
            header: false,
        }),
    },
});

const Func2Page = createStackNavigator({
    Func2: {
        screen: Func2,
        navigationOptions: ({ navigation }) => ({
            title: 'Func2',
            header: false,
        }),
    },
});

const Func3Page = createStackNavigator({
    Func3: {
        screen: Func3,
        navigationOptions: ({ navigation }) => ({
            title: 'Func3',
            header: false,
        }),
    },
});

const DrawerNavigatorMenu = createDrawerNavigator(
    {
        Main: MainPage,
        Func1: Func1Page,
        Func2: Func2Page,
        Func3: Func3Page,
    },
    {
        initialRouteName: 'Main',
    },
);

export default createAppContainer(DrawerNavigatorMenu);
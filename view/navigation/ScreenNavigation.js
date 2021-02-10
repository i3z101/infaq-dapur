import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Main from '../screen/user/Main';
import DonateReview from '../screen/user/DonationReview';
import AreasList from '../screen/shared/AreasList';
import Package from '../../component/Package';
import Packages from '../screen/user/Packages';
import Cart from '../screen/user/Cart';
import Aboutus from '../screen/shared/Aboutus';
import CustomHeader from '../../component/CustomHeader';
import Area from '../../component/Area'
import Color from '../../constants/Color';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScreenNavigation = props => {
    const mainNaviagtion = () => {
        return <Stack.Navigator screenOptions={
            (props) => ({
                headerStyle: {
                    backgroundColor: Color.fifth,
                },
                headerTintColor: Color.secondary,
                headerTitleAlign: 'center'
            })
        }>
            <Stack.Screen name='home' component={Main} options={
                (props) => ({
                    title: 'Home',
                    headerLeft: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={Entypo}
                                iconName={'list'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            />
                        </HeaderButtons>
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
            <Stack.Screen name='packages' component={Packages} options={
                (props) => ({
                    title: 'package list',
                    headerLeft: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={Entypo}
                                iconName={'list'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            />
                        </HeaderButtons>
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
            <Stack.Screen name='package' component={Package} options={
                (props) => ({
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
            <Stack.Screen name='cart' component={Cart} />
            <Stack.Screen name='donation review' component={DonateReview} />
        </Stack.Navigator>
    }

    const Donation = () => {
        return <Stack.Navigator screenOptions={
            (props) => ({
                headerStyle: {
                    backgroundColor: Color.fifth
                },
                headerTintColor: Color.secondary,
                headerTitleAlign: 'center'
            })
        }>
            <Stack.Screen name='donation review' component={DonateReview} options={
                (props) => ({
                    title: 'donate',
                    headerLeft: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={Entypo}
                                iconName={'list'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            />
                        </HeaderButtons>
                    }
                })
            } />
        </Stack.Navigator>
    }

    const Areas = () => {
        return <Stack.Navigator screenOptions={
            (props) => ({
                headerStyle: {
                    backgroundColor: Color.fifth
                },
                headerTintColor: Color.secondary,
                headerTitleAlign: 'center'
            })
        }>
            <Stack.Screen name='areas list' component={AreasList} options={
                (props) => ({
                    title: 'areas list',
                    headerLeft: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={Entypo}
                                iconName={'list'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            />
                        </HeaderButtons>
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
            <Stack.Screen name='area' component={Area} />
        </Stack.Navigator>
    }

    const AllPackages = () => {
        return <Stack.Navigator screenOptions={
            (props) => ({
                headerStyle: {
                    backgroundColor: Color.fifth
                },
                headerTintColor: Color.secondary,
                headerTitleAlign: 'center'
            })
        }>
            <Stack.Screen name='packages' component={Packages} options={
                (props) => ({
                    title: 'package list',
                    headerLeft: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={Entypo}
                                iconName={'list'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            />
                        </HeaderButtons>
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
            <Stack.Screen name='package' component={Package} options={
                (props) => ({
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
        </Stack.Navigator>
    }

    const About = () => {
        return <Stack.Navigator screenOptions={
            (props) => ({
                headerStyle: {
                    backgroundColor: Color.fifth
                },
                headerTintColor: Color.secondary,
                headerTitleAlign: 'center'
            })
        }>
            <Stack.Screen name='about us' component={Aboutus} options={
                (props) => ({
                    title: 'about us',
                    headerLeft: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={Entypo}
                                iconName={'list'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            />
                        </HeaderButtons>
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeader}>
                            <Item
                                IconComponent={MaterialCommunityIcons}
                                iconName={'cart-outline'}
                                iconSize={27}
                                color={Color.secondary}
                                onPress={() => props.navigation.navigate('cart')}
                            />
                        </HeaderButtons>
                    }
                })
            } />
        </Stack.Navigator>
    }

    return <Drawer.Navigator statusBarAnimation='slide' overlayColor={'#cccccc93'} drawerType="back" drawerContentOptions={{
        activeBackgroundColor: Color.fifth,
        activeTintColor: Color.secondary,
        inactiveTintColor: 'black',
        labelStyle: {
            fontFamily: 'cairoBold',
        },
        style: {
            backgroundColor: '#F5F6FF',
        }
    }}>
        <Drawer.Screen name='main' component={mainNaviagtion} options={{
            title: 'Home'
        }} />
        <Drawer.Screen name='all packages' component={AllPackages} options={{
            title: 'packages list',
        }} />
        <Drawer.Screen name='donation' component={Donation} options={{
            title: 'Donate'
        }} />
        <Drawer.Screen name='areas' component={Areas} options={{
            title: 'Areas list'
        }} />
        <Drawer.Screen name='about' component={About} options={{
            title: 'about us'
        }} />
    </Drawer.Navigator>
}


export default ScreenNavigation;
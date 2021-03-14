import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import HomeScreens from './screens/Home';
import WalletScreens from './screens/Wallet';
import PayScreens from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    },
};

export default function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Wallet"
            screenOptions={( { route, navigation } ) => ({
                tabBarIcon: ({ color, size, focused}) => {
                    if (route.name === 'Pay') {
                        return (
                            <PayButton 
                                OnPress={() => navigation.navigate('Pay')} 
                                focused={focused} 
                            />
                        );
                    }
                    
                    const { lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255,0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreens} 
                options={{
                    title: 'Início',
                }}
            />
            <Tab.Screen 
                name="Wallet" 
                component={WalletScreens}
                options={{
                    title: 'Carteira',
                }} 
            />
            <Tab.Screen 
                name="Pay" 
                component={PayScreens} 
                options={{
                    title: '',
                }}
            />

            <Tab.Screen 
                name="Notifications" 
                component={PayScreens} 
                options={{
                    title: 'Notificações',
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={PayScreens} 
                options={{
                    title: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    );
}
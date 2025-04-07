import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { theme } from '../theme/theme';
import { useTranslation } from 'react-i18next';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.text.light,
          headerTitleStyle: {
            ...theme.typography.h2,
          },
          headerBackTitle: t('back'),
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: t('home'),
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: t('settings'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 
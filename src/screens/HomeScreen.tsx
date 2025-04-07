import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleStartPress = () => {
    console.log('Button pressed');
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('getStarted')}</Text>
      <Button
        title={t('start')}
        onPress={handleStartPress}
        style={styles.button}
        variant="primary"
      />
      <Button
        title={t('settings')}
        onPress={handleSettingsPress}
        style={StyleSheet.flatten([styles.button, styles.settingsButton])}
        variant="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.text.light,
  },
  title: {
    ...theme.typography.h1,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 300,
    marginBottom: theme.spacing.md,
  },
  settingsButton: {
    marginBottom: 0,
  },
}); 
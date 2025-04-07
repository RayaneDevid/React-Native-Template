import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { theme } from '../theme/theme';

export const SettingsScreen: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('language')}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={t('english')}
          onPress={() => changeLanguage('en')}
          style={styles.languageButton}
          variant={i18n.language === 'en' ? 'primary' : 'secondary'}
        />
        <Button
          title={t('french')}
          onPress={() => changeLanguage('fr')}
          style={styles.languageButton}
          variant={i18n.language === 'fr' ? 'primary' : 'secondary'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.text.light,
  },
  title: {
    ...theme.typography.h1,
    marginBottom: theme.spacing.lg,
    color: theme.colors.text.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: theme.spacing.md,
  },
  languageButton: {
    flex: 1,
  },
}); 
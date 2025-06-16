// src/screens/SettingsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const [notificacoes, setNotificacoes] = React.useState(true);
  const [atualizacoesAuto, setAtualizacoesAuto] = React.useState(false);
  const [idioma, setIdioma] = React.useState('pt');

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#F2F5F9',
      padding: 16,
    },
    header: {
      fontSize: 28,
      fontWeight: '700',
      color: isDark ? '#fff' : '#333',
      marginVertical: 12,
      textAlign: 'center',
    },
    card: {
      backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: isDark ? '#EEE' : '#444',
      marginBottom: 12,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#333' : '#ECECEC',
    },
    itemLabel: {
      fontSize: 16,
      color: isDark ? '#DDD' : '#333',
    },
    pickerWrapper: {
      borderWidth: 1,
      borderColor: isDark ? '#333' : '#DDD',
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: isDark ? '#2A2A2A' : '#FFF',
      height: 56,                // aumentou a altura
      justifyContent: 'center',  // centro vertical
      paddingHorizontal: 12,     // espaçamento nas laterais
      marginTop: 8,
    },
    picker: {
      height: '100%',            // ocupa toda a altura do wrapper
      width: '100%',             // ocupa toda a largura
      color: isDark ? '#fff' : '#000',
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Configurações</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Geral</Text>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Notificações Push</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
            thumbColor={notificacoes ? '#fff' : undefined}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Modo Escuro</Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
            thumbColor={isDark ? '#fff' : undefined}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Atualizações Automáticas</Text>
          <Switch
            value={atualizacoesAuto}
            onValueChange={setAtualizacoesAuto}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
            thumbColor={atualizacoesAuto ? '#fff' : undefined}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Idioma</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={idioma}
            style={styles.picker}
            onValueChange={(value: string) => setIdioma(value)}
          >
            <Picker.Item label="Português" value="pt" />
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Español" value="es" />
            <Picker.Item label="Français" value="fr" />
            <Picker.Item label="Italiano" value="it" />
            <Picker.Item label="日本語" value="ja" />
            <Picker.Item label="中文 (Mandarim)" value="zh" />
            <Picker.Item label="Русский" value="ru" />
          </Picker>
        </View>
      </View>
    </ScrollView>
  );
}

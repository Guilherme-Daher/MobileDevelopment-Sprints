// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function ProfileScreen() {
  const { usuario } = useUser();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#121212' : '#F0F4F8',
      alignItems: 'center',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: theme === 'dark' ? '#1E1E1E' : '#FFFFFF',
      width: '100%',
      borderRadius: 16,
      padding: 24,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
      elevation: 6,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: theme === 'dark' ? '#444' : '#DDD',
    },
    nome: {
      fontSize: 28,
      fontWeight: '700',
      color: theme === 'dark' ? '#FFF' : '#333',
      marginBottom: 8,
    },
    info: {
      fontSize: 16,
      color: theme === 'dark' ? '#CCC' : '#666',
      marginBottom: 4,
    },
    divider: {
      width: '80%',
      height: 1,
      backgroundColor: theme === 'dark' ? '#333' : '#EEE',
      marginVertical: 16,
    },
    editButton: {
      marginTop: 16,
      backgroundColor: '#2980B9',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
    },
    editText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
    },
    emptyText: {
      fontSize: 18,
      color: theme === 'dark' ? '#AAA' : '#888',
      marginTop: 20,
    },
  });

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Nenhum usuário logado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/avatar-placeholder.png')}
          style={styles.avatar}
        />
        <Text style={styles.nome}>{usuario.nome}</Text>
        <View style={styles.divider} />
        <Text style={styles.info}>{usuario.email}</Text>
        <Text style={styles.info}>{usuario.nascimento}</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => { /* navegar para editar */ }}>
          <Text style={styles.editText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
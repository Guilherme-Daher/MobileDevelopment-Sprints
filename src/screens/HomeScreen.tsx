// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function HomeScreen({ navigation }: any) {
  const { theme } = useTheme();
  const { usuario } = useUser();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#000' : '#F9FAFB',
      paddingHorizontal: 24,
      paddingTop: 60,
    },
    titulo: {
      fontSize: 28,
      fontWeight: '700',
      color: theme === 'dark' ? '#fff' : '#1F2937',
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitulo: {
      fontSize: 16,
      color: theme === 'dark' ? '#aaa' : '#6B7280',
      textAlign: 'center',
      marginBottom: 40,
    },
    cardContainer: {
      gap: 20,
    },
    card: {
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#FFFFFF',
      padding: 20,
      borderRadius: 12,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      borderLeftWidth: 5,
      borderLeftColor: '#3B82F6',
    },
    cardTitulo: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? '#fff' : '#111827',
      marginBottom: 6,
    },
    cardDescricao: {
      fontSize: 14,
      color: theme === 'dark' ? '#ccc' : '#6B7280',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Bem-vindo{usuario ? `, ${usuario.nome}` : ''}.
      </Text>

      <Text style={styles.subtitulo}>
        Acesse os recursos da plataforma de forma rápida e simples.
      </Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.cardTitulo}>Perfil</Text>
          <Text style={styles.cardDescricao}>Visualize e edite suas informações pessoais</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Recommendations')}
        >
          <Text style={styles.cardTitulo}>Recomendações</Text>
          <Text style={styles.cardDescricao}>Veja sugestões de investimentos com base no seu perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.cardTitulo}>Configurações</Text>
          <Text style={styles.cardDescricao}>Ajuste preferências e detalhes da sua conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
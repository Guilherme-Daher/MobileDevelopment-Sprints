// src/screens/RecommendationsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function RecommendationsScreen() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme === 'dark' ? '#000' : '#F4F6F7',
      flexGrow: 1,
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#fff' : '#2C3E50',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitulo: {
      fontSize: 16,
      textAlign: 'center',
      color: theme === 'dark' ? '#ccc' : '#7F8C8D',
      marginBottom: 20,
    },
    card: {
      backgroundColor: theme === 'dark' ? '#1E1E1E' : '#FFFFFF',
      borderRadius: 12,
      padding: 20,
      marginBottom: 20,
      elevation: 2,
    },
    planoTitulo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#2980B9' : '#2980B9',
      marginBottom: 8,
    },
    descricao: {
      fontSize: 14,
      color: theme === 'dark' ? '#ccc' : '#34495E',
      marginBottom: 10,
    },
    lista: {
      fontSize: 14,
      color: theme === 'dark' ? '#eee' : '#2C3E50',
      paddingLeft: 10,
      marginBottom: 4,
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Recomendações de Investimento</Text>
      <Text style={styles.subtitulo}>
        Com base no seu perfil de risco, separamos as melhores opções para você:
      </Text>

      <View style={styles.card}>
        <Text style={styles.planoTitulo}>Plano A - Perfil Agressivo</Text>
        <Text style={styles.descricao}>
          Ideal para quem busca altos retornos e está disposto a correr maiores riscos.
        </Text>
        <Text style={styles.lista}>• Ações de alto crescimento</Text>
        <Text style={styles.lista}>• Criptomoedas</Text>
        <Text style={styles.lista}>• ETFs de tecnologia</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.planoTitulo}>Plano B - Perfil Moderado</Text>
        <Text style={styles.descricao}>
          Indicado para quem busca equilíbrio entre risco e segurança.
        </Text>
        <Text style={styles.lista}>• Fundos Imobiliários (FIIs)</Text>
        <Text style={styles.lista}>• Ações de empresas consolidadas</Text>
        <Text style={styles.lista}>• Fundos multimercado</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.planoTitulo}>Plano C - Perfil Conservador</Text>
        <Text style={styles.descricao}>
          Para quem prefere segurança e previsibilidade nos investimentos.
        </Text>
        <Text style={styles.lista}>• Tesouro Direto</Text>
        <Text style={styles.lista}>• CDBs e LCIs</Text>
        <Text style={styles.lista}>• Fundos de renda fixa</Text>
      </View>
    </ScrollView>
);
}

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { logar } = useUser();
  const { theme } = useTheme();

  const handleLogin = async () => {
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const sucesso = await logar(email, senha);
    if (sucesso) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'E-mail ou senha incorretos!');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#121212' : '#EAF2F8',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    card: {
      backgroundColor: theme === 'dark' ? '#1C1C1C' : '#FFFFFF',
      width: '100%',
      borderRadius: 10,
      padding: 24,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#2E86DE',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: 14,
      color: theme === 'dark' ? '#bbb' : '#566573',
      textAlign: 'center',
      marginBottom: 24,
    },
    input: {
      height: 50,
      borderColor: '#D6DBDF',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 16,
      backgroundColor: '#FDFEFE',
      color: '#2C3E50',
    },
    botao: {
      backgroundColor: '#2E86DE',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 4,
    },
    botaoTexto: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    link: {
      marginTop: 16,
      color: '#2980B9',
      textAlign: 'center',
      fontSize: 14,
      textDecorationLine: 'underline',
    },
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Bem-vindo</Text>
        <Text style={styles.subtitulo}>Entre para acessar sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
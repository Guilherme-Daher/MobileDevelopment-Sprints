// src/screens/RegisterScreen.tsx
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

export default function RegisterScreen({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');

  const { cadastrar } = useUser();
  const { theme } = useTheme();  // <-- pega o tema do contexto

  const handleRegister = async () => {
    if (!nome || !email || !senha || !nascimento || !nascimento.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente!');
      return;
    }

    const sucesso = await cadastrar({
      nome,
      email,
      senha,
      nascimento: nascimento.match(/^\d{2}\/\d{2}\/\d{4}$/) ? nascimento : '',
      idioma: 'pt-BR'
    });

    if (sucesso) {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Erro', 'Falha ao salvar os dados!');
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
      backgroundColor: theme === 'dark' ? '#1E1E1E' : '#FFFFFF',
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
      color: theme === 'dark' ? '#fff' : '#2E86DE',
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
      marginBottom: 12,
      backgroundColor: theme === 'dark' ? '#2C2C2C' : '#FDFEFE',
      color: theme === 'dark' ? '#fff' : '#2C3E50',
    },
    botao: {
      backgroundColor: '#28B463',
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.titulo}>Criar Conta</Text>
        <Text style={styles.subtitulo}>Preencha os dados abaixo</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (DD/MM/AAAA)"
          placeholderTextColor="#999"
          value={nascimento}
          onChangeText={setNascimento}
        />

        <TouchableOpacity style={styles.botao} onPress={handleRegister}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tem conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

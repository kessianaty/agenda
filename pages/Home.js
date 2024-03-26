import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Agenda</Text>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: João Silva</Text>
        <Text style={styles.frase}>Doidinho da cabeça.</Text>
      </View>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Maria Santos</Text>
        <Text style={styles.frase}>Mamãe ama, mamãe cuida.</Text>
      </View>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Pedro Santos</Text>
        <Text style={styles.frase}>Acredite nos seus sonhos.</Text>
      </View>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Carlos Pereira</Text>
        <Text style={styles.frase}>O sorriso é o melhor acessório.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 50,
  },
  caixa: {
    backgroundColor: '#7FFFD4',
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
    width: 300
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  frase: {
    fontSize: 16,
  },
});
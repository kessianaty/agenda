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
        <Text style={styles.frase}>Mamâe ama, mamâe cuida.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding:50
  },
  caixa: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
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
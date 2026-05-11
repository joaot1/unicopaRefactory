import { View, Text, StyleSheet } from 'react-native';
import GameCard from './GameCard';

export default function DiaCard({ data, jogos }) {
  
  const jogosOrdenados = [...jogos].sort((jogoA, jogoB) => {
    return jogoA.hora_brasilia.localeCompare(jogoB.hora_brasilia);
  });

  return (
    <View style={styles.card}>
      <Text style={styles.data}>{data}</Text>
      {jogosOrdenados.map((jogo) => (
        <GameCard key={jogo.id} game={jogo} />
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: '#0c1b2a',
    width: 320,
    borderRadius: 12,
    padding: 15,
  },
  data: {
    color: '#f2cc2f',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
});
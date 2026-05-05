import { Image, StyleSheet } from 'react-native';
import { FLAGS } from '../utils/Flags';

export default function FlagIcon({ sigla, style }) {
  if (!sigla) return null;

  const normalized = sigla.toUpperCase();
  const imageSource = FLAGS[normalized];

  if (!imageSource) {
    console.warn(`Bandeira não encontrada para: ${normalized}`);
    return null;
  }

  return (
    <Image 
      style={[styles.bandeira, style]} 
      source={imageSource} 
    />
  );
}

const styles = StyleSheet.create({
  bandeira: {
    width: 28,
    height: 28,
    borderRadius: 14
  }
});
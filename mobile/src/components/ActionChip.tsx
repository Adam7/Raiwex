import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  emoji: string;
};

export function ActionChip({ label, emoji }: Props) {
  return (
    <View style={styles.chip}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#171f35',
    borderWidth: 1,
    borderColor: '#2d3c60',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999
  },
  emoji: {
    fontSize: 14
  },
  text: {
    color: '#d5defd',
    fontWeight: '600'
  }
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    padding: 4,
  },
  button: {
    marginTop: 18,
    width: 310,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  content: {
    marginTop: 28,
    flexWrap: 'wrap',
    fontSize: 16,
    textAlign: 'center',
    height: 60,
    width: 260,
    padding: 10,
  },
  card: {
    marginBottom: 14,
    borderRadius: 5,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

});

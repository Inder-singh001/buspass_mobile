import {StyleSheet} from 'react-native';
import CardTitle from 'react-native-paper/lib/typescript/components/Card/CardTitle';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    fontSize: 12,
    marginBottom: 8,
    includeFontPadding: false,
    textAlignVertical: 'center',
    color: '#ccc',
  },
  card: {
    marginBottom: 14,
    borderRadius: 5,
  },
  cardNote: {
    opacity: 0.5,
    borderRadius: 5,
  },
  cardTitle: {
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  queCard: {
    marginBottom: 14,
    borderRadius: 5,
    padding: 8,
    backgroundColor: 'white',
  },
  queCardTitle: {
    fontWeight: '500',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  text: {
    marginTop: 6,
  },
  textNote: {
    paddingTop: 6,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

import {StyleSheet} from 'react-native';
import {theme} from '../../theme/colors';

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
    color: theme.colors.onPrimary,
    backgroundColor: theme.colors.ontertiary,
  },
  card: {
    marginBottom: 14,
    borderRadius: 5,
    backgroundColor: theme.colors.ontertiary,
  },
  cardNote: {
    opacity: 0.5,
    borderRadius: 5,
  },
  cardTitle: {
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.onPrimary,
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
    color: theme.colors.onPrimary,
  },
  colortext: {
    color: theme.colors.placeholder,
  },
  text: {
    marginTop: 6,
    color: theme.colors.onPrimary,
  },
  textNote: {
    paddingTop: 6,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    color: theme.colors.onPrimary,
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    marginBottom: 12,
  },
});

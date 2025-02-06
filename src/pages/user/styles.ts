import { Platform, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.background,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  section: {
    backgroundColor: themas.colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themas.colors.texto,
    marginBottom: 5,
  },

  info: {
    fontSize: 16,
    color: themas.colors.texto,
  },

  description: {
    fontSize: 14,
    color: themas.colors.textoSuave,
    lineHeight: 20,
  },

  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  logoutButtonText: {
    color: themas.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: themas.colors.background,
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
  },

});

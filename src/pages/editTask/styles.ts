import { Platform, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.background, 
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themas.colors.azulTitulo,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#D1D1D1',
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  radioButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  radioConcluido: {
    backgroundColor: themas.colors.btConcluido,
  },
  radioNConcluido: {
    backgroundColor: themas.colors.btNConcluido,
  },
  saveButton: {
    backgroundColor: themas.colors.botaoIntenso,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  deleteButtonText: {
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

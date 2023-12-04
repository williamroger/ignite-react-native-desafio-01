import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  formContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    position: 'absolute',
    top: 146,
    gap: 4,
  },
  input: {
    height: 54,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    borderStyle: 'solid',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    borderRadius: 6,
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
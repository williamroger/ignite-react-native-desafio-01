import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  info: {
    flexDirection: 'row',
    gap: 8,
  },
  label: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  box: {
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 19,
    borderRadius: 9.5,
  },
  value: {
    color: '#D9D9D9',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
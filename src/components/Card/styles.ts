import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderStyle: 'solid',
    borderWidth: 1,
    gap: 8,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 8,
  },
  checkbox: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unchecked: {
    height: 17.45,
    width: 17.45,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 17.45,
  },
  checked: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 17.45,
    width: 17.45,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 17.45,
    backgroundColor: '#4EA8DE',
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2',
    lineHeight: 22,
  },
  finished: {
    color: '#808080',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#808080',
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
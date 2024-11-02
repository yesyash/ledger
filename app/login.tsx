import { Button, StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">Login</ThemedText>
      <Button title="Sign In with Swiggy" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
})

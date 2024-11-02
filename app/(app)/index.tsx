import { StyleSheet, Text } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect, useState } from "react"
import { Link } from "expo-router"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, seData] = useState()

  const fetchDataFromSwiggy = async () => {
    const API_URL = "https://www.swiggy.com/dapi/order/all"
    const SESSION_ID = ""
    const cookie = `_session_tid=${SESSION_ID}`

    const headers = new Headers()
    headers.set("cookie", cookie)

    try {
      const swiggyOrders = await fetch(API_URL, { headers })
      const orders = await swiggyOrders.json()
      seData(orders)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataFromSwiggy()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Link href="/login">login</Link>
        <Text>{isLoading ? "Loading..." : data ? JSON.stringify(data, null, 2) : "No Data"}</Text>
      </ThemedView>
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
  titleContainer: {
    alignItems: "center",
    gap: 8,
  },
})

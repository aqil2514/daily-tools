import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: { color: "black", textAlign: "right", fontSize:"3rem" },
});

export function HeaderPDF() {
  return (
    <View>
      <Text style={styles.header}>Invoice</Text>
    </View>
  );
}

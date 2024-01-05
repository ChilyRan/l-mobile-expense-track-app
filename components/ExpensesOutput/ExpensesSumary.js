import { FlatList, StyleSheet, View, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpensesSumary({ expenses, perioadName }) {
  // Reduce is a standard JavaScript method that can be executed on arrays.

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.perioad}>{perioadName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSumary;
const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: GlobalStyles.color.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  perioad: {
    fontSize: 12,
    color: GlobalStyles.color.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.color.primary500,
  },
});

import React, { useState } from "react";

import { Button, StyleSheet, Text, View } from "react-native";

function Reports({ prayerStatus }) {
  const [prayerCounts, setPrayerCounts] = useState([0, 0, 0, 0, 0]);

  const calculatePrayers = (days) => {
    const newPrayerCounts = [0, 0, 0, 0, 0];
    const todaysDate = new Date();
    Object.keys(prayerStatus).map((date) => {
      const diffInMs = new Date(todaysDate) - new Date(date);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      if (diffInDays < days) {
        Object.keys(prayerStatus[date]).map((prayer) => {
          newPrayerCounts[parseInt(prayer)] +=
            prayerStatus[date][prayer].alone || prayerStatus[date][prayer].jamat
              ? 1
              : 0;
        });
      }
    });
    setPrayerCounts(newPrayerCounts);
  };

  const onSevenDays = () => {
    calculatePrayers(7);
  };
  const onMonth = () => {
    calculatePrayers(30);
  };
  const onDateRange = (numberOfDays) => {
    calculatePrayers(numberOfDays);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="WEEKLY" onPress={onSevenDays} />
        <Button title="MONTHLY" onPress={onMonth} />
        {/* <Button title="DATES" /> */}
      </View>
      <View style={styles.list}>
        <Text>Fajar {prayerCounts[0]}</Text>
        <Text>Zohar {prayerCounts[1]}</Text>
        <Text>Asar {prayerCounts[2]}</Text>
        <Text>Maghrib {prayerCounts[3]}</Text>
        <Text>Isha {prayerCounts[4]}</Text>
      </View>
    </View>
  );
}

export default Reports;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "#f0ffff",
  },
  container: {
    margin: 10,
  },
  list: {
    paddingTop: 50,
    alignItems: "center",
  },
});

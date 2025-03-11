import React, { useState } from "react";
import { View, Text, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate(
        (prevDate) =>
          new Date(
            prevDate.setHours(
              selectedTime.getHours(),
              selectedTime.getMinutes()
            )
          )
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Selected: {date.toLocaleString()}
      </Text>

      {/* Open Date Picker */}
      <Button title="Pick Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={onChangeDate}
        />
      )}

      {/* Open Time Picker */}
      <Button title="Pick Time" onPress={() => setShowTimePicker(true)} />
      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChangeTime}
        />
      )}
    </View>
  );
};

export default DateTimePickerExample;

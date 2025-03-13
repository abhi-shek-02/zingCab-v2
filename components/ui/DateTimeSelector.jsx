import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const DateTimeSelector = ({ onDateTimeSelect }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState(
    new Date().getHours() % 12 || 12
  );
  const [selectedMinute, setSelectedMinute] = useState(new Date().getMinutes());
  const [period, setPeriod] = useState(
    new Date().getHours() >= 12 ? "PM" : "AM"
  );

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(false);
    }
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#2d78ff",
          paddingVertical: 14,
          paddingHorizontal: 25,
          borderRadius: 10,
          marginBottom: 10,
        }}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Pick Date
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          backgroundColor: "#f0f0f0",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Picker
          selectedValue={selectedHour}
          style={{ height: 50, width: 80 }}
          onValueChange={(value) => setSelectedHour(value)}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <Picker.Item key={i + 1} label={(i + 1).toString()} value={i + 1} />
          ))}
        </Picker>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 5 }}>
          :
        </Text>

        <Picker
          selectedValue={selectedMinute}
          style={{ height: 50, width: 80 }}
          onValueChange={(value) => setSelectedMinute(value)}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <Picker.Item
              key={i}
              label={i.toString().padStart(2, "0")}
              value={i}
            />
          ))}
        </Picker>

        <Picker
          selectedValue={period}
          style={{ height: 50, width: 100 }}
          onValueChange={(value) => setPeriod(value)}
        >
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="PM" value="PM" />
        </Picker>
      </View>

      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>
        Selected: {date.toDateString()} {selectedHour}:
        {selectedMinute.toString().padStart(2, "0")} {period}
      </Text>
    </View>
  );
};

// ✅ Export the component properly
export default DateTimeSelector;

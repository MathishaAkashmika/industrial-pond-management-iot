void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 bps.
}

void loop() {
  int turbidityValue = analogRead(A0); // Read the turbidity sensor value from pin A0
  int pHValue = analogRead(A1); // Read the pH sensor value from pin A1
  
  // Format the sensor data as a comma-separated string
  String sensorData = String(turbidityValue) + "," + String(pHValue);
  
  Serial.println(sensorData); // Send the sensor data over serial
  
  delay(2000); // Wait for 2 seconds before sending the next set of data
}
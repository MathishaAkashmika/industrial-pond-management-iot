#define SensorPin A0 // the pH meter Analog output is connected with the Arduino’s Analog

void setup()
{
    pinMode(13, OUTPUT);
    Serial.begin(9600);
    Serial.println("Ready"); // Test the serial monitor
}

void loop()
{
    int sensorValue = analogRead(SensorPin);    // Read a single value from the pH sensor
    float voltage = sensorValue * 5.0 / 1024.0; // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V)
    float phValue = 3.5 * voltage;              // Convert the voltage to a pH value. Note: This formula needs calibration.

    Serial.print("    pH:");
    Serial.print(phValue, 2); // Print the pH value with 2 decimal places for precision
    Serial.println(" ");

    digitalWrite(13, HIGH); // Turn the LED on (indicate a reading was taken)
    delay(800);             // Wait for 800 milliseconds
    digitalWrite(13, LOW);  // Turn the LED off
}
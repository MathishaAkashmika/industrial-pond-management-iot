#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "YOUR_WIFI_SSID"; // Replace with your Wi-Fi SSID
const char* password = "YOUR_WIFI_PASSWORD"; // Replace with your Wi-Fi password

void setup() {
  Serial.begin(9600); // Start the serial communication
  WiFi.begin(ssid, password); // Connect to your Wi-Fi network
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to the WiFi network");
}

void loop() {
  if (Serial.available()) { 
    String sensorData = Serial.readStringUntil('\n'); // Read the data received from the Mega
    
    if(WiFi.status() == WL_CONNECTED){ //Check WiFi connection status
      HTTPClient http; //Declare an object of class HTTPClient
      http.begin("http://yourserver.com/api/data"); //Specify request destination
      http.addHeader("Content-Type", "application/json"); //Specify content-type header
      
      int httpResponseCode = http.POST("{\"data\":\"" + sensorData + "\"}"); //Send the request
      if (httpResponseCode > 0) { //Check the returning code
        String response = http.getString(); //Get the request response payload
        Serial.println(response); //Print the response payload
      }
      http.end(); //Close connection
    }
  }
}
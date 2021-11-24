import React from "react";
import { View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function MyCard({
  title,
  percentage,
  name,
  stream,
  cgpa,
  city,
}) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>Name: {name}</Text>
      {stream != "" && (
        <Text style={{ marginBottom: 10 }}>Stream: {stream}</Text>
      )}
      {percentage != "" && (
        <Text style={{ marginBottom: 10 }}>Percentage: {percentage}</Text>
      )}
      {cgpa != "" && <Text style={{ marginBottom: 10 }}>CGPA: {cgpa}</Text>}
      <Text style={{ marginBottom: 10 }}>City: {city}</Text>
    </Card>
  );
}

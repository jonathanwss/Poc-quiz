import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import BannerPng from '../../../assets/banner.png';
import Graphic from '../../../assets/graphic-home.png';

const styles = StyleSheet.create({
  cover: {
    height: 112,
  },
  container: { position: "absolute" },
  graphicWrapper: {
    position: "absolute",
    top: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: 16,
  },
  graphic: {
    width: 80,
    height: 80,
  },
  percentageWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: 14,
    lineHeight: 17,
    color: "#4E5C66",
    fontWeight: "600",
  },
  labelWrapper: { position: "absolute", top: 24, left: 120 },
  title: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    color: "#4E5C66",
  },
  description: {
    width: 129,
    fontSize: 12,
    lineHeight: 18,
    color: "#4E5C66",
    paddingTop: 8,
  },
});

const Banner = () => {
  return (
    <Card mode="contained">
      <Card.Cover style={styles.cover} source={BannerPng} />
      <View style={styles.container}>
        <View style={styles.graphicWrapper}>
          <Image style={styles.graphic} source={Graphic} />
          <View style={styles.percentageWrapper}>
            <Text style={styles.percentage}>75%</Text>
          </View>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.title}>Good Result!</Text>
          <Text style={styles.description}>
            Share your achievement with your friend
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default Banner;

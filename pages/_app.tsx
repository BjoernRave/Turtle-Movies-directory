import firebase from "firebase/app";
import "firebase/database";
import App from "next/app";
import React from "react";
import { fireBaseConfig } from "../config";
import { GlobalStyles } from "../styles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const app = !firebase.apps.length
      ? firebase.initializeApp(fireBaseConfig)
      : firebase.app();

    const database = app.database();

    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Component firestore={database} {...pageProps} />
      </>
    );
  }
}

export default MyApp;

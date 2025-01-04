
// React and Next
import App from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import Head from "next/head";

// Recoil
import { RecoilRoot } from "recoil";

// Apollo GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/Apollo/apolloClient";

// Local Components
import { HeaderBar } from "../components/Global/headerBar";
import "../styles/fonts.css"

////////////////
// App Loader //
////////////////
class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { color: "#ff9800" };
  }

  componentDidMount() {
    // Fixes the scroll jump issue when going to pages of different heights
    window.history.scrollRestoration = "manual";

    // If the user uses a keyboard then override the no outline styling
    window.addEventListener("keydown", this._handleKeydown);
  }

  _handleKeydown(e) {
    // Detect a keyboard user from a tab key press
    const isTabEvent = e.keyCode === 9;

    if (isTabEvent) {
      document.body.classList.add("using-keyboard");
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=5.0"
            key="viewport"
          />
        </Head>

        <>
          <DefaultSeo title="Welcome" titleTemplate="%s  | The Codex" />

          <RecoilRoot>
            <ApolloProvider client={client}>
              {/* <Layout> */}
              <div style={{position: 'relative'}}>
                <div style={{zIndex: 10, margin: 0, padding: 0, position: 'relative'}}>
                  <HeaderBar />
                </div>
                <div style={{zIndex: 1, position: 'relative'}}>
                  <Component {...pageProps} />
                </div>
              </div>
              {/* </Layout> */}
            </ApolloProvider>
          </RecoilRoot>
        </>
      </>
    );
  }
}

export default MyApp;

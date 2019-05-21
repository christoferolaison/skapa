import Head from "next/head";
import { Logotype } from "../components/logotype";

export default () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div
      style={{
        backgroundColor: "#fff",
        // backgroundColor: "#333333",
        // backgroundColor: "#444444",
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <Logotype>Skapa Solutions</Logotype>
      {/* <Logotype>Skapa Consulting AB</Logotype> */}
    </div>
  </>
);

import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `@font-face {
              font-family: "FKScreamer";
              src: url("${
            asset("/fonts/FKScreamer-Backslanted.otf")
          }") format("truetype");
              font-style: normal;
              font-weight: normal;
          }`,
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `@font-face {
              font-family: "FKScreamer";
              src: url("${
            asset("/fonts/FKScreamer-Slanted.otf")
          }") format("truetype");
              font-style: normal;
              font-weight: 700;
          }`,
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `@font-face {
              font-family: "FKScreamer";
              src: url("${
            asset("/fonts/FKScreamer-Upright.otf")
          }") format("truetype");
              font-style: normal;
              font-weight: 900;
          }`,
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `@font-face {
              font-family: "DMSans";
              src: url("${
            asset("/fonts/DMSans-Regular.ttf")
          }") format("truetype");
              font-style: normal;
              font-weight: normal;
          }`,
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `@font-face {
              font-family: "DMSans";
              src: url("${asset("/fonts/DMSans-Bold.ttf")}") format("truetype");
              font-style: normal;
              font-weight: 700;
          }`,
        }}
      />
    </Head>
  );
}

export default GlobalTags;

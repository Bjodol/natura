import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="min-h-screen bg-gradient-to-br from-base-active to-base-main bg-blend-overlay text-base-main-contrast">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

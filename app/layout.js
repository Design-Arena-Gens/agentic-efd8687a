import "./globals.css";

export const metadata = {
  title: "मोहन का सपना",
  description:
    "मोहन नाम के कुम्हार की आशा और उसके खास घड़े की कहानी, जिसने शहर में किसी की प्यास बुझाई।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}

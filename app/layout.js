export const metadata = {
  title: "Amoriscare | Home Care em São Paulo",
  description:
    "Cuidador de idosos, crianças especiais, pós-parto e pós-cirúrgico em São Paulo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

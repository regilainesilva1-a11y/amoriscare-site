"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    mensagem: "",
  });

  function enviar(e) {
    e.preventDefault();
    const texto = `Olá, meu nome é ${form.nome}%0A Telefone: ${form.telefone}%0A ${form.mensagem}`;
    window.open(`https://wa.me/5511926022608?text=${texto}`, "_blank");
  }

  return (
    <main style={{ fontFamily: "system-ui", margin: 0 }}>

      <header style={{ padding: 20, textAlign: "center" }}>
        <img src="/logo.png" style={{ width: 140 }} />
      </header>

      <section style={{
        background: "linear-gradient(135deg,#1e3c72,#2a5298)",
        color: "#fff",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1>Cuidado profissional no conforto da sua casa</h1>

        <p>
          Atendimento domiciliar para idosos, crianças com necessidades especiais,
          pós-parto e pacientes em recuperação.
        </p>

        <a href="https://wa.me/5511926022608"
          style={{
            background: "#FFD700",
            padding: 15,
            borderRadius: 8,
            display: "inline-block",
            marginTop: 20
          }}>
          Falar no WhatsApp
        </a>
      </section>

      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Serviços</h2>
        <p>Cuidador de idosos</p>
        <p>Crianças com patologia</p>
        <p>Pós-parto</p>
        <p>Pós-cirúrgico</p>
      </section>

      <section style={{ background: "#f5f5f5", padding: 40, textAlign: "center" }}>
        <h2>Diferenciais</h2>
        <p>Atendimento 24h</p>
        <p>Equipe qualificada</p>
        <p>Atendimento humanizado</p>
      </section>

      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Contato</h2>
        <p>Email: amoriscareltda@gmail.com</p>
        <p>Telefone: (11) 92602-2608</p>
        <p>RH: (11) 92543-7694</p>
      </section>

      <footer style={{ textAlign: "center", padding: 20 }}>
        Amoriscare LTDA - CNPJ: 65.732.357/0001-00
      </footer>

    </main>
  );
  }

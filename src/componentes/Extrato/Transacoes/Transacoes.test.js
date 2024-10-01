import { render, screen } from "@testing-library/react";
import Transacoes from ".";
import estilos from "../Extrato.module.css";

describe("Deve renderizar o mesmo componente", () => {
  const transacao = {
    transacao: "Depósito",
    valor: 100,
  };
  test("Com props atualizadas", () => {
    render(<Transacoes transacao={transacao} estilos={estilos} />);
    const tipoTransacao = screen.getByTestId("tipoTransacao");
    const valorTransacao = screen.getByTestId("valorTransacao");

    expect(tipoTransacao).toHaveTextContent("Depósito");
    expect(valorTransacao).toHaveTextContent("100");
  });
});

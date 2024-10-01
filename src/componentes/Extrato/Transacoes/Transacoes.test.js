import { render, screen } from "@testing-library/react";
import Transacoes from ".";
import estilos from "../Extrato.module.css";

describe("Deve renderizar o mesmo componente", () => {
  const transacao = {
    transacao: "Depósito",
    valor: 100,
  };

  const novaTransacao = {
    transacao: "Transferência",
    valor: 50,
  };

  test("Com props atualizadas", () => {
    render(<Transacoes transacao={transacao} estilos={estilos} />);
    const tipoTransacao = screen.getByTestId("tipoTransacao");
    const valorTransacao = screen.getByTestId("valorTransacao");

    expect(tipoTransacao).toHaveTextContent("Depósito");
    expect(valorTransacao).toHaveTextContent("R$ 100");
  });
  test("Com props atualizadas via rerender", () => {
    const { rerender } = render(
      <Transacoes transacao={transacao} estilos={estilos} />
    );

    rerender(<Transacoes transacao={novaTransacao} estilos={estilos} />);
    const novoTipoTransacao = screen.getByTestId("tipoTransacao");
    const novoValorTransacao = screen.getByTestId("valorTransacao");

    expect(novoTipoTransacao).toHaveTextContent("Transferência");
    expect(novoValorTransacao).toHaveTextContent("- R$ 50");
  });
});

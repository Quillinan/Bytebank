import { render, screen } from "@testing-library/react";
import Formulario from ".";
import userEvent from "@testing-library/user-event";

describe("Deve renderizar um campo de input", () => {
  test("No documento", () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    expect(campoTexto).toBeInTheDocument();
  });

  test("Com o type number", () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    expect(campoTexto).toHaveAttribute("type", "number");
  });

  test("Que pode ser preenchido", () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    userEvent.type(campoTexto, "50");
    expect(campoTexto).toHaveValue(50);
  });
});

describe("Deve chamar um evento de onSubmit", () => {
  const realizarTransacao = jest.fn();
  test("Ao clicar em realizar transação", () => {
    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole("button");
    userEvent.click(botao);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});

import { calculaNovoSaldo } from ".";

describe("Deve retornar o valor do saldo", () => {
  const saldo = 100;

  const listaDeTransações = [
    {
      transacao: "Depósito",
      valor: 50,
    },
    {
      transacao: "Transferência",
      valor: 50,
    },
  ];
  test("Atualizado com o rendimento", () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
    const novoSaldo = calculaRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toBeCalledWith(saldo);
  });
  test("Aumentar no depósito", () => {
    const calculaSaldo = jest.fn(calculaNovoSaldo);

    const novoSaldo = calculaSaldo(listaDeTransações[0], saldo);
    expect(novoSaldo).toBe(150);
  });
  test("Diminuir na transferência", () => {
    const calculaSaldo = jest.fn(calculaNovoSaldo);

    const novoSaldo = calculaSaldo(listaDeTransações[1], saldo);
    expect(novoSaldo).toBe(50);
  });
});

// write a currency formatter

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const currencyFormatter = (value: number) => {
  return formatter.format(value / 100);
};

export default currencyFormatter;

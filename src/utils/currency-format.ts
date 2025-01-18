export function currencyFormatter(
  amount: string | number | bigint | undefined,
  currency = "₦",
) {
  if (!amount) return `${currency}0.00`;

  return `${currency}${Intl.NumberFormat("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Number(amount))}`;
}

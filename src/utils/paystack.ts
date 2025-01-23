export function calculatePayment(value: string | number) {
  if (Number.isNaN(Number(value))) return 0;

  const amount = Number(value);

  const FEE_CAP = 2_000; // Nigerian Paystack Fee Cap
  const NIGERIAN_LOCAL_TRANSACTION_FEE = 1.5 / 100; // 1.5%

  const TRX_FEE = amount * NIGERIAN_LOCAL_TRANSACTION_FEE;
  const FINAL_AMOUNT =
    TRX_FEE > FEE_CAP
      ? amount + FEE_CAP
      : (amount + 100) / (1 - NIGERIAN_LOCAL_TRANSACTION_FEE) + 0.01;

  return Math.ceil(FINAL_AMOUNT * 100);
}

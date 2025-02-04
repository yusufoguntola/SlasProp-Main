export function getPaystackKey(): string {
  return (
    process.env.NEXT_PUBLIC_PAYSTACK_TEST ??
    "pk_test_c844526b24eec6fe53a6851ad0283e18c9adbc22"
  );
}

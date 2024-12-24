import { useState } from "react";

export default function useDisclosure(state = false) {
  const [current, setCurrent] = useState(state);

  const toggle = () => setCurrent((s) => !s);

  const open = () => setCurrent(true);

  const close = () => setCurrent(false);

  return [current, { toggle, close, open }] as const;
}

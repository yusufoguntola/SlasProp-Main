import { useRef, useState } from "react";

type MaterialMenu<Key extends string> = {
  [k in `${Key}Anchor`]: React.MutableRefObject<HTMLButtonElement | null>;
} & {
  [k in `${Key}AnchorEl`]: HTMLButtonElement | null;
} & {
  [k in `${Key}Open`]: () => void;
} & {
  [k in `${Key}IsOpen`]: boolean;
} & {
  [k in `${Key}Toggle`]: () => void;
} & {
  [k in `${Key}Close`]: () => void;
};

export function useMaterialMenu<Key extends string>(
  key: Key
): MaterialMenu<Key> {
  const anchor = useRef<HTMLButtonElement>(null);
  const anchorEl = anchor.current;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    [`${key}Anchor`]: anchor,
    [`${key}AnchorEl`]: anchorEl,
    [`${key}IsOpen`]: isOpen,
    [`${key}Open`]: open,
    [`${key}Close`]: close,
    [`${key}Toggle`]: toggle,
  } as MaterialMenu<Key>;
}

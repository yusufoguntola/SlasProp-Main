import { usePathname, useRouter, useSearchParams } from "next/navigation";

type MenuKeys<Key extends string> = {
  [k in `${Key}Open`]: () => void;
} & {
  [k in `${Key}IsOpen`]: boolean;
} & {
  [k in `${Key}Toggle`]: () => void;
} & {
  [k in `${Key}Close`]: () => void;
};

export function useModalState<K extends string>(state: K) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const openState = `${pathname}?modal=${state}`;

  const open = () => replace(openState);

  const close = () => replace(pathname);

  const opened = searchParams.get("modal") === state;

  const toggle = () => replace(opened ? pathname : openState);

  return {
    [`${state}IsOpen`]: opened,
    [`${state}Open`]: open,
    [`${state}Close`]: close,
    [`${state}Toggle`]: toggle,
  } as MenuKeys<K>;
}

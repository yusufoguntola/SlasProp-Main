import { Skeleton as MuiSkeleton, type SkeletonProps } from "@mui/material";

export function Skeleton({
  visible = true,
  children,
  ...props
}: SkeletonProps & { visible?: boolean }) {
  return visible ? <MuiSkeleton {...props} /> : children;
}

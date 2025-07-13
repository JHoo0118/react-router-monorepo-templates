import type { LinkProps } from "@tanstack/react-router";
import { Link as TanStackLink } from "@tanstack/react-router";

export function Link({ ...props }: LinkProps) {
  return <TanStackLink {...props} />;
}

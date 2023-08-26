import { IButton } from "@/interfaces";
import { Button } from "@mantine/core";
import { ReactNode } from "react";

const OutlineButton = ({
  children,
  style,
}: { children: ReactNode } & IButton) => {
  return (
    <Button variant="outline" style={{ ...style }}>
      {children}
    </Button>
  );
};

export default OutlineButton;

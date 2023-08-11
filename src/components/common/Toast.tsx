import { showNotification } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import type { ReactNode } from "react";

export const toast = {
  error: (title: string, message: ReactNode) =>
    showNotification({
      title: title,
      message,
      color: "red",
      icon: <IconCircleX />,
    }),
  success: (title: string, message: ReactNode) =>
    showNotification({
      title: title,
      message,
      color: "green",
      icon: <IconCheck />,
    }),
};

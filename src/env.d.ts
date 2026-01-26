/// <reference path="../.astro/types.d.ts" />

interface Window {
  handleQuickTransfer: (cedula: string) => void;
  toggleSidebarContactMenu: (event: Event, id: string) => void;
  showToast: (
    message: string,
    type?: "success" | "error" | "info",
    title?: string
  ) => void;
  markNotifRead: (id: string, el: HTMLElement) => void;
  requestPin: (callback: (pin: string) => void) => void;
}
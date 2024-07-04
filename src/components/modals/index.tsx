"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
// import { useMediaQuery } from "@uidotdev/usehooks";

const ResponsiveModal = ({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  children: React.ReactNode;
}) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Dialog>
    );
  } else {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Drawer>
    );
  }
};

const ResponsiveModalTrigger = ({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return <DialogTrigger asChild={asChild}>{children}</DialogTrigger>;
  } else {
    return <DrawerTrigger asChild={asChild}>{children}</DrawerTrigger>;
  }
};

const ResponsiveModalContent = ({
  title,
  desc,
  children,
}: {
  title?: string;
  desc?: string;
  children: React.ReactNode;
}) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    );
  } else {
    return <DrawerContent>{children}</DrawerContent>;
  }
};

export { ResponsiveModal, ResponsiveModalTrigger, ResponsiveModalContent };
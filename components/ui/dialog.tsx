"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Dialog = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
      />
    );
  }
  return <DialogPrimitive.Root {...props} />;
};

const DialogTrigger = ({ children, ...props }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile)
    return <DrawerPrimitive.Trigger {...props}>{children}</DrawerPrimitive.Trigger>;

  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
};

const DialogPortal = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile)
    return <DrawerPrimitive.Portal>{children}</DrawerPrimitive.Portal>;

  return <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>;
};

const DialogClose = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile)
    return <DrawerPrimitive.Close>{children}</DrawerPrimitive.Close>;

  return <DialogPrimitive.Close>{children}</DialogPrimitive.Close>;
};

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <DrawerPrimitive.Overlay
        ref={ref}
        className={cn("fixed inset-0 z-40 bg-black/80", className)}
        {...props}
      />
    );
  }
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<
    typeof DialogPrimitive.Content | typeof DrawerPrimitive.Content
  >,
  React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Content | typeof DrawerPrimitive.Content
  >
>(({ className, children, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <DialogPortal>
        <DialogOverlay />
        <DrawerPrimitive.Content
          ref={ref}
          className={cn(
            "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
            className
          )}
          {...(props as typeof DrawerPrimitive.Content)}
        >
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
          {children}
        </DrawerPrimitive.Content>
      </DialogPortal>
    );
  }
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...(props as typeof DialogPrimitive.Content)}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <div
        className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
};
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <div
        className={cn("mt-auto flex flex-col gap-2 p-4", className)}
        {...props}
      />
    );
  }
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <DrawerPrimitive.Title
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
      />
    );
  }
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <DrawerPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

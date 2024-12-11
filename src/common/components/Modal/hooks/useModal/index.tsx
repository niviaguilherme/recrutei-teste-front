import React, { useEffect, useState } from "react";

export function useModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [open]);

  return {
    handleClickOpen,
    handleClose,
    open,
    setOpen,
  };
}

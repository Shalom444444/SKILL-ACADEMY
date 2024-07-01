/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ReactNode } from "react"
  
type DialogTemplateProps={
    buttonTrigger?:ReactNode;
    title?:string;
    description?:string;
    content?:any;
    footer?:any;
    close?:any;
}
export const DialogTemplate = (props:DialogTemplateProps) => {
  return (
    <Dialog>
  <DialogTrigger asChild>{props.buttonTrigger}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-white">{props.title}</DialogTitle>
      <DialogDescription className="text-muted-foreground">
        {props.description}
      </DialogDescription>
    </DialogHeader>
    {props.content}
    <DialogFooter>
        <DialogClose className="flex gap-2 items-center">
            {props.footer}
            {props.close}
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

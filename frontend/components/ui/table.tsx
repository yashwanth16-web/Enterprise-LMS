"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Table({
  className,
  ...props
}: React.ComponentProps<"table">) {
  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      <div className="overflow-x-auto">
        <table
          className={cn(
            "w-full caption-bottom text-sm",
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
}

function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn(
        "bg-muted/40 [&_tr]:border-b border-border",
        className
      )}
      {...props}
    />
  )
}

function TableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      className={cn(
        "[&_tr:last-child]:border-0",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({
  className,
  ...props
}: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      className={cn(
        "border-t border-border bg-muted/30 font-medium",
        className
      )}
      {...props}
    />
  )
}

function TableRow({
  className,
  ...props
}: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-border transition-all duration-200 hover:bg-accent/50 data-[state=selected]:bg-accent",
        className
      )}
      {...props}
    />
  )
}

function TableHead({
  className,
  ...props
}: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "h-14 px-6 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function TableCell({
  className,
  ...props
}: React.ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "px-6 py-4 align-middle",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      className={cn(
        "py-4 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
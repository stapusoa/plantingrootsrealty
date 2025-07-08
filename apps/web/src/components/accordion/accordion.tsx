import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  accordionItemClass,
  accordionTriggerClass,
  accordionContentOuterClass,
  accordionContentInnerClass,
} from "./styles"
import type {
  AccordionRootProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./types"

export function AccordionRoot(props: AccordionRootProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemClass, className)}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerClass, className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(accordionContentOuterClass, className)}
      {...props}
    >
      <div className={cn(accordionContentInnerClass)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

AccordionRoot.Item = AccordionItem
AccordionRoot.Trigger = AccordionTrigger
AccordionRoot.Content = AccordionContent

export const Accordion = AccordionRoot
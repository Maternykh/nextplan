import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionPurp() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What kind of page is this?</AccordionTrigger>
        <AccordionContent>
          This is a page where you can add goals to your schedule
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are completed and incomplite?</AccordionTrigger>
        <AccordionContent>
          This state shows the stage of completion of the goal, at first it is
          incomplete, when the time comes, go to the goal and update this state
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How to use it?</AccordionTrigger>
        <AccordionContent>
          Enter all the required fields, set the completion value, and click add
          purpose. To change the completion status, go to the update page for
          this purpose and change the value
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

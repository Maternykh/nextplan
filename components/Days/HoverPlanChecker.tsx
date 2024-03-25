import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverPlanChecker() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <p className=" hover:cursor-pointer">#nextplan</p>
      </HoverCardTrigger>
      <HoverCardContent>
        Next plan is a website for planning your life.
      </HoverCardContent>
    </HoverCard>
  );
}

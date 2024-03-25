"use client";

import { setCopyDay } from "@/Redux/slices/copyDaySlice";
import { useAppDispatch } from "@/Types/Redux";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { IoCopy } from "react-icons/io5";

export function CopyButtonDay({ id }: { id: string }) {
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  return (
    <Button
      variant="outline"
      className=" bg-white border-2 border-green-500 rounded-xl p-2 mr-2"
      onClick={() => {
        dispatch(setCopyDay(id));
        toast({
          description: "The day was copied!",
        });
      }}
    >
      <IoCopy className=" text-green-500 text-xl" />
    </Button>
  );
}

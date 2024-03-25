"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteDay } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { RiDeleteBin2Fill } from "react-icons/ri";

export function AlertDialogDemo({
  _id,
  monthAndYears,
}: {
  _id: string;
  monthAndYears: number;
}) {
  const router = useRouter();
  const OnClickDeleteDay = () => {
    deleteDay(_id);
    router.push(`/day?monthAndYears=${monthAndYears}`);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className=" border-2 border-red-500 rounded-xl p-2 hover:bg-white"
        >
          <RiDeleteBin2Fill className=" text-red-500 text-xl" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to permanently delete this day?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => OnClickDeleteDay()}
            className=" bg-red-500 hover:bg-red-400 text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

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
import { deletePattern } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { RiDeleteBin2Fill } from "react-icons/ri";
export function AlertDialogPattern({ _id }: { _id: string }) {
  const router = useRouter();
  const OnClickDeletePattern = () => {
    deletePattern(_id);
    router.push("/patterns");
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
            Are you sure you want to permanently delete this pattern?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => OnClickDeletePattern()}
            className=" bg-red-500 hover:bg-red-400 text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

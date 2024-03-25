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
import { deletePurp } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
export function AlertDialogPurpos({ _id }: { _id: string }) {
  const router = useRouter();
  const OnClickDeletePurp = () => {
    deletePurp(_id);
    router.push(`/day?monthAndYears=1`);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className=" hover:text-red-500 bg-white p-2 text-xl rounded-xl text-red-500 mb-2"
        >
          <MdDelete />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to permanently delete this purpose?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => OnClickDeletePurp()}
            className=" bg-red-500 hover:bg-red-400 text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

import { searchProps } from "@/Types/DayType";
import AllDay from "@/components/Days/AllDay";
import AllPurp from "@/components/Purp/AllPurp";

export default function Home({ searchParams }: { searchParams?: searchProps }) {
  return (
    <>
      <article className=" xl:flex mt-2">
        <AllDay
          monthAndYears={searchParams?.monthAndYears}
          search={searchParams?.search}
        />
        <AllPurp />
      </article>
    </>
  );
}

import PatternForm from "@/components/Pattern/PatternForm";
import PatternPack from "@/components/Pattern/PatternPack";
import React from "react";

const PatternPage = () => {
  return (
    <article className=" xl:flex mt-2">
      <PatternPack />
      <PatternForm />
    </article>
  );
};

export default PatternPage;

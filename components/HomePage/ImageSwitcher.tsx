import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function ImageSwitcher() {
  const texts = [
    {
      MainText: "Hello, here you can learn how to use the site.",
      posts: [
        "It is easy to create schedules and daily routines on this site.",
        "You can also manipulate the created days. (For more information, see the last slide)",
      ],
    },
    {
      MainText: "Step 1",
      posts: [
        "Register and go to the add days page.",
        "Enter all the required fields, select the month or paste the copied day.",
      ],
    },
    {
      MainText: "Step 2",
      posts: [
        "After adding your day, you can find it among all the months.",
        "Enter all the required fields, select the month or paste the copied day.",
        "Click on the day to open the full version of the day.",
      ],
    },
    {
      MainText: "Step 3",
      posts: [
        "On the full day page you will see 3 buttons - delete, copy, change the day.",
      ],
    },
  ];
  return (
    <Carousel className="w-full max-w-xs xl:mr-2 ">
      <CarouselContent>
        {texts.map((text, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square justify-center p-6">
                  <h1 className=" font-bold text-xl">{text.MainText}</h1>
                  <ul>
                    {text.posts.map((post, index) => (
                      <li className=" my-2" key={index}>
                        {index + 1}.{post}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

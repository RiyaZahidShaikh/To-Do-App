import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import s1 from "@/app/images/new/beKind.jpeg";
import s2 from "@/app/images/new/dontlook.jpeg";
import s3 from "@/app/images/new/dontdream.jpeg";
import s4 from "@/app/images/new/proud.jpeg";
import s5 from "@/app/images/new/today.jpeg";
import s6 from "@/app/images/new/sun.jpeg";
import s7 from "@/app/images/new/youcandoit.jpeg";

export default function MotivationCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [s1, s2, s3, s4, s5, s6, s7];

  return (
    <div className="flex justify-center items-center">
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen-sm mb-4"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((s, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card >
                <CardContent className="flex items-center justify-center p-0">
                <Image src={s} alt="slide" className="m-0 w-full rounded-xl"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { virtualCards } from "@/data/cards";
import { VirtualCard } from "./virtual-card";

export function VirtualCards({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className={className}>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", containScroll: "trimSnaps" }}
      >
        <CarouselContent
          viewportClassName="-mx-[13px] -mt-3 -mb-7 px-[9px] pt-3 pb-7 sm:-mx-16 sm:px-[60px] lg:-mx-[60px] lg:px-[60px]"
          className="-ml-4 lg:-ml-6"
        >
          {virtualCards.map((card) => (
            <CarouselItem
              key={card.id}
              className="max-w-[438px] pl-4 lg:max-w-none lg:basis-auto lg:pl-6"
            >
              <VirtualCard card={card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="relative z-10 mt-[19px] flex justify-center gap-3 lg:hidden">
        {virtualCards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            aria-label={`Show card ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3 rounded-full transition-all",
              index === activeIndex ? "w-12 bg-[#482ea6]" : "w-3 bg-[#d9d9d9]",
            )}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import "./carousel.css";
import { TouchEvent, useEffect, useRef, useState } from "react";
import CarouselItem from "./carousel-item";

export default function Carousel() {
  const items = [
    {
      icon: require("../asset/icons/github.svg"),
      title: "Mobile Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tags: ["Java", "Kotlin", "Flutter", "Firebase", "JUnit", "Mockito", "IntelliJ IDEA", "Android Studio"]
    },
    {
      icon: require("../asset/icons/github.svg"),
      title: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tags: [
        "HTML",
        "CSS",
        "Typescript",
        "React.js",
        "Tailwind",
        "Spring Boot",
        "Github",
        "Visual Studio",
      ],
    },
    {
      icon: require("../asset/icons/github.svg"),
      title: "Data Analyst",
      description:
        "I enjoy deriving meaningful narratives from complex datasets, using critical thinking skills, statistical analysis, and visualization techniques",
      tags: ["Python", "R", "SQL", "Micrsoft Excel", "Power BI", "Statistics", "Data Storytelling",
      ],
    },
  ];


  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    if (carouselDivRef.current) {
        const scrollableWidth = carouselDivRef.current.scrollWidth - carouselDivRef.current.clientWidth;
        const scrollBy = (newIndex - activeIndex) * scrollableWidth / 2;
        // const scrollBy = (percentage / 100) * scrollableWidth;
        carouselDivRef.current.scrollLeft += scrollBy;
      }
    setActiveIndex(newIndex);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current &&
      touchEndX.current &&
      touchStartY.current &&
      touchEndY.current
    ) {
      const distanceX = touchEndX.current - touchStartX.current;
      const distanceY = touchEndY.current - touchStartY.current;
      const isLeftSwipe = distanceX < -minSwipeDistance;
      const isRightSwipe = distanceX > minSwipeDistance;

      if (isRightSwipe && distanceX > distanceY) {
        // swipe right
        updateIndex(activeIndex - 1);
      }

      if (isLeftSwipe && Math.abs(distanceX) > distanceY) {
        // swipe left
        updateIndex(activeIndex + 1);
      }

      // Reset touch positions
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  const carouselDivRef = useRef(null);
  const scrollHorizontally = (percentage: number) => {
    if (carouselDivRef.current) {
      const scrollableWidth = carouselDivRef.current.scrollWidth - carouselDivRef.current.clientWidth;
      const scrollBy = (percentage / 100) * scrollableWidth;
      carouselDivRef.current.scrollLeft += scrollBy;
    }
  };

  return (
    <div>
        <div ref={carouselDivRef}  className="carousel">
            {items.map((item, index) => (
                <CarouselItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                />
            ))}
        </div>
        <div className="carousel-indicator"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
            <div className="circle active" onClick={() => {updateIndex(0)}}></div>
            <div className="circle" onClick={() => {updateIndex(1)}}></div>
            <div className="circle" onClick={() => {updateIndex(2)}}></div>
      </div>
    </div>
  );
}

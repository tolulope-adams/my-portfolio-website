'use client'
import "./carousel.css";
import { TouchEvent, useEffect, useRef, useState } from "react";
import CarouselItem from "./carousel-item"

export default function Carousel(){
    const items = [
        {
            icon: require("../asset/icons/github.svg"),
            title: "Mobile Developerrrrrrrrrrrrrrrrrrrrr",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            tags: ['Java', 'Kotlin', 'Flutter','Firebase', 'JUnit','Mockito', 'IntelliJ IDEA', 'Android Studio'],
        },
        {
            icon: require("../asset/icons/github.svg"),
            title: "Web Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            tags: ['HTML', 'CSS', 'Typescript', 'React.js', 'Tailwind', 'Spring Boot', 'Github', 'Visual Studio'],
        },
        {
            icon: require("../asset/icons/github.svg"),
            title: "Data Analyst",
            description: "I enjoy deriving meaningful narratives from complex datasets, using critical thinking skills, statistical analysis, and visualization techniques",
            tags: ['Python', 'R', 'SQL','Micrsoft Excel', 'Power BI','Statistics', 'Data Storytelling'],
        },
    ];
    
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const touchEndY = useRef<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= items.length) {
          newIndex = items.length - 1;
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
    if (touchStartX.current && touchEndX.current && touchStartY.current && touchEndY.current) {
        const distanceX = touchEndX.current - touchStartX.current
        const distanceY = touchEndY.current - touchStartY.current
        const isLeftSwipe = distanceX < -minSwipeDistance
        const isRightSwipe = distanceX > minSwipeDistance

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

  const divRef = useRef<HTMLDivElement>(null);
  // gap of carousel items in percentage
  const itemGap = 10;

    return(
        <div ref={divRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full flex flex-col gap-4 overflow-hidden">
            <div className="max-w-full flex flex-row justify-items-center whitespace-nowrap"
                style={{
                    gap: `${itemGap}%`,
                    transform: `translate(-${activeIndex * (itemGap + 100)}%)`,
                    transition: 'transform 0.5s ease-in-out'}}>
                {
                    items.map((item, index) => {
                        return <CarouselItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title} 
                                    description={item.description} 
                                    tags={item.tags}
                                />;
                    })
                }
            </div>
            <div className="w-fit flex flex-row items-center gap-4 mx-auto z-10">
                <span className="triangle active" onClick={() => {updateIndex(0);}}></span>
                <span className="w-4 h-4 rounded-2xl bg-red-600" onClick={() => {updateIndex(1);}}></span>
                <span className="w-4 h-4 rounded bg-red-600" onClick={() => {updateIndex(2);}}></span>
            </div>
        </div>
    )
};
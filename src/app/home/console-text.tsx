'use client'
import { useEffect, useState, useRef } from "react";
import './console-text.css';

export default function ConsoleText(
  props:{
    words: string[],
    className?: string
  }){
  
  const [varX, setVarX] = useState(0)
  const [letterCount, setLetterCount] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const consoleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;

    let x = 1;

    const interval = window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        setWaiting(true);

        if (target) {
          target.innerHTML = props.words[0].substring(0, letterCount);
        }

        window.setTimeout(() => {
          const usedWord = props.words.shift();
          if (usedWord) {
            props.words.push(usedWord);
          }
          setLetterCount(1);
          setWaiting(false);
        }, 1000);
      } else if (letterCount === props.words[0]?.length + 1 && waiting === false) {
        setWaiting(true);

        window.setTimeout(() => {
          setLetterCount(-1);
          setWaiting(false);
        }, 120);
      } else if (waiting === false) {
        if (target) {
          target.innerHTML = props.words[0]?.substring(0, letterCount);
        }
        setLetterCount((prev) => prev + 1);
      }
    }, 120);

    return () => {
      clearInterval(interval);
    };

    }, [varX, letterCount, waiting, props.words]
  );

  return (
    <div className={"flex flex-row " + props.className}>
      <h1>I&apos;m&nbsp;</h1>
      <h1 ref={targetRef}></h1>
      <div ref={consoleRef} className='console-underscore'>&#95;</div>
    </div>
  )
}


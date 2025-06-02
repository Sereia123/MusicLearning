'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

export default function Select(){
  const [rotated, setRotated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
    setIsVisible(!isVisible);
  };

  return(
    <div className="w-[800px] h-full flex items-center justify-center flex-col mt-10">
      <div 
        onClick={handleClick}
        className="flex w-[400px] p-3 rounded-lg bg-white"
      >
        <button
          className="flex items-center text-blue-300 font-bold text-3xl mr-auto"
        >
          Section：スケール
        </button>
        <button
          className={`flex items-center text-blue-300 font-bold text-5xl ml-auto transform transition-transform duration-300 ${
            rotated ? '-rotate-45' : 'rotate-0'
          }`}
        >
          +
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-[300px] p-3 rounded-lg bg-white mt-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <Link href="/pages/page1">
                <button className="flex items-center text-blue-300 font-bold text-2xl mr-auto">
                  ・メジャースケール
                </button>
              </Link>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  )
}
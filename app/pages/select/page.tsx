'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    label: 'スケール',
    links: [
      { name: '・メジャースケール', href: '/pages/pageMajorScale' },
      { name: '・マイナースケール', href: '/pages/pageMinorScale' },
    ],
  },
  {
    label: 'コード',
    links: [
      { name: '・メジャーコード(2和音)', href: '/pages/pageMajorCode2' },
      { name: '・マイナーコード(2和音)', href: '/pages/pageMinorCode2' },
    ],
  },
];

export default function Select() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      layout
      className="w-[1000px] h-full mx-auto flex flex-col items-center justify-center mt-10 gap-5"
    >
      {sections.map((section, index) => {
        const isAfterActive = activeIndex !== null && index > activeIndex;
        const expandedLinksCount = activeIndex !== null ? sections[activeIndex].links.length : 0;
        const extraSpacing = isAfterActive ? (expandedLinksCount * 64) : 0;

        return (
          <motion.div
            key={index}
            layout
            className="w-full relative"
            style={{ marginTop: extraSpacing }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* セクション見出し */}
            <div
              onClick={() => toggleSection(index)}
              className={`flex w-[400px] p-3 mb-2 rounded-lg bg-white cursor-pointer justify-between items-center ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
            >
              <div className="text-blue-300 font-bold text-3xl">
                Section：{section.label}
              </div>
              {/* 展開アイコン */}
              <motion.div
                className="text-blue-300 font-bold text-5xl"
                animate={{ rotate: activeIndex === index ? -45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.div>
            </div>

            {/* 展開部分 */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3}}
                  className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'}`}
                >
                  <div className="flex flex-col gap-2">
                    {section.links.map((link, j) => (
                      <Link href={link.href} key={j}>
                        <button className={`w-[300px] p-3 mt-3  text-blue-300 font-bold text-2xl text-left rounded-lg bg-white `}>
                          {link.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

    </motion.div>
  );
}

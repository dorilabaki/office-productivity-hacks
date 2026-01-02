'use client';

import { useState } from 'react';
import { Keyboard, Table, FileSpreadsheet, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { shortcuts } from '@/data/shortcuts';

const softwareIcons: Record<string, typeof Table> = {
  'Excel': Table,
  'Google Sheets': FileSpreadsheet,
  'Word': FileText,
};

const softwareColors: Record<string, string> = {
  'Excel': 'bg-excel-100 text-excel-600 border-excel-200',
  'Google Sheets': 'bg-sheets-100 text-sheets-600 border-sheets-200',
  'Word': 'bg-word-100 text-word-600 border-word-200',
};

export default function ShortcutsPage() {
  const [activeSoftware, setActiveSoftware] = useState(shortcuts[0].software);
  const activeShortcuts = shortcuts.find(s => s.software === activeSoftware);

  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Keyboard className="w-4 h-4" />
                Keyboard Shortcuts Reference
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Master Your Keyboard</h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">
                Stop reaching for the mouse. These essential shortcuts will save you hours every week.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-slate-100 sticky top-16 md:top-20 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2">
            {shortcuts.map((software) => {
              const Icon = softwareIcons[software.software] || Table;
              const isActive = activeSoftware === software.software;
              return (
                <button
                  key={software.software}
                  onClick={() => setActiveSoftware(software.software)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? `${softwareColors[software.software]} border`
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {software.software}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          {activeShortcuts && (
            <motion.div
              key={activeSoftware}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeShortcuts.categories.map((category) => (
                <div key={category.name} className="card p-6">
                  <h2 className="font-bold text-slate-900 text-lg mb-4 pb-3 border-b border-slate-100">
                    {category.name}
                  </h2>
                  <div className="space-y-3">
                    {category.shortcuts.map((shortcut, index) => (
                      <div key={index} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {shortcut.keys.map((key, keyIndex) => (
                            <span key={keyIndex} className="contents">
                              <kbd className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 font-mono text-xs font-medium bg-slate-100 border border-slate-200 rounded text-slate-700">
                                {key}
                              </kbd>
                              {keyIndex < shortcut.keys.length - 1 && (
                                <span className="text-slate-400 text-xs">+</span>
                              )}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 text-right">{shortcut.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pro Tip: Build Muscle Memory</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-6">
              Pick 2-3 shortcuts to focus on each week. Every time you reach for the mouse, stop and use the shortcut instead. Within a month, they&apos;ll become second nature.
            </p>
            <a href="/resources" className="btn-primary">Explore More Tips</a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}

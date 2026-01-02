interface KeyboardShortcutProps {
  keys: string[];
  action: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function KeyboardShortcut({ keys, action, size = 'md' }: KeyboardShortcutProps) {
  const sizeClasses = {
    sm: 'text-xs min-w-[1.5rem] h-6 px-1.5',
    md: 'text-sm min-w-[1.75rem] h-7 px-2',
    lg: 'text-base min-w-[2rem] h-8 px-2.5'
  };

  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <span key={index} className="contents">
            <kbd className={`kbd ${sizeClasses[size]}`}>
              {key}
            </kbd>
            {index < keys.length - 1 && (
              <span className="text-slate-400 text-xs mx-0.5">+</span>
            )}
          </span>
        ))}
      </div>
      <span className="text-slate-600 text-sm">{action}</span>
    </div>
  );
}

interface ShortcutGridProps {
  shortcuts: { keys: string[]; action: string }[];
}

export function ShortcutGrid({ shortcuts }: ShortcutGridProps) {
  return (
    <div className="divide-y divide-slate-100">
      {shortcuts.map((shortcut, index) => (
        <KeyboardShortcut
          key={index}
          keys={shortcut.keys}
          action={shortcut.action}
        />
      ))}
    </div>
  );
}

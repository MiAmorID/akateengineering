import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const options: { value: 'en' | 'id'; labelKey: string }[] = [
  { value: 'en', labelKey: 'lang.english' },
  { value: 'id', labelKey: 'lang.bahasa' },
];

const LanguageSelector = ({ compact }: { compact?: boolean }) => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const sizeClasses = compact ? 'text-sm px-2 py-1 rounded-full' : 'text-sm px-3 py-1.5 rounded-full';
  const optionTextClass = compact ? 'text-xs' : 'text-sm';

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 ${open ? 'bg-white/20 ring-1 ring-white/20' : 'bg-white/5 hover:bg-white/10'} backdrop-blur-sm border border-white/10 text-white shadow-sm transition ${sizeClasses}`}
      >
        <span className="truncate font-medium">{t(options.find((o) => o.value === lang)!.labelKey)}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        role="menu"
        aria-hidden={!open}
        className={`absolute right-0 mt-2 w-44 bg-gray-800 text-white rounded-md shadow-lg ring-1 ring-black ring-opacity-40 overflow-hidden transition-all transform ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            role="menuitem"
            onClick={() => {
              setLang(opt.value);
              setOpen(false);
            }}
            className={`w-full text-left px-3 py-2 flex items-center justify-between gap-2 transition-colors focus:outline-none ${opt.value === lang ? 'bg-gray-700 font-semibold text-white' : 'hover:bg-gray-700 text-white'}`}
          >
            <span className={optionTextClass}>{t(opt.labelKey)}</span>
            {opt.value === lang && <Check className="w-4 h-4 text-blue-400" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;

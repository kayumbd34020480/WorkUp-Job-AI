
import React, { useState, useMemo, ReactNode } from 'react';

// --- Icon Components ---

const FileTextIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TagIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z" />
    <path d="M7 7h.01" />
  </svg>
);

const ClickIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
        <path d="m22 12.5-3 3-1.5-1.5" />
        <path d="M14 12.5a5 5 0 0 1 5 5" />
    </svg>
);

const CurrencyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const PromoDepositIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
        <path d="M15 12v4" />
        <path d="M12 15h6" />
    </svg>
);

const MelbetIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
        <path d="M12 12l2 3 2-3" />
    </svg>
);

const GameIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r=".5" fill="currentColor"></circle>
        <circle cx="15.5" cy="8.5" r=".5" fill="currentColor"></circle>
        <circle cx="15.5" cy="15.5" r=".5" fill="currentColor"></circle>
        <circle cx="8.5" cy="15.5" r=".5" fill="currentColor"></circle>
        <circle cx="12" cy="12" r=".5" fill="currentColor"></circle>
    </svg>
);

const BonusDepositIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <path d="M12 12v6" />
        <path d="M9 15h6" />
    </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.76C18.25 5 12 5 12 5s-6.25 0-7.82.43a2.5 2.5 0 0 0-1.76 1.76C2 8.75 2 12 2 12s0 3.25.43 4.81a2.5 2.5 0 0 0 1.76 1.76C5.75 19 12 19 12 19s6.25 0 7.82-.43a2.5 2.5 0 0 0 1.76-1.76C22 15.25 22 12 22 12s0-3.25-.42-4.81z" />
        <polygon points="10 9 15 12 10 15 10 9" />
    </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

// --- UI Components ---

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  colorClasses: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, colorClasses }) => {
  return (
    <div className={`p-5 rounded-xl transition-all duration-300 ${colorClasses}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="text-xl opacity-80">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight">
        {value.toLocaleString()}
      </p>
    </div>
  );
};

interface ToolCardProps {
    id: string;
    label: string;
    icon: ReactNode;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ id, label, icon, checked, onChange }) => (
    <label htmlFor={id} className={`group block p-4 border rounded-lg cursor-pointer transition-all duration-200 ${checked ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500' : 'border-slate-300 bg-white hover:border-slate-400'}`}>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className={`transition-colors duration-200 ${checked ? 'text-indigo-600' : 'text-slate-500 group-hover:text-slate-700'}`}>
                    {icon}
                </div>
                <span className={`font-semibold transition-colors duration-200 ${checked ? 'text-indigo-900' : 'text-slate-700 group-hover:text-slate-900'}`}>{label}</span>
            </div>
            <div className={`w-5 h-5 flex items-center justify-center border rounded-full transition-all duration-200 ${checked ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-400 group-hover:border-slate-500'}`}>
                {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 9"><path d="M1 4.5L4.5 8L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
        </div>
        <input type="checkbox" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only" />
    </label>
);


// --- Helper Functions ---

const highlightMatch = (text: string, regex: RegExp, className: string): React.ReactNode => {
    if (!text) return text;
    const parts = text.split(regex);
    if (parts.length <= 1) return text;

    const matches = text.match(regex) || [];

    return (
        <>
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i < matches.length && (
                        <strong className={className}>{matches[i]}</strong>
                    )}
                </React.Fragment>
            ))}
        </>
    );
};

const renderMarkdownBold = (text: string): React.ReactNode => {
    const parts = text.split('**');
    return parts.map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
};


// --- Tool Components ---

const WordCounter: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [showBonus, setShowBonus] = useState<boolean>(false);
  const [showPromo, setShowPromo] = useState<boolean>(false);
  const [showMenuDeposit, setShowMenuDeposit] = useState<boolean>(false);
  const [showCurrency, setShowCurrency] = useState<boolean>(false);
  const [showDateOfBirth, setShowDateOfBirth] = useState<boolean>(false);
  const [showPromoDeposit, setShowPromoDeposit] = useState<boolean>(false);
  const [showMelbetDeposit, setShowMelbetDeposit] = useState<boolean>(false);
  const [showBonusDeposit, setShowBonusDeposit] = useState<boolean>(false);
  const [showGame, setShowGame] = useState<boolean>(false);
  const [showYtTranscript, setShowYtTranscript] = useState<boolean>(false);
  const [showYtTranscript2, setShowYtTranscript2] = useState<boolean>(false);
  const [showYtTranscript3, setShowYtTranscript3] = useState<boolean>(false);

  // State for Bonus Paraphraser
  const [depositStartTime, setDepositStartTime] = useState('');
  const [depositEndTime, setDepositEndTime] = useState('');
  const [bonusParaphraseOutput, setBonusParaphraseOutput] = useState('');
  const [isBonusParaphraseCopied, setIsBonusParaphraseCopied] = useState(false);

  // State for Promo Paraphraser
  const [promoParaphraseOutput, setPromoParaphraseOutput] = useState('');
  const [isPromoParaphraseCopied, setIsPromoParaphraseCopied] = useState(false);
  
  // State for Menu & Deposit Paraphraser
  const [menuClickTime, setMenuClickTime] = useState('');
  const [depositClickTime, setDepositClickTime] = useState('');
  const [menuDepositParaphraseOutput, setMenuDepositParaphraseOutput] = useState('');
  const [isMenuDepositParaphraseCopied, setIsMenuDepositParaphraseCopied] = useState(false);

  // State for Currency Paraphraser
  const [personalProfileTime, setPersonalProfileTime] = useState('');
  const [currencyParaphraseOutput, setCurrencyParaphraseOutput] = useState('');
  const [isCurrencyParaphraseCopied, setIsCurrencyParaphraseCopied] = useState(false);

  // State for Date of Birth Paraphraser
  const [promoCodeTime, setPromoCodeTime] = useState('');
  const [personalProfileClickTime, setPersonalProfileClickTime] = useState('');
  const [dateOfBirthParaphraseOutput, setDateOfBirthParaphraseOutput] = useState('');
  const [isDateOfBirthParaphraseCopied, setIsDateOfBirthParaphraseCopied] = useState(false);

  // State for Promo & Deposit Paraphraser
  const [depositMethod, setDepositMethod] = useState<'Bkash' | 'Nagad'>('Bkash');
  const [promoDepositParaphraseOutput, setPromoDepositParaphraseOutput] = useState('');
  const [isPromoDepositParaphraseCopied, setIsPromoDepositParaphraseCopied] = useState(false);

  // State for Melbet & Deposit Paraphraser
  const [melbetDepositMethod, setMelbetDepositMethod] = useState<'Bkash' | 'Nagad'>('Bkash');
  const [melbetDepositParaphraseOutput, setMelbetDepositParaphraseOutput] = useState('');
  const [isMelbetDepositParaphraseCopied, setIsMelbetDepositParaphraseCopied] = useState(false);
  
  // State for Bonus & Deposit Paraphraser
  const [bonusDepositMethod, setBonusDepositMethod] = useState<'Bkash' | 'Nagad'>('Bkash');
  const [bonusDepositParaphraseOutput, setBonusDepositParaphraseOutput] = useState('');
  const [isBonusDepositParaphraseCopied, setIsBonusDepositParaphraseCopied] = useState(false);

  // State for Game Paraphraser
  const [gameParaphraseOutput, setGameParaphraseOutput] = useState('');
  const [isGameParaphraseCopied, setIsGameParaphraseCopied] = useState(false);


  const wordCount = useMemo(() => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  }, [text]);

  const bonusCount = useMemo(() => {
    if (!showBonus && !showBonusDeposit) return 0;
    const matches = text.match(/বোনাস/g);
    return matches ? matches.length : 0;
  }, [text, showBonus, showBonusDeposit]);

  const promoCount = useMemo(() => {
    if (!showPromo && !showPromoDeposit) return 0;
    const matches = text.match(/প্রোমো কোড|প্রমো কোড|প্রমোকোড|প্রোমো-কোড|promocode|promo code|প্রেমো কোড|পম কোড|পোমো কোড|পমো কোড/gi);
    return matches ? matches.length : 0;
  }, [text, showPromo, showPromoDeposit]);

  const melbetCount = useMemo(() => {
    if (!showMelbetDeposit) return 0;
    const matches = text.match(/মেলবেট|মেলবেড|Melbet|melbet|মেলবেইট|মেলবেইড|মেইলবেট|মেইলবেড|মেইলবেইট|মেইলবেইড/gi);
    return matches ? matches.length : 0;
  }, [text, showMelbetDeposit]);
  
  const bonusLines = useMemo(() => {
    if (!showBonus || !text) return [];
    return text
      .split('\n')
      .map((line, index) => ({ line, lineNumber: index + 1 }))
      .filter(item => item.line.includes('বোনাস'));
  }, [text, showBonus]);

  const promoLines = useMemo(() => {
    if (!showPromo || !text) return [];
    const promoRegex = /প্রোমো কোড|প্রমো কোড|প্রমোকোড|প্রোমো-কোড|promocode|promo code|প্রেমো কোড|পম কোড|পোমো কোড|পমো কোড/i;
    return text
      .split('\n')
      .map((line, index) => ({ line, lineNumber: index + 1 }))
      .filter(item => promoRegex.test(item.line));
  }, [text, showPromo]);

  const handleGenerateBonusParaphrase = () => {
    if (!depositStartTime || !depositEndTime) {
        return;
    }
    
    const depositTime = `${depositStartTime}-${depositEndTime}`;
    const bengaliBonusCount = bonusCount.toString().replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

    const paraphrases = [
        `**s1:** বোনাস ${bonusCount} বার, ডিপোজিট ${depositTime}, withdraw দেখানো হয়নি।`,
        `**s2:** Bonus bola hoyeche ${bonusCount} bar and Deposit kora hoyeche ${depositTime} minute but Withdraw dekhano hoini।`,
        `**s3:** Bonus = ${bonusCount} bar, Deposit = ${depositTime} minute and withdraw kore dekhano hoini।`,
        `**s4:** Bonus bola hoise ${bonusCount} bar, Deposit kora hoise ${depositTime} minute but Withdraw dekhano hoini।`,
        `**s5:** বোনাস বলা হইছে ${bonusCount} বার। ডিপোজিট হইছে ${depositTime} মিনিটে বাট উইথড্র ভিডিও তে দেখায় নি।`,
        `**s6:** ${bonusCount} বার বোনাস বলা হয়। ডিপোজিট ${depositTime} এর মধ্যে হয়েছে, উইথড্র দেখানো হয়নি।`,
        `**s7:** ${bonusCount} bar bonus bola hoise. Deposit ${depositTime} minute e hoyeche, withdraw dekhano hoini।`,
        `**s8:** Bonus: ${bonusCount} bar, Deposit ${depositTime} minute, withdraw dekhano hoini।`,
        `**s9:** ${bengaliBonusCount} বার বোনাস বলা হয়েছে এবং ${depositTime} মিনিটে ডিপোজিট করা হয়েছে, উইথড্র দেখানো হয়নি।`,
        `**s10:** বোনাস ${bonusCount} বার, ডিপোজিট ${depositTime}, উইথড্র হয়নি।`
    ];
    
    const header = 'তোমার দেওয়া টেক্সট অনুযায়ী নিচে **s1–s10 নিয়মে ১০টি paraphrased version** দেওয়া হলো 👇\n\n---\n\n';
    setBonusParaphraseOutput(header + paraphrases.join('\n'));
  };

  const handleBonusParaphraseCopy = () => {
    if (bonusParaphraseOutput) {
      const plainText = bonusParaphraseOutput.replace(/\*\*/g, '');
      navigator.clipboard.writeText(plainText).then(() => {
        setIsBonusParaphraseCopied(true);
        setTimeout(() => setIsBonusParaphraseCopied(false), 2000);
      });
    }
  };
  
  const handleGeneratePromoParaphrase = () => {
    const bengaliPromoCount = promoCount.toString().replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

    const paraphrases = [
        `s1: প্রমো কোড বলা হয়েছে ${promoCount} বার`,
        `s2: Promo code mot ${promoCount} bar bola hoyeche`,
        `s3: Promo code = ${promoCount} bar`,
        `s4: প্রমো কোড ${promoCount} বার শোনা গেছে।`,
        `s5: ${promoCount} bar bolse`,
        `s6: ${bengaliPromoCount} বার প্রমো কোড বলা হয়েছিল`,
        `s7: ${promoCount} bar Promo code bola hoyechilo`,
        `s8: ${promoCount} bar`,
        `s9: ${bengaliPromoCount} বার বলছে`,
        `s10: ${bengaliPromoCount} বার`
    ];

    setPromoParaphraseOutput(paraphrases.join('\n'));
  };

  const handlePromoParaphraseCopy = () => {
      if (promoParaphraseOutput) {
          navigator.clipboard.writeText(promoParaphraseOutput).then(() => {
              setIsPromoParaphraseCopied(true);
              setTimeout(() => setIsPromoParaphraseCopied(false), 2000);
          });
      }
  };
    
  const handleGenerateMenuDepositParaphrase = () => {
    if (!menuClickTime || !depositClickTime) return;

    const menuTimeVal = menuClickTime.trim();
    const depositTimeVal = depositClickTime.trim();
    const menuTimeWithUnit = `${menuTimeVal} minute`;
    const depositTimeWithUnit = `${depositTimeVal} minute`;

    const paraphrases = [
      `s1: menu click = ${menuTimeVal}, Deposit click = ${depositTimeVal}`,
      `s2: Menu te click kora hoyeche ${menuTimeWithUnit} and Deposit e click kora hoyeche ${depositTimeWithUnit} e।`,
      `s3: মেনুতে ক্লিক করা হয়েছে ${menuTimeVal} মিনিটে, ডিপোজিটে ক্লিক করা হয়েছে ${depositTimeVal} মিনিটে।`,
      `s4: মেনুতে ক্লিক হয়েছে ${menuTimeVal} মিনিটে আর ডিপোজিটে ক্লিক করা হয়েছে ${depositTimeVal} মিনিটে।`,
      `s5: Menu te click kora hoise ${menuTimeWithUnit} and deposit e click kora hoise ${depositTimeWithUnit}।`,
      `s6: ${menuTimeWithUnit} Menu click, ${depositTimeWithUnit} Deposit click।`,
      `s7: ${menuTimeWithUnit} Menu click kora hoyeche, tarpor ${depositTimeWithUnit} Deposit click kora hoyeche।`,
      `s8: প্রথমে ${menuTimeVal} মিনিটে মেনুতে ক্লিক করা হয়, পরে ${depositTimeVal} মিনিটে ডিপোজিটে ক্লিক করা হয়।`,
      `s9: ${menuTimeWithUnit} Menu e click hoise, pore ${depositTimeWithUnit} Deposit e click kora hoise।`,
      `s10: মেনুতে ক্লিকের সময় ছিল ${menuTimeVal}, আর ডিপোজিটে ক্লিকের সময় ছিল ${depositTimeVal}।`,
    ];
    setMenuDepositParaphraseOutput(paraphrases.join('\n'));
  };

  const handleMenuDepositParaphraseCopy = () => {
    if (menuDepositParaphraseOutput) {
      navigator.clipboard.writeText(menuDepositParaphraseOutput).then(() => {
        setIsMenuDepositParaphraseCopied(true);
        setTimeout(() => setIsMenuDepositParaphraseCopied(false), 2000);
      });
    }
  };

  const handleGenerateCurrencyParaphrase = () => {
    if (!personalProfileTime) return;
    const time = personalProfileTime.trim();

    const paraphrases = [
        `s1 : ডিপোজিট করার অংশটি ভিডিওতে দেখানো হয়নি। প্রোমোকোডের আগের অপশন ছিল কারেন্সি। পার্সোনাল প্রোফাইলে ক্লিক করা হয় ${time} মিনিটে এবং ডিপোজিটের পরিমাণ উল্লেখ করা হয়নি।`,
        `s2: Video te deposit part ta ektu missing chilo, ar promocode er age currency option dekha gese. Personal profile e click kora hoy ${time} minute e, but kono deposit amount mention kore nai.`,
        `s3: ভিডিওতে ডিপোজিট প্রক্রিয়া দেখা যায়নি। প্রোমোকোডের পূর্বে কারেন্সি অপশনটি ছিল। ${time} মিনিটে পার্সোনাল প্রোফাইল ক্লিক করা হয়েছে এবং ডিপোজিটের অঙ্ক দেখানো হয়নি।`,
        `s4: Deposit process ta dekha jay nai. Promocode er ager option currency chilo. ${time} minute e personal profile e click hoy, but kono deposit figure show hoy nai.`,
        `s5: ডিপোজিট অংশটি অনুপস্থিত ছিল। প্রোমোকোডের আগে কারেন্সি অপশন দেখা গেছে। পার্সোনাল প্রোফাইল ক্লিক করা হয়েছে ${time} মিনিটে, কিন্তু ডিপোজিটের পরিমাণ দেওয়া হয়নি।`,
        `s6: Deposit puropuri show kore nai video te. Promocode er ager option chilo currency, and ${time} minute e personal profile e click deya hoy. Deposit amount video te nai `,
        `s7: ডিপোজিটের পুরো  ক্লিপ দেখানো হয়নি। প্রোমোকোড দেওয়ার আগে কারেন্সি অপশন ছিল। ${time} মিনিটে পার্সোনাল প্রোফাইল ক্লিক করা হয় এবং ডিপোজিট এমাউন্ট দেখা যায়নি।`,
        `s8: deposit section ta puropuri dekhano hoini. Promocode er age currency option select chilo. Personal profile click hoy ${time} minute e, deposit er poriman deya hoy nai.`,
        `s9: ভিডিওতে ডিপোজিট পুরো  অংশ নেই। প্রোমোকোডের আগে কারেন্সি সিলেক্ট করা ছিল। পার্সোনাল প্রোফাইলের উপর ক্লিক করা হয় ${time} মিনিটে, তবে ডিপোজিটের এমাউন্ট দেওয়া হয়নি।`,
        `s10: Deposit process purota show kora hoy nai. Promocode er age currency option chilo. ${time} minute e personal profile e click kora hoy, deposit er amount missing chilo.`
    ];
    setCurrencyParaphraseOutput(paraphrases.join('\n'));
  };

  const handleCurrencyParaphraseCopy = () => {
    if (currencyParaphraseOutput) {
        navigator.clipboard.writeText(currencyParaphraseOutput).then(() => {
            setIsCurrencyParaphraseCopied(true);
            setTimeout(() => setIsCurrencyParaphraseCopied(false), 2000);
        });
    }
  };

  const handleGenerateDateOfBirthParaphrase = () => {
    if (!promoCodeTime || !personalProfileClickTime) return;
    const promoTime = promoCodeTime.trim();
    const profileTime = personalProfileClickTime.trim();

    const paraphrases = [
        `s1: প্রোমো কোড বসানো হয় ${promoTime} মিনিটে, ডিপোজিট করে দেখানো হয়নি, পার্সোনাল প্রোফাইল ক্লিক করা হয় ${profileTime} মিনিটে, আর ডেট অফ বার্থ ব্লার ছিল।`,
        `s2: Promocode bosano hoy ${promoTime} minute e and deposit part ta dekhano hoy nai, personal profile e click hoy ${profileTime} minute e, date of birth blur chilo.`,
        `s3: প্রোমো কোড ব্যবহার করা হয়েছে ${promoTime} মিনিটে, ডিপোজিটের অংশ অনুপস্থিত ছিল, ${profileTime} মিনিটে পার্সোনাল প্রোফাইল ক্লিক করা হয় এবং জন্মতারিখ ঝাপসা ছিল।`,
        `s4: ${promoTime} minute e promo code use kora hoyeche, deposit show kore nai, ${profileTime} e personal profile e click hoy, ar date of birth blur kora chilo.`,
        `s5: প্রোমো কোড ${promoTime} মিনিটে বসানো হয়, ডিপোজিট দেখানো হয়নি, ${profileTime} মিনিটে প্রোফাইল ক্লিক করা হয়, জন্মতারিখের অংশ ব্লার করা হয়।`,
        `s6: ${promoTime} e promo code add kora hoy, deposit process ta missing, ${profileTime} e profile click hoy, date of birth part blur chilo.`,
        `s7: ${promoTime} মিনিটে প্রোমো কোড ইনপুট করা হয়, ডিপোজিট সেকশন ভিডিওতে নেই, পার্সোনাল প্রোফাইল ক্লিক করা হয় ${profileTime} মিনিটে এবং জন্মতারিখের ঘর ব্লার করা ছিল।`,
        `s8: Video te ${promoTime} minute e promo code apply kora hoy, deposit dekhano hoy nai, profile click hoy ${profileTime} e, date of birth blur obosthay chilo.`,
        `s9: প্রোমো কোড বসানো হয়েছে ${promoTime} মিনিটে এবং ডিপোজিট অংশটি অনুপস্থিত ছিল, পার্সোনাল প্রোফাইল ক্লিক করা হয়েছে ${profileTime} মিনিটে, ডেট অফ বার্থ ঝাপসা করা হয়।`,
        `s10: Promocode = ${promoTime} minute, Deposit show kore nai, Profile click = ${profileTime} minute, Date of Birth blur.`
    ];
    setDateOfBirthParaphraseOutput(paraphrases.join('\n'));
  };

  const handleDateOfBirthParaphraseCopy = () => {
    if (dateOfBirthParaphraseOutput) {
        navigator.clipboard.writeText(dateOfBirthParaphraseOutput).then(() => {
            setIsDateOfBirthParaphraseCopied(true);
            setTimeout(() => setIsDateOfBirthParaphraseCopied(false), 2000);
        });
    }
  };
  
  const handleGeneratePromoDepositParaphrase = () => {
    const count = promoCount;
    const method = depositMethod;
    const bengaliCount = count.toString().replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

    const paraphrases = [
        `s1: ভিডিওতে প্রোমো কোড বলা হয়েছে মোট ${count} বার এবং ডিপোজিট করা হয়েছে ${method === 'Bkash' ? 'বিকাশের' : 'নগদের'} মাধ্যমে।`,
        `s2: Promo code mention kora hoy ${count} bar, ar deposit ta kora hoy ${method} diye.`,
        `s3: প্রোমো কোড মোট ${count} বার বলা হয়েছে, আর ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} ব্যবহার করে ডিপোজিট সম্পন্ন করা হয়।`,
        `s4: promo code bola hoy ${count} times and deposit process complete hoy ${method} er madhyome.`,
        `s5: প্রোমো কোডের উল্লেখ ছিল ${count} বার, এবং টাকা জমা দেওয়া হয়েছে ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} ব্যবহার করে।`,
        `s6: Promo code use er kotha bola hoyeche ${count} bar, deposit section e ${method} use kora hoy.`,
        `s7: ভিডিওতে ${count} বার প্রোমো কোড বলা হয়েছে, আর ডিপোজিট করা হয়েছে ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} অ্যাপে।`,
        `s8: Total ${count} times promo code mention hoy, deposit kora hoy ${method} app er maddhome.`,
        `s9: প্রোমো কোড উল্লেখের সংখ্যা ছিল ${bengaliCount}, এবং ডিপোজিটের জন্য বেছে নেওয়া হয় ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'}।`,
        `s10: Promo code bola hoy ${count} bar and deposit done through ${method} system.`
    ];

    setPromoDepositParaphraseOutput(paraphrases.join('\n'));
  };

  const handlePromoDepositParaphraseCopy = () => {
    if (promoDepositParaphraseOutput) {
        navigator.clipboard.writeText(promoDepositParaphraseOutput).then(() => {
            setIsPromoDepositParaphraseCopied(true);
            setTimeout(() => setIsPromoDepositParaphraseCopied(false), 2000);
        });
    }
  };
  
  const handleGenerateMelbetDepositParaphrase = () => {
    const count = melbetCount;
    const method = melbetDepositMethod;
    const bengaliCount = count.toString().replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

    const paraphrases = [
        `s1: ভিডিওতে “মেলবেট” শব্দটি বলা হয়েছে ${count} বার, এবং ডিপোজিট করা হয়েছে ${method === 'Bkash' ? 'বিকাশের' : 'নগদের'} মাধ্যমে।`,
        `s2: In the video, “Melbet” mention kora hoy ${count} times, and deposit ta kora hoy ${method} diye.`,
        `s3: “মেলবেট” বলা হয়েছে মোট ${count} বার, আর টাকা জমা দেওয়া হয়েছে ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} ব্যবহার করে।`,
        `s4: Melbet word ta bola hoy ${count} bar, deposit process complete hoy ${method} app diye.`,
        `s5: ভিডিওতে মোট ${count} বার “মেলবেট” শব্দের উল্লেখ আছে, আর ডিপোজিট করা হয় ${method} দিয়ে।`,
        `s6: Melbet bola hoyeche ${count} times, deposit er jonno ${method} choose kora hoy.`,
        `s7: “মেলবেট” শব্দটি ${count} বার বলা হয়েছে এবং ডিপোজিট সম্পন্ন হয়েছে ${method === 'Bkash' ? 'বিকাশের' : 'নগদের'} মাধ্যমে।`,
        `s8: The word Melbet mentioned ${count} times, and deposit done through ${method}.`,
        `s9: ভিডিওতে ${bengaliCount} বার “মেলবেট” বলা হয়েছে, আর টাকা পাঠানো হয়েছে ${method === 'Bkash' ? 'বিকাশের' : 'নগদের'} মাধ্যমে।`,
        `s10: ${count} times Melbet bola hoy, deposit process ${method} er maddhome complete kora hoy.`
    ];
    setMelbetDepositParaphraseOutput(paraphrases.join('\n'));
  };

  const handleMelbetDepositParaphraseCopy = () => {
    if (melbetDepositParaphraseOutput) {
        navigator.clipboard.writeText(melbetDepositParaphraseOutput).then(() => {
            setIsMelbetDepositParaphraseCopied(true);
            setTimeout(() => setIsMelbetDepositParaphraseCopied(false), 2000);
        });
    }
  };

  const handleGenerateBonusDepositParaphrase = () => {
    const count = bonusCount;
    const method = bonusDepositMethod;
    const bengaliCount = count.toString().replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

    const paraphrases = [
        `s1: বোনাস বলা হয়েছে মোট ${bengaliCount} বার, আর ডিপোজিট করা হয়েছে ${method === 'Bkash' ? 'বিকাশের' : 'নগদের'} মাধ্যমে।`,
        `s2: Bonus bola hoyeche ${count} bar,  deposit kora hoyeche ${method === 'Bkash' ? 'bKash' : 'Nagad'} diye.`,
        `s3: ভিডিওতে বোনাস কথাটি ${bengaliCount} বার বলা হয়েছে এবং ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} ব্যবহার করে ডিপোজিট করা হয়েছে।`,
        `s4: Videote ${count} bar bonus mention kora hoy, deposit kora hoy ${method === 'Bkash' ? 'bKash' : 'Nagad'} er maddhome.`,
        `s5: মোট ${bengaliCount} বার বোনাস বলা হয়েছে, ডিপোজিটের জন্য ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} বেছে নেয়া হয়েছিল।`,
        `s6: ${count} bar bonus bola hoise, deposit er jonno ${method === 'Bkash' ? 'bKash' : 'Nagad'} use kora hoise.`,
        `s7: ভিডিওতে ${count} বার বোনাস এর কথা বলা হয়, আর লেনদেন করা হয় ${method === 'Bkash' ? 'বিকাশ' : 'নগদ'} দিয়ে।`,
        `s8: Videote bonus ${count} bar bola hoy, transaction ta kora hoy ${method === 'Bkash' ? 'bKash' : 'Nagad'} diye.`,
        `s9: বোনাস উল্লেখ করা হয়েছে ${bengaliCount} বার, এবং ডিপোজিট ${method === 'Bkash' ? 'বিকাশের' : 'নগদের'} মাধ্যমে সম্পন্ন হয়েছে।`,
        `s10: Bonus er kotha bola hoy ${count} bar, deposit complete kora hoy ${method === 'Bkash' ? 'bKash' : 'Nagad'} er maddhome.`
    ];

    setBonusDepositParaphraseOutput(paraphrases.join('\n'));
  };

  const handleBonusDepositParaphraseCopy = () => {
      if (bonusDepositParaphraseOutput) {
          navigator.clipboard.writeText(bonusDepositParaphraseOutput).then(() => {
              setIsBonusDepositParaphraseCopied(true);
              setTimeout(() => setIsBonusDepositParaphraseCopied(false), 2000);
          });
      }
  };

  const handleGenerateGameParaphrase = () => {
    const paraphrases = [
        `s1: ভিডিওটিতে কোনো নির্দিষ্ট খেলার নাম উল্লেখ করা হয়নি, বোনাসের পরিমাণও বলা হয়নি এবং রেসিডেন্স অ্যাড্রেস দেখানো হয়নি।`,
        `s2: Videote kono specific khelar nam bola hoy nai, bonus er poriman o mention kora hoy nai, r residence address o deya hoy nai.`,
        `s3: ভিডিওতে নির্দিষ্ট কোনো গেমের নাম বলা হয়নি, বোনাস কত তা জানানো হয়নি, আর রেসিডেন্স ঠিকানাও অনুপস্থিত ছিল।`,
        `s4: Video te kono fixed game name deya chilo na, bonus amount tao bola hoy nai, ebong residence address ta show kore nai.`,
        `s5: কোনো খেলার নাম ভিডিওটিতে ছিল না, বোনাসের পরিমাণ বলা হয়নি, এবং রেসিডেন্স ঠিকানা দেওয়া হয়নি।`,
        `s6: Videote game er name bola hoy nai, bonus er value mention hoy nai, r residence address tao deya hoy nai.`,
        `s7: ভিডিওতে কোনো গেমের নাম বলা হয়নি, বোনাসের অঙ্ক উল্লেখ করা হয়নি, আর রেসিডেন্স অ্যাড্রেস দেওয়া হয়নি।`,
        `s8: Video te game name ta missing chilo, bonus er poriman bola hoy nai, ebong residence address show kora hoy nai.`,
        `s9: ভিডিওটিতে নির্দিষ্ট গেমের নাম ছিল না, বোনাসের পরিমাণও বলা হয়নি, রেসিডেন্সের ঠিকানাও অনুপস্থিত।`,
        `s10: Video te specific game name mention chilo na, bonus er poriman bola hoy nai, r residence address tao chilo na..`
    ];
    setGameParaphraseOutput(paraphrases.join('\n'));
  };

  const handleGameParaphraseCopy = () => {
    if (gameParaphraseOutput) {
        navigator.clipboard.writeText(gameParaphraseOutput).then(() => {
            setIsGameParaphraseCopied(true);
            setTimeout(() => setIsGameParaphraseCopied(false), 2000);
        });
    }
  };

  const handleGameToolToggle = (checked: boolean) => {
    setShowGame(checked);
    if (checked) {
        handleGenerateGameParaphrase();
    } else {
        setGameParaphraseOutput('');
    }
  };


  const anyToolSelected = showBonus || showPromo || showMenuDeposit || showCurrency || showDateOfBirth || showPromoDeposit || showMelbetDeposit || showBonusDeposit || showGame || showYtTranscript || showYtTranscript2 || showYtTranscript3;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <label htmlFor="text-input" className="sr-only">Text Input</label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="w-full h-48 sm:h-64 p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-y text-lg shadow-sm"
          aria-label="Text input for word counting"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Words" 
            value={wordCount}
            icon={<FileTextIcon />}
            colorClasses="bg-indigo-100 text-indigo-900"
          />
          <StatCard 
            title="'বোনাস' Count"
            value={bonusCount}
            icon={<StarIcon />}
            colorClasses={showBonus || showBonusDeposit ? "bg-amber-100 text-amber-900" : "bg-slate-200 text-slate-600"}
          />
          <StatCard 
            title="Promo Code Count"
            value={promoCount}
            icon={<TagIcon />}
            colorClasses={showPromo || showPromoDeposit ? "bg-emerald-100 text-emerald-900" : "bg-slate-200 text-slate-600"}
          />
          <StatCard 
            title="'Melbet' Count"
            value={melbetCount}
            icon={<MelbetIcon />}
            colorClasses={showMelbetDeposit ? "bg-cyan-100 text-cyan-900" : "bg-slate-200 text-slate-600"}
          />
      </div>
    
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-slate-800">Analysis & Generation Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <ToolCard id="bonus-tool" label="Count 'বোনাস'" icon={<StarIcon className="w-5 h-5"/>} checked={showBonus} onChange={setShowBonus} />
              <ToolCard id="promo-tool" label="Count Promo Codes" icon={<TagIcon className="w-5 h-5"/>} checked={showPromo} onChange={setShowPromo} />
              <ToolCard id="menu-deposit-tool" label="Menu & Deposit" icon={<ClickIcon className="w-5 h-5"/>} checked={showMenuDeposit} onChange={setShowMenuDeposit} />
              <ToolCard id="currency-tool" label="Currency" icon={<CurrencyIcon className="w-5 h-5"/>} checked={showCurrency} onChange={setShowCurrency} />
              <ToolCard id="dob-tool" label="Date of Birth" icon={<CalendarIcon className="w-5 h-5"/>} checked={showDateOfBirth} onChange={setShowDateOfBirth} />
              <ToolCard id="promo-deposit-tool" label="Promo & Deposit" icon={<PromoDepositIcon className="w-5 h-5"/>} checked={showPromoDeposit} onChange={setShowPromoDeposit} />
              <ToolCard id="melbet-deposit-tool" label="Melbet & Deposit" icon={<MelbetIcon className="w-5 h-5"/>} checked={showMelbetDeposit} onChange={setShowMelbetDeposit} />
              <ToolCard id="bonus-deposit-tool" label="Bonus & Deposit" icon={<BonusDepositIcon className="w-5 h-5"/>} checked={showBonusDeposit} onChange={setShowBonusDeposit} />
              <ToolCard id="game-tool" label="Game" icon={<GameIcon className="w-5 h-5"/>} checked={showGame} onChange={handleGameToolToggle} />
              <ToolCard id="yt-transcript-tool" label="YT Transcript" icon={<YoutubeIcon className="w-5 h-5"/>} checked={showYtTranscript} onChange={setShowYtTranscript} />
              <ToolCard id="yt-transcript-2-tool" label="YT Transcript 2 (Blogspot)" icon={<YoutubeIcon className="w-5 h-5"/>} checked={showYtTranscript2} onChange={setShowYtTranscript2} />
              <ToolCard id="yt-transcript-3-tool" label="YT Transcript 3 (Maestra)" icon={<YoutubeIcon className="w-5 h-5"/>} checked={showYtTranscript3} onChange={setShowYtTranscript3} />
          </div>
        </div>

        {anyToolSelected && (
            <div className="space-y-6">
              {showBonus && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full text-amber-600"><StarIcon className="w-5 h-5" /></div>
                    <h3 className="text-lg font-bold text-slate-800">Bonus Paraphrase Generator</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    The 'বোনাস' count (<span className="font-bold text-amber-700">{bonusCount}</span>) is used automatically. Enter the deposit time to generate paraphrases.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label htmlFor="start-time" className="block text-sm font-medium text-slate-700 mb-1">Deposit Start Time</label>
                              <input type="text" id="start-time" value={depositStartTime} onChange={(e) => setDepositStartTime(e.target.value)} placeholder="e.g., 4:44" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                          </div>
                          <div>
                              <label htmlFor="end-time" className="block text-sm font-medium text-slate-700 mb-1">Deposit End Time</label>
                              <input type="text" id="end-time" value={depositEndTime} onChange={(e) => setDepositEndTime(e.target.value)} placeholder="e.g., 5:01" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                          </div>
                      </div>
                      <button onClick={handleGenerateBonusParaphrase} disabled={!depositStartTime || !depositEndTime} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors">
                          Generate
                      </button>
                  </div>
                  {bonusParaphraseOutput && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                            <button onClick={handleBonusParaphraseCopy} disabled={isBonusParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                 {isBonusParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /> <span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                            </button>
                        </div>
                         <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                             {bonusParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{renderMarkdownBold(line)}</p>))}
                        </div>
                    </div>
                  )}
                </div>
              )}
              {showPromo && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 rounded-full text-emerald-600"><TagIcon className="w-5 h-5" /></div>
                    <h3 className="text-lg font-bold text-slate-800">Promo Code Paraphrase Generator</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    The promo code count (<span className="font-bold text-emerald-700">{promoCount}</span>) is used automatically. Click the button to generate.
                  </p>
                  <div className="flex justify-start">
                      <button onClick={handleGeneratePromoParaphrase} className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Generate
                      </button>
                  </div>
                  {promoParaphraseOutput && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                            <button onClick={handlePromoParaphraseCopy} disabled={isPromoParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                {isPromoParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                            </button>
                        </div>
                         <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                           {promoParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                        </div>
                    </div>
                  )}
                </div>
              )}
               {showMenuDeposit && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-full text-sky-600"><ClickIcon className="w-5 h-5" /></div>
                    <h3 className="text-lg font-bold text-slate-800">Menu & Deposit Paraphrase Generator</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label htmlFor="menu-time" className="block text-sm font-medium text-slate-700 mb-1">Menu Click Time</label>
                              <input type="text" id="menu-time" value={menuClickTime} onChange={(e) => setMenuClickTime(e.target.value)} placeholder="e.g., 1:45" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                          </div>
                          <div>
                              <label htmlFor="deposit-time" className="block text-sm font-medium text-slate-700 mb-1">Deposit Click Time</label>
                              <input type="text" id="deposit-time" value={depositClickTime} onChange={(e) => setDepositClickTime(e.target.value)} placeholder="e.g., 4:45" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                          </div>
                      </div>
                      <button onClick={handleGenerateMenuDepositParaphrase} disabled={!menuClickTime || !depositClickTime} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors">
                          Generate
                      </button>
                  </div>
                  {menuDepositParaphraseOutput && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                            <button onClick={handleMenuDepositParaphraseCopy} disabled={isMenuDepositParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                 {isMenuDepositParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /> <span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                            </button>
                        </div>
                         <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                             {menuDepositParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                        </div>
                    </div>
                  )}
                </div>
              )}
               {showCurrency && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-rose-100 rounded-full text-rose-600"><CurrencyIcon className="w-5 h-5" /></div>
                    <h3 className="text-lg font-bold text-slate-800">Currency Paraphrase Generator</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div className="md:col-span-2">
                          <label htmlFor="profile-time" className="block text-sm font-medium text-slate-700 mb-1">Personal Profile Click Time</label>
                          <input type="text" id="profile-time" value={personalProfileTime} onChange={(e) => setPersonalProfileTime(e.target.value)} placeholder="e.g., 1:32" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                      </div>
                      <button onClick={handleGenerateCurrencyParaphrase} disabled={!personalProfileTime} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors">
                          Generate
                      </button>
                  </div>
                  {currencyParaphraseOutput && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                            <button onClick={handleCurrencyParaphraseCopy} disabled={isCurrencyParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                 {isCurrencyParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                            </button>
                        </div>
                         <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                             {currencyParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                        </div>
                    </div>
                  )}
                </div>
               )}
               {showDateOfBirth && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-violet-100 rounded-full text-violet-600"><CalendarIcon className="w-5 h-5" /></div>
                    <h3 className="text-lg font-bold text-slate-800">Date of Birth Paraphrase Generator</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                              <label htmlFor="promo-code-time" className="block text-sm font-medium text-slate-700 mb-1">Promo Code Time</label>
                              <input type="text" id="promo-code-time" value={promoCodeTime} onChange={(e) => setPromoCodeTime(e.target.value)} placeholder="e.g., 0:50" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                          </div>
                          <div>
                              <label htmlFor="personal-profile-time" className="block text-sm font-medium text-slate-700 mb-1">Personal Profile Click Time</label>
                              <input type="text" id="personal-profile-time" value={personalProfileClickTime} onChange={(e) => setPersonalProfileClickTime(e.target.value)} placeholder="e.g., 1:36" className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
                          </div>
                      </div>
                      <button onClick={handleGenerateDateOfBirthParaphrase} disabled={!promoCodeTime || !personalProfileClickTime} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors">
                          Generate
                      </button>
                  </div>
                  {dateOfBirthParaphraseOutput && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                            <button onClick={handleDateOfBirthParaphraseCopy} disabled={isDateOfBirthParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                 {isDateOfBirthParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                            </button>
                        </div>
                         <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                             {dateOfBirthParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                        </div>
                    </div>
                  )}
                </div>
               )}
               {showPromoDeposit && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-full text-teal-600"><PromoDepositIcon className="w-5 h-5" /></div>
                        <h3 className="text-lg font-bold text-slate-800">Promo & Deposit Paraphrase Generator</h3>
                    </div>
                     <p className="text-sm text-slate-600 mb-4">
                        The promo code count (<span className="font-bold text-emerald-700">{promoCount}</span>) is used automatically. Select a deposit method and click generate.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="md:col-span-2 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                            <p className="text-sm font-medium text-slate-700">Deposit Method:</p>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="bkash-radio" className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" id="bkash-radio" name="depositMethod" value="Bkash" checked={depositMethod === 'Bkash'} onChange={(e) => setDepositMethod(e.target.value as 'Bkash' | 'Nagad')} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                    <span className="text-sm text-slate-800">Bkash</span>
                                </label>
                                <label htmlFor="nagad-radio" className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" id="nagad-radio" name="depositMethod" value="Nagad" checked={depositMethod === 'Nagad'} onChange={(e) => setDepositMethod(e.target.value as 'Bkash' | 'Nagad')} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                    <span className="text-sm text-slate-800">Nagad</span>
                                </label>
                            </div>
                        </div>
                        <button onClick={handleGeneratePromoDepositParaphrase} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Generate
                        </button>
                    </div>
                     {promoDepositParaphraseOutput && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                                <button onClick={handlePromoDepositParaphraseCopy} disabled={isPromoDepositParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                    {isPromoDepositParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                                </button>
                            </div>
                            <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                                {promoDepositParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                            </div>
                        </div>
                    )}
                </div>
               )}
                {showMelbetDeposit && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-cyan-100 rounded-full text-cyan-600"><MelbetIcon className="w-5 h-5" /></div>
                        <h3 className="text-lg font-bold text-slate-800">Melbet & Deposit Paraphrase Generator</h3>
                    </div>
                     <p className="text-sm text-slate-600 mb-4">
                        The 'Melbet' word count (<span className="font-bold text-cyan-700">{melbetCount}</span>) is used automatically. Select a deposit method and click generate.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="md:col-span-2 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                            <p className="text-sm font-medium text-slate-700">Deposit Method:</p>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="melbet-bkash-radio" className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" id="melbet-bkash-radio" name="melbetDepositMethod" value="Bkash" checked={melbetDepositMethod === 'Bkash'} onChange={(e) => setMelbetDepositMethod(e.target.value as 'Bkash' | 'Nagad')} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                    <span className="text-sm text-slate-800">Bkash</span>
                                </label>
                                <label htmlFor="melbet-nagad-radio" className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" id="melbet-nagad-radio" name="melbetDepositMethod" value="Nagad" checked={melbetDepositMethod === 'Nagad'} onChange={(e) => setMelbetDepositMethod(e.target.value as 'Bkash' | 'Nagad')} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                    <span className="text-sm text-slate-800">Nagad</span>
                                </label>
                            </div>
                        </div>
                        <button onClick={handleGenerateMelbetDepositParaphrase} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Generate
                        </button>
                    </div>
                     {melbetDepositParaphraseOutput && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                                <button onClick={handleMelbetDepositParaphraseCopy} disabled={isMelbetDepositParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                    {isMelbetDepositParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                                </button>
                            </div>
                            <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                                {melbetDepositParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                            </div>
                        </div>
                    )}
                </div>
               )}
               {showBonusDeposit && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600"><BonusDepositIcon className="w-5 h-5" /></div>
                        <h3 className="text-lg font-bold text-slate-800">Bonus & Deposit Paraphrase Generator</h3>
                    </div>
                     <p className="text-sm text-slate-600 mb-4">
                        The 'বোনাস' count (<span className="font-bold text-amber-700">{bonusCount}</span>) is used automatically. Select a deposit method and click generate.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="md:col-span-2 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                            <p className="text-sm font-medium text-slate-700">Deposit Method:</p>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="bonus-bkash-radio" className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" id="bonus-bkash-radio" name="bonusDepositMethod" value="Bkash" checked={bonusDepositMethod === 'Bkash'} onChange={(e) => setBonusDepositMethod(e.target.value as 'Bkash' | 'Nagad')} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                    <span className="text-sm text-slate-800">Bkash</span>
                                </label>
                                <label htmlFor="bonus-nagad-radio" className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" id="bonus-nagad-radio" name="bonusDepositMethod" value="Nagad" checked={bonusDepositMethod === 'Nagad'} onChange={(e) => setBonusDepositMethod(e.target.value as 'Bkash' | 'Nagad')} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                    <span className="text-sm text-slate-800">Nagad</span>
                                </label>
                            </div>
                        </div>
                        <button onClick={handleGenerateBonusDepositParaphrase} className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Generate
                        </button>
                    </div>
                     {bonusDepositParaphraseOutput && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                                <button onClick={handleBonusDepositParaphraseCopy} disabled={isBonusDepositParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                    {isBonusDepositParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                                </button>
                            </div>
                            <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                                {bonusDepositParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                            </div>
                        </div>
                    )}
                </div>
               )}
               {showGame && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-lime-100 rounded-full text-lime-600"><GameIcon className="w-5 h-5" /></div>
                        <h3 className="text-lg font-bold text-slate-800">Game Paraphrase Generator</h3>
                    </div>
                     <p className="text-sm text-slate-600 mb-4">
                        Automatically generated paraphrases for the 'Game' scenario.
                    </p>
                     {gameParaphraseOutput && (
                        <div className="mt-2">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-slate-700">Generated Output</label>
                                <button onClick={handleGameParaphraseCopy} disabled={isGameParaphraseCopied} className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md text-slate-600 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                                    {isGameParaphraseCopied ? (<><CheckIcon className="w-4 h-4 text-green-500" /><span className="text-green-700">Copied!</span></>) : (<><CopyIcon className="w-4 h-4" /><span>Copy</span></>)}
                                </button>
                            </div>
                            <div className="w-full h-auto p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm whitespace-pre-wrap font-mono">
                                {gameParaphraseOutput.split('\n').map((line, index) => (<p key={index} className="mb-1">{line}</p>))}
                            </div>
                        </div>
                    )}
                </div>
               )}
               {showYtTranscript && (
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-600"><YoutubeIcon className="w-5 h-5" /></div>
                            <h3 className="text-lg font-bold text-slate-800">YouTube Transcript Generator</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            The website <a href="https://www.tubetranscript.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">tubetranscript.com</a> is embedded below for your convenience.
                        </p>
                        <div className="border border-slate-300 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.tubetranscript.com/"
                                title="YouTube Transcript Generator"
                                className="w-full h-[500px] md:h-[600px] border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
                {showYtTranscript2 && (
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-600"><YoutubeIcon className="w-5 h-5" /></div>
                            <h3 className="text-lg font-bold text-slate-800">YT Transcript 2 (Blogspot)</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            The website <a href="https://techonline103.blogspot.com/p/youtube-transcript-generator.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">techonline103.blogspot.com</a> is embedded below for your convenience.
                        </p>
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '160%', height: '0', overflow: 'hidden' }}>
                          <iframe 
                            src="https://techonline103.blogspot.com/p/youtube-transcript-generator.html"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '1px solid #ccc', borderRadius: '10px' }}
                            title="Blogspot YouTube Transcript Generator"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-forms"
                            >
                          </iframe>
                        </div>
                    </div>
                )}
                {showYtTranscript3 && (
                     <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-600"><YoutubeIcon className="w-5 h-5" /></div>
                            <h3 className="text-lg font-bold text-slate-800">YT Transcript 3 (Maestra)</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            The website <a href="https://maestra.ai/tools/video-to-text/youtube-transcript-generator" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">maestra.ai</a> is embedded below for your convenience.
                        </p>
                        <div className="border border-slate-300 rounded-lg overflow-hidden">
                            <iframe
                                src="https://maestra.ai/tools/video-to-text/youtube-transcript-generator"
                                title="Maestra YouTube Transcript Generator"
                                className="w-full h-[500px] md:h-[600px] border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        )}
      </div>

      {((showBonus && bonusLines.length > 0) || (showPromo && promoLines.length > 0)) && (
          <div className="space-y-6 pt-4">
              {showBonus && bonusLines.length > 0 && (
                  <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Lines with 'বোনাস'</h3>
                      <div className="bg-white border border-slate-200 rounded-xl p-4 max-h-60 overflow-y-auto space-y-3 shadow-sm">
                          {bonusLines.map(({ lineNumber, line }) => (
                              <div key={lineNumber} className="text-sm text-slate-700 leading-relaxed flex items-start">
                                  <span className="font-mono bg-slate-200 text-slate-600 rounded px-2 py-0.5 text-xs mr-3 mt-0.5 select-none">{lineNumber}</span>
                                  <p className="flex-1">{highlightMatch(line, /বোনাস/g, 'bg-amber-200 text-amber-900 rounded px-1 py-0.5 font-semibold')}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}
               {showPromo && promoLines.length > 0 && (
                  <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Lines with Promo Codes</h3>
                      <div className="bg-white border border-slate-200 rounded-xl p-4 max-h-60 overflow-y-auto space-y-3 shadow-sm">
                          {promoLines.map(({ lineNumber, line }) => (
                              <div key={lineNumber} className="text-sm text-slate-700 leading-relaxed flex items-start">
                                  <span className="font-mono bg-slate-200 text-slate-600 rounded px-2 py-0.5 text-xs mr-3 mt-0.5 select-none">{lineNumber}</span>
                                  <p className="flex-1">{highlightMatch(line, /প্রোমো কোড|প্রমো কোড|প্রমোকোড|প্রোমো- কোড|promocode|promo code|প্রেমো কোড|পম কোড|পোমো কোড|পমো কোড/gi, 'bg-emerald-200 text-emerald-900 rounded px-1 py-0.5 font-semibold')}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}
          </div>
      )}
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="w-full max-w-5xl mx-auto py-4 px-0 sm:p-6 lg:p-8">
        <header className="text-center mb-10 px-4 sm:px-0">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-2xl mb-4 shadow-lg">
                <FileTextIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                WorkUp Job Helper
              </span>
              <span className="block sm:inline-block text-xl sm:text-2xl lg:text-3xl font-normal text-slate-500 tracking-normal ml-0 sm:ml-3 mt-2 sm:mt-0">
                (By <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">KAYUM</span>)
              </span>
            </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Paste your text below to get instant word counts and generate paraphrases.</p>
        </header>

        <main className="bg-white/60 backdrop-blur-lg p-4 sm:p-8 rounded-none sm:rounded-2xl shadow-lg border-y sm:border border-slate-200">
          <WordCounter />
        </main>

        <footer className="text-center mt-10 text-slate-500 text-sm px-4 sm:px-0">
            <p>A multi-tool for efficient text analysis and generation.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

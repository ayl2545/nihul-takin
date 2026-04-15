export type LawResource = {
  title: string;
  description: string;
  url: string;
  category: "law" | "guideline" | "tool";
};

export const laws: LawResource[] = [
  {
    title: "חוק העמותות, תש\"ם-1980",
    description:
      "החוק המרכזי המסדיר את הקמתן, ניהולן ופירוקן של עמותות בישראל. כולל את תיקון 14 שהוסיף סמכויות אכיפה משמעותיות לרשם.",
    url: "https://www.nevo.co.il/law_html/law01/p224_001.htm",
    category: "law",
  },
  {
    title: "חוברת התנהלות עמותה",
    description:
      "חוברת המדריכה שפרסם רשם העמותות — סקירה מעשית של עקרונות הניהול התקין, חובות הדיווח וממשל תאגידי בעמותות.",
    url: "https://www.gov.il/he/departments/publications/reports/kit_amuta",
    category: "guideline",
  },
  {
    title: 'חוק הגמ"חים (שירותי פיקדון ואשראי ללא ריבית)',
    description:
      'החוק המסדיר את פעילותם של ארגוני גמ"ח — גופים הפועלים במבנה דומה לעמותה, עם רגולציה ייחודית לפעילות האשראי.',
    url: "https://www.nevo.co.il/law_html/law01/501_917.htm",
    category: "law",
  },
  {
    title: "צו איסור הלבנת הון",
    description:
      "צו המטיל חובות זיהוי, בדיקה ודיווח על תאגידים — לרבות עמותות — בעסקאות החשודות כהלבנת הון או מימון טרור.",
    url: "https://www.nevo.co.il/law_html/law01/999_301.htm",
    category: "law",
  },
  {
    title: "הנחיות רשם העמותות",
    description:
      "מאגר ההנחיות המקצועיות של רשם העמותות — כולל פרקים על אישור ניהול תקין, תגמול חברי ועד, קרבה משפחתית, פתיחת חשבונות בנק ועוד.",
    url: "https://www.gov.il/he/departments/guides/rasham_amutot_guides",
    category: "guideline",
  },
  {
    title: "פקודת מס הכנסה — סעיף 46",
    description:
      "סעיף החוק המעניק זיכוי ממס לתורמים לעמותות ומוסדות ציבור מאושרים. מנוהל על ידי רשות המסים ולא על ידי רשם העמותות.",
    url: "https://www.nevo.co.il/law_html/law01/255_001.htm",
    category: "law",
  },
  {
    title: "גיידסטאר ישראל",
    description:
      "המאגר הציבורי הרשמי של כל העמותות בישראל. מציג דו\"חות כספיים, פרטי ועד, היקף פעילות ועוד — שקוף לכל הציבור.",
    url: "https://www.guidestar.org.il/",
    category: "tool",
  },
  {
    title: "אתר רשם העמותות",
    description:
      "שער הכניסה הרשמי להגשת בקשות, דיווחים ומעקב אחר אישור ניהול תקין. כולל מערכת מקוונת להגשת דו\"חות שנתיים.",
    url: "https://www.gov.il/he/departments/corporations/about",
    category: "tool",
  },
];

type SlideData = {
  id: number;
  layout: 'title' | 'section' | 'content' | 'comparison' | 'quote' | 'image';
  title: string;
  subtitle?: string;
  presenter?: string;
  presenterTitle?: string;
  sectionNumber?: string;
  bullets?: string[];
  cards?: CardData[];
  orderedCards?: boolean;
  comparison?: ComparisonData;
  quote?: string;
  quoteAuthor?: string;
  story?: string;
  takeaway?: string;
  imageUrl?: string;
  imageAlt?: string;
  emoji?: string;
};

interface CardData {
  icon: string;
  title: string;
  description: string;
}

interface ComparisonData {
  before: { heading: string; items: string[] };
  after: { heading: string; items: string[] };
}

type SlideDirection = 'next' | 'prev';

export type { SlideData, CardData, ComparisonData, SlideDirection };

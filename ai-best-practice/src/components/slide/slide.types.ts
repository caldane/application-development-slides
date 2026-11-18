import { SlideData, SlideDirection } from '../slide-deck/slide-deck.types';

type SlideProps = {
  data: SlideData;
  isActive: boolean;
  isPrev: boolean;
  direction: SlideDirection;
};

export type { SlideProps };

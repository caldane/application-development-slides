import { useState, useEffect, useCallback } from 'react';
import style from './slide-deck.module.css';
import { SlideData, SlideDirection } from './slide-deck.types';
import Slide from '../slide';
import NavBar from '../nav-bar';
import ProgressBar from '../progress-bar';
import { slides } from '../../data/slides';

const SlideDeck = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>('next');

  const handleNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection('next');
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className={style['slide-deck']}>
      <ProgressBar current={currentIndex} total={slides.length} />
      {slides.map((slide: SlideData, index: number) => (
        <Slide
          key={slide.id}
          data={slide}
          isActive={index === currentIndex}
          isPrev={direction === 'next' ? index < currentIndex : index > currentIndex}
          direction={direction}
        />
      ))}
      <NavBar
        current={currentIndex}
        total={slides.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default SlideDeck;

import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './slide-deck.module.css';
import { SlideData, SlideDirection } from './slide-deck.types';
import Slide from '../slide';
import NavBar from '../nav-bar';
import ProgressBar from '../progress-bar';
import { slides } from '../../data/slides';

const SlideDeck = () => {
  const { slide } = useParams();
  const navigate = useNavigate();
  const paramIndex = Math.max(0, Math.min(slides.length - 1, Number(slide) - 1 || 0));
  const [currentIndex, setCurrentIndex] = useState(paramIndex);
  const [direction, setDirection] = useState<SlideDirection>('next');

  useEffect(() => {
    if (paramIndex !== currentIndex) {
      setDirection(paramIndex > currentIndex ? 'next' : 'prev');
      setCurrentIndex(paramIndex);
    }
  }, [paramIndex]);

  const goTo = useCallback((index: number) => {
    navigate(`/${index + 1}`, { replace: true });
  }, [navigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      goTo(currentIndex + 1);
    }
  }, [currentIndex, goTo]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    }
  }, [currentIndex, goTo]);

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

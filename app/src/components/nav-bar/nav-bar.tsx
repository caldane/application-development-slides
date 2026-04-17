import style from './nav-bar.module.css';
import { NavBarProps } from './nav-bar.types';

const NavBar = ({ current, total, onPrev, onNext }: NavBarProps) => {
  return (
    <section className={style['nav-bar']}>
      <p>{current + 1} / {total}</p>
      <nav>
        <button onClick={onPrev} disabled={current === 0} aria-label="Previous slide">
          ← Prev
        </button>
        <button onClick={onNext} disabled={current === total - 1} aria-label="Next slide">
          Next →
        </button>
      </nav>
    </section>
  );
};

export default NavBar;

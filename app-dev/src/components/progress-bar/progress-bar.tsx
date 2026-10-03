import style from './progress-bar.module.css';
import { ProgressBarProps } from './progress-bar.types';

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const widthPercent = ((current + 1) / total) * 100;

  return (
    <section
      className={style['progress-bar']}
      style={{ width: `${widthPercent}%` }}
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
    />
  );
};

export default ProgressBar;

import style from './slide.module.css';
import { SlideProps } from './slide.types';

const Slide = ({ data, isActive, isPrev, direction }: SlideProps) => {
  const getPositionClass = () => {
    if (isActive) return style['active'];
    if (direction === 'next') {
      return isPrev ? style['prev-forward'] : style['next-forward'];
    }
    return isPrev ? style['next-backward'] : style['prev-backward'];
  };

  const isSplitQuote = data.layout === 'quote' && !!data.images;

  const className = [
    style['slide'],
    getPositionClass(),
    data.layout === 'title' ? style['title'] : '',
    data.layout === 'section' ? style['section-divider'] : '',
    isSplitQuote ? style['quote-split'] : '',
  ].join(' ');

  if (isSplitQuote) {
    return (
      <section className={className} aria-hidden={!isActive}>
        <div className={style['gallery']}>
          {data.images?.map((image, i) => (
            <figure key={i}>
              <img src={image.url} alt={image.alt} />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
        <div className={style['quote-text']}>
          <h1>{data.title}</h1>
          <blockquote>
            {data.quote}
            {data.quoteAuthor && <footer>— {data.quoteAuthor}</footer>}
          </blockquote>
        </div>
      </section>
    );
  }

  return (
    <section className={className} aria-hidden={!isActive}>
      {data.emoji && <span className={style['emoji']}>{data.emoji}</span>}

      {data.layout === 'section' && data.sectionNumber && (
        <span className={style['section-number']}>{data.sectionNumber}</span>
      )}

      <h1>{data.title}</h1>

      {data.subtitle && <h2>{data.subtitle}</h2>}

      {data.presenter && <p className={style['presenter']}>{data.presenter}</p>}
      {data.presenterTitle && <p className={style['presenter-title']}>{data.presenterTitle}</p>}

      {data.imageUrl && (
        <figure>
          <img src={data.imageUrl} alt={data.imageAlt || data.title} />
        </figure>
      )}

      {data.images && (
        <div
          className={[style['gallery'], data.imageAspectRatio ? style['uniform'] : ''].join(' ')}
          style={data.imageAspectRatio ? ({ '--image-aspect-ratio': data.imageAspectRatio } as React.CSSProperties) : undefined}
        >
          {data.images.map((image, i) => (
            <figure key={i}>
              <img src={image.url} alt={image.alt} />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {data.bullets && (
        <ul>
          {data.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}

      {data.cards && (
        <article className={data.cards.length <= 2 ? style['cards'] : data.cards.length === 4 ? style['cards'] : style['cards-3']}>
          {data.cards.map((card, i) => (
            <article key={i}>
              {data.orderedCards && <span className={style['badge']}>{i + 1}</span>}
              <span className={style['icon']}>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </article>
      )}

      {data.comparison && (
        <article className={style['comparison']}>
          <article className={style['before']}>
            <h3>{data.comparison.before.heading}</h3>
            <ul>
              {data.comparison.before.items.map((item, i) => (
                <li key={i}>❌ {item}</li>
              ))}
            </ul>
          </article>
          <article className={style['after']}>
            <h3>{data.comparison.after.heading}</h3>
            <ul>
              {data.comparison.after.items.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </article>
        </article>
      )}

      {data.quote && (
        <blockquote>
          {data.quote}
          {data.quoteAuthor && <footer>— {data.quoteAuthor}</footer>}
        </blockquote>
      )}

      {data.story && data.takeaway ? (
        <article className={style['story-takeaway']}>
          <article className={style['story']}>
            <header>Eyewitness Testimony</header>
            <p>{data.story}</p>
          </article>
          <article className={style['takeaway']}>
            <p>💡 {data.takeaway}</p>
          </article>
        </article>
      ) : (
        <>
          {data.story && (
            <article className={style['story']}>
              <header>Eyewitness Testimony</header>
              <p>{data.story}</p>
            </article>
          )}
          {data.takeaway && (
            <article className={style['takeaway']}>
              <p>💡 {data.takeaway}</p>
            </article>
          )}
        </>
      )}

      {data.footerIcons && (
        <footer className={style['footer-icons']}>
          {data.footerIcons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </footer>
      )}
    </section>
  );
};

export default Slide;

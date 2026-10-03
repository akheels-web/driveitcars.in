'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSlider({ customBanners = null }) {
  const defaultSlides = [
    { src: '/banner5.avif', alt: 'Self Drive Cars in Hyderabad' },
    { src: '/banner10.avif', alt: 'Affordable Car Rental' },
    { src: '/banner6.avif', alt: 'Luxury Car Rental Hyderabad' },
    { src: '/banner7.avif', alt: 'Outstation and City Travels' },
    { src: '/banner8.avif', alt: 'Sedans, SUVs and Luxury Cars' },
    { src: '/banner11.avif', alt: 'Book Self Drive Car Online' },
  ];

  const slides = customBanners && customBanners.length > 0 ? customBanners : defaultSlides;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div
      className="slider hero-responsive-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        background: '#0f172a',
      }}
    >
      <div
        className="slides"
        style={{
          display: 'flex',
          transform: `translateX(-${current * 100}%)`,
          transition: 'transform 0.45s ease-in-out',
          width: '100%',
        }}
      >
        {slides.map((slide, idx) => (
          <div
            className="slide"
            key={idx}
            style={{
              minWidth: '100%',
              width: '100%',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <Link href="/self-drive-car" style={{ display: 'block', width: '100%' }}>
              <img
                src={slide.src || slide}
                alt={slide.alt || `DriveIt Slide ${idx + 1}`}
                className="hero-slider-img"
              />
            </Link>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="hero-slider-nav-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            type="button"
            className="hero-slider-nav-btn next-btn"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>

          <div className="hero-slider-dots">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`hero-dot ${current === idx ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

const items = [
  {
    img: "/images/couple-1.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics",
  },
  {
    img: "/images/couple-2.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/couple-3.jpg",
    quote:
      "Far far away, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <span>Best Wishes</span>
            <h2>Friends Wishes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <div className="wrap-testimony">
              <div className="owl-carousel-fullwidth">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="item"
                    style={{
                      display: i === index ? "block" : "none",
                    }}
                  >
                    <div className="testimony-slide active text-center">
                      <figure>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.img} alt="user" />
                      </figure>
                      <span>
                        John Doe, via{" "}
                        <a href="#" className="twitter">
                          Twitter
                        </a>
                      </span>
                      <blockquote>
                        <p>&quot;{item.quote}&quot;</p>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="owl-dots text-center"
                style={{ marginTop: "1rem" }}
              >
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={i === index ? "owl-dot active" : "owl-dot"}
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                  >
                    <span />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

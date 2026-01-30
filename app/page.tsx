import { Countdown } from "@/components/Countdown";
import { Counter } from "@/components/Counter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { VideoPopup } from "@/components/VideoPopup";

export default function HomePage() {
  return (
    <>
      <header
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        style={{ backgroundImage: "url(/images/img_bg_2.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">
                <div
                  className="display-tc animate-box"
                  data-animate-effect="fadeIn"
                >
                  <h1>Joefrey &amp; Sheila</h1>
                  <h2>We Are Getting Married</h2>
                  <Countdown />
                  <p>
                    <a href="#" className="btn btn-default btn-sm">
                      Save the date
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="fh5co-couple">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2>Hello!</h2>
              <h3>November 28th, 2016 New York, USA</h3>
              <p>We invited you to celebrate our wedding</p>
            </div>
          </div>
          <div className="couple-wrap animate-box">
            <div className="couple-half">
              <div className="groom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/groom.jpg"
                  alt="groom"
                  className="img-responsive"
                />
              </div>
              <div className="desc-groom">
                <h3>Joefrey Mahusay</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2" />
            </p>
            <div className="couple-half">
              <div className="bride">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/bride.jpg"
                  alt="bride"
                  className="img-responsive"
                />
              </div>
              <div className="desc-bride">
                <h3>Sheila Mahusay</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="fh5co-event"
        className="fh5co-bg"
        style={{ backgroundImage: "url(/images/img_bg_3.jpg)" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>Our Special Events</span>
              <h2>Wedding Events</h2>
            </div>
          </div>
          <div className="row">
            <div className="display-t">
              <div className="display-tc">
                <div className="col-md-10 col-md-offset-1">
                  <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box">
                      <h3>Main Ceremony</h3>
                      <div className="event-col">
                        <i className="icon-clock" />
                        <span>4:00 PM</span>
                        <span>6:00 PM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar" />
                        <span>Monday 28</span>
                        <span>November, 2016</span>
                      </div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box">
                      <h3>Wedding Party</h3>
                      <div className="event-col">
                        <i className="icon-clock" />
                        <span>7:00 PM</span>
                        <span>12:00 AM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar" />
                        <span>Monday 28</span>
                        <span>November, 2016</span>
                      </div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-couple-story">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>We Love Each Other</span>
              <h2>Our Story</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline animate-box">
                <li className="animate-box">
                  <div
                    className="timeline-badge"
                    style={{ backgroundImage: "url(/images/couple-1.jpg)" }}
                  />
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">First We Meet</h3>
                      <span className="date">December 25, 2015</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div
                    className="timeline-badge"
                    style={{ backgroundImage: "url(/images/couple-2.jpg)" }}
                  />
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">First Date</h3>
                      <span className="date">December 28, 2015</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="animate-box">
                  <div
                    className="timeline-badge"
                    style={{ backgroundImage: "url(/images/couple-3.jpg)" }}
                  />
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">In A Relationship</h3>
                      <span className="date">January 1, 2016</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-gallery" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>Our Memories</span>
              <h2>Wedding Gallery</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12">
              <ul id="fh5co-gallery-list">
                {[
                  {
                    img: "gallery-1.jpg",
                    photos: "14",
                    title: "Two Glas of Juice",
                  },
                  {
                    img: "gallery-2.jpg",
                    photos: "30",
                    title: "Timer starts now!",
                    class: "color-2",
                  },
                  {
                    img: "gallery-3.jpg",
                    photos: "90",
                    title: "Beautiful sunset",
                    class: "color-3",
                  },
                  {
                    img: "gallery-4.jpg",
                    photos: "12",
                    title: "Company's Conference Room",
                    class: "color-4",
                  },
                  {
                    img: "gallery-5.jpg",
                    photos: "50",
                    title: "Useful baskets",
                    class: "color-3",
                  },
                  {
                    img: "gallery-6.jpg",
                    photos: "45",
                    title: "Skater man in the road",
                    class: "color-4",
                  },
                  {
                    img: "gallery-7.jpg",
                    photos: "35",
                    title: "Two Glas of Juice",
                    class: "color-4",
                  },
                  {
                    img: "gallery-8.jpg",
                    photos: "90",
                    title: "Timer starts now!",
                    class: "color-5",
                  },
                  {
                    img: "gallery-9.jpg",
                    photos: "56",
                    title: "Beautiful sunset",
                    class: "color-6",
                  },
                ].map((g) => (
                  <li
                    key={g.img}
                    className={`one-third animate-box ${g.class || ""}`}
                    data-animate-effect="fadeIn"
                    style={{ backgroundImage: `url(/images/${g.img})` }}
                  >
                    <a href={`/images/${g.img}`} className={g.class || ""}>
                      <div className="case-studies-summary">
                        <span>{g.photos} Photos</span>
                        <h2>{g.title}</h2>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Counter />

      <TestimonialCarousel />

      <div id="fh5co-services" className="fh5co-section-gray">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>We Offer Services</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="feature-left animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="icon">
                  <i className="icon-calendar" />
                </span>
                <div className="feature-copy">
                  <h3>We Organized Events</h3>
                  <p>
                    Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                    reprehenderit. Eos cumque dicta adipisci architecto culpa
                    amet.
                  </p>
                </div>
              </div>
              <div
                className="feature-left animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="icon">
                  <i className="icon-image" />
                </span>
                <div className="feature-copy">
                  <h3>Photoshoot</h3>
                  <p>
                    Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                    reprehenderit. Eos cumque dicta adipisci architecto culpa
                    amet.
                  </p>
                </div>
              </div>
              <div
                className="feature-left animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="icon">
                  <i className="icon-video" />
                </span>
                <div className="feature-copy">
                  <h3>Video Editing</h3>
                  <p>
                    Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                    reprehenderit. Eos cumque dicta adipisci architecto culpa
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <VideoPopup />
            </div>
          </div>
        </div>
      </div>

      <div
        id="fh5co-started"
        className="fh5co-bg"
        style={{ backgroundImage: "url(/images/img_bg_4.jpg)" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Are You Attending?</h2>
              <p>
                Please Fill-up the form to notify you that you&apos;re
                attending. Thanks.
              </p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-10 col-md-offset-1">
              <form
                className="form-inline"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <button type="submit" className="btn btn-default btn-block">
                    I am Attending
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

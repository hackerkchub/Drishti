import React, { useRef, useEffect, useState } from "react";
import {
  Page,
  Hero,
  HeroInner,
  HeroTitle,
  HeroSub,
  HeroForm,
  HeroInput,
  HeroCTA,
  CategoryCard,
  CategoryIcon,
  Section,
  SectionHeader,
  HorizontalRow,
  ProfileCircle,
  ProfileName,
  ProfilePrice,
  Testimonials,
  TestimonialCard,
  FooterCTA,
  LogosRow,
} from "./HomeStyles";

// ===== Dummy Static Data (Fallback) =====
import {
  aiExperts,
  doctors,
  counsellors,
  tarotReaders,
  yogaExperts,
  lifeCoaches,
  exploreCategories,
  testimonials,
} from "./dummyData"; // ✅ Move your existing dummy arrays into a new file: HomePage/dummyData.js

const Home = () => {
  const scrollRefs = {
    ai: useRef(null),
    doc: useRef(null),
    counsellor: useRef(null),
    tarot: useRef(null),
    yoga: useRef(null),
    life: useRef(null),
    categories: useRef(null),
  };

  // ====== API State Setup ======
  const [data, setData] = useState({
    aiExperts,
    doctors,
    counsellors,
    tarotReaders,
    yogaExperts,
    lifeCoaches,
    categories: exploreCategories,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ====== Future API Integration ======
  useEffect(() => {
    // 🟢 Uncomment when backend is ready:
    /*
    setLoading(true);
    fetch("/api/home-data")
      .then((res) => res.json())
      .then((apiData) => {
        setData({
          aiExperts: apiData.aiExperts || aiExperts,
          doctors: apiData.doctors || doctors,
          counsellors: apiData.counsellors || counsellors,
          tarotReaders: apiData.tarotReaders || tarotReaders,
          yogaExperts: apiData.yogaExperts || yogaExperts,
          lifeCoaches: apiData.lifeCoaches || lifeCoaches,
          categories: apiData.categories || exploreCategories,
        });
      })
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
    */
  }, []);

  const scroll = (ref, dir = "right") => {
    if (!ref.current) return;
    const amount = ref.current.clientWidth * 0.7;
    ref.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const renderRow = (title, ref, list = []) => (
    <Section>
      <SectionHeader>
        <h3>{title}</h3>
        <button className="seeAll">See All</button>
      </SectionHeader>

      <HorizontalRow>
        <button className="nav left" onClick={() => scroll(ref, "left")}>‹</button>
        <div className="row" ref={ref}>
          {list.length ? (
            list.map((a) => (
              <ProfileCircle key={a.id}>
                <img src={a.img} alt={a.name} />
                <ProfileName>{a.name}</ProfileName>
                <ProfilePrice>{a.price}</ProfilePrice>
              </ProfileCircle>
            ))
          ) : (
            <p style={{ padding: "2rem", color: "#777" }}>No data available</p>
          )}
        </div>
        <button className="nav right" onClick={() => scroll(ref, "right")}>›</button>
      </HorizontalRow>
    </Section>
  );

  return (
    <Page>
      {/* HERO SECTION */}
      <Hero>
        <HeroInner>
          <HeroTitle>Talk To Verified Experts</HeroTitle>
          <HeroSub>First consultation free — connect instantly with trusted specialists</HeroSub>

          <HeroForm onSubmit={(e) => e.preventDefault()}>
            <HeroInput placeholder="India (+91) — Mobile number" />
            <HeroCTA>Sign Up</HeroCTA>
          </HeroForm>
        </HeroInner>
      </Hero>

      {/* ===== Categories Section ===== */}
      <Section>
        <SectionHeader>
          <h3>Explore Categories</h3>
        </SectionHeader>
        <HorizontalRow>
          <button className="nav left" onClick={() => scroll(scrollRefs.categories, "left")}>‹</button>
          <div className="row" ref={scrollRefs.categories}>
            {data.categories.map((cat) => (
              <CategoryCard key={cat.id}>
                <CategoryIcon style={{ fontSize: "2rem" }}>{cat.icon}</CategoryIcon>
                <h4>{cat.title}</h4>
              </CategoryCard>
            ))}
          </div>
          <button className="nav right" onClick={() => scroll(scrollRefs.categories, "right")}>›</button>
        </HorizontalRow>
      </Section>

      {/* ===== Dynamic Rows ===== */}
      {loading && <p style={{ textAlign: "center" }}>Loading experts...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {renderRow("AI Astrologers", scrollRefs.ai, data.aiExperts)}
      {renderRow("Doctors", scrollRefs.doc, data.doctors)}
      {renderRow("Counsellors", scrollRefs.counsellor, data.counsellors)}
      {renderRow("Tarot Readers", scrollRefs.tarot, data.tarotReaders)}
      {renderRow("Yoga Experts", scrollRefs.yoga, data.yogaExperts)}
      {renderRow("Life Coaches", scrollRefs.life, data.lifeCoaches)}

      {/* Testimonials */}
      <Section style={{ background: "#fafafa" }}>
        <SectionHeader><h3>Testimonials</h3></SectionHeader>
        <Testimonials>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id}>
              <img src={t.img} alt={t.name} />
              <p>{t.text}</p>
              <strong>— {t.name}</strong>
            </TestimonialCard>
          ))}
        </Testimonials>
      </Section>

      {/* Payment logos / Footer CTA */}
      <Section>
        <SectionHeader><h3>100% Secure Payment</h3></SectionHeader>
        <LogosRow>
          {[
            "https://via.placeholder.com/140x40?text=Verified",
            "https://via.placeholder.com/140x40?text=SSL",
            "https://via.placeholder.com/140x40?text=VISA",
            "https://via.placeholder.com/140x40?text=Razorpay",
            "https://via.placeholder.com/140x40?text=Paytm",
          ].map((src, idx) => (
            <img key={idx} src={src} alt={`logo-${idx}`} />
          ))}
        </LogosRow>
      </Section>

      <FooterCTA>
        <h3>Ready to consult an expert?</h3>
        <HeroCTA>Get Started</HeroCTA>
      </FooterCTA>
    </Page>
  );
};

export default Home;

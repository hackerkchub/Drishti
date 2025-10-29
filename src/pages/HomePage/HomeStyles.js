import styled from "styled-components";

/* Page wrapper */
export const Page = styled.main`
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  color: #111;
  font-family: "Poppins", sans-serif;
`;

/* Navbar */
export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 1000;

  h2 { color: #6e1b4d; font-weight: 700; }

  ul {
    display: flex;
    list-style: none;
    gap: 22px;
  }
  li { cursor: pointer; font-weight: 500; transition: 0.3s; }
  li:hover { color: #ff7a00; }
`;

/* HERO */
export const Hero = styled.header`
  height: 360px;
  margin-top: 64px;
  background: linear-gradient(90deg, #6e1b4d 0%, #7a1a3b 30%, #4b082b 100%),
    url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60")
      center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const HeroInner = styled.div`
  z-index: 2;
  text-align: center;
  max-width: 1100px;
  width: 100%;
  padding: 32px;
`;

export const HeroTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 8px;
  color: #fff;
  letter-spacing: 0.2px;
`;

export const HeroSub = styled.p`
  color: #f3e6e6;
  margin-bottom: 18px;
  font-size: 1.05rem;
`;

export const HeroForm = styled.form`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 12px;
  flex-wrap: wrap;
`;

export const HeroInput = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  width: 320px;
  max-width: 80%;
  font-size: 1rem;
`;

export const HeroCTA = styled.button`
  background: #ff7a00;
  color: #fff;
  border: none;
  padding: 12px 22px;
  border-radius: 28px;
  font-weight: 700;
  cursor: pointer;
`;

/* CATEGORIES */
export const Categories = styled.section`
  display: flex;
  gap: 16px;
  max-width: 1100px;
  margin: -40px auto 24px;
  padding: 0 18px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryCard = styled.div`
  background: #fdeee6;
  padding: 28px;
  border-radius: 10px;
  width: calc(33% - 12px);
  min-width: 160px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transition: transform 0.3s;
  h4 { margin-top: 12px; font-weight: 600; }
  &:hover { transform: translateY(-5px); }
`;

export const CategoryIcon = styled.div`
  font-size: 44px;
`;

/* SECTION base */
export const Section = styled.section`
  padding: 36px 18px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  h3 {
    font-size: 1.6rem;
    margin: 0;
  }

  .seeAll {
    background: #ff7a00;
    color: #fff;
    border: 0;
    padding: 8px 14px;
    border-radius: 24px;
    font-weight: 700;
    cursor: pointer;
  }
`;

/* horizontal scroller */
export const HorizontalRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  .nav {
    background: #fff8f0;
    border: 1px solid #f5d6a4;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    color: #6e1b4d;
    transition: 0.3s;
  }

  .nav:hover { background: #ff7a00; color: white; }

  .row {
    display: flex;
    gap: 18px;
    overflow-x: auto;
    padding: 8px 4px;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .row::-webkit-scrollbar { display: none; }
`;

export const ProfileCircle = styled.div`
  min-width: 120px;
  text-align: center;
  img { width: 96px; height: 96px; border-radius: 50%; display:block; margin: 0 auto; object-fit: cover; }
`;

export const ProfileName = styled.div`
  margin-top: 8px;
  font-weight: 600;
`;

export const ProfilePrice = styled.div`
  margin-top: 4px;
  color: #666;
  font-size: 0.95rem;
`;

export const Testimonials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 18px;
`;

export const TestimonialCard = styled.div`
  background: #fff;
  border: 1px solid #f6d89f;
  padding: 18px;
  border-radius: 8px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  img { width: 64px; height: 64px; border-radius: 50%; }
`;

export const LogosRow = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0;
  img { height: 44px; object-fit: contain; border-radius: 6px; background: #fff; padding: 6px; }
`;

export const FooterCTA = styled.section`
  background: linear-gradient(90deg,#fff2e6,#fff);
  padding: 36px 18px;
  text-align: center;
  margin-top: 18px;
  h3 { margin-bottom: 12px; font-size: 1.4rem; }
`;

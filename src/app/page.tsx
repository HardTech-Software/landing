"use client";
import { ProgressPage } from "@/components";
// import { Header } from '@/components';
// import Footer from '@/components/footer';

// import {
//   SectionOne,
//   SectionTwo,
//   SectionThree,
//   SectionFour,
//   SectionFive,
//   SectionSix,
//   SectionSeven,
//   SectionEight,
// } from '@/components/sections';
import { themeOptions } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <main style={{ overflow: "hidden" }}>
        <ProgressPage />
        {/* <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <Footer /> */}
      </main>
    </ThemeProvider>
  );
}

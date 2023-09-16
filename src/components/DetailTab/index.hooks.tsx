import { useState } from "react";

export const useDetailTab = (tabs: string[]) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    scrollToSection(tabs[newValue]);
  };

  const scrollToSection = (scrolledTab: string) => {
    const section = document.getElementById(scrolledTab);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { value, handleChange };
};

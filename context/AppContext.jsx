"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [wishlist, setWishlist] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [plannerPresetState, setPlannerPresetState] = useState(null);
  const [isSoundOn, setIsSoundOn] = useState(false);

  // Load wishlist & currency from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("bharat_yatra_wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
      const savedCurrency = localStorage.getItem("bharat_yatra_currency");
      if (savedCurrency) {
        setCurrency(savedCurrency);
      }
    } catch (e) {
      console.warn("Storage not accessible:", e);
    }
  }, []);

  // Save wishlist changes
  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      let updated;
      if (exists) {
        updated = prev.filter((p) => p.id !== item.id);
      } else {
        updated = [...prev, item];
      }
      try {
        localStorage.setItem("bharat_yatra_wishlist", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const isInWishlist = (id) => {
    return wishlist.some((p) => p.id === id);
  };

  const handleSetCurrency = (cur) => {
    setCurrency(cur);
    try {
      localStorage.setItem("bharat_yatra_currency", cur);
    } catch (e) {}
  };

  const openTripPlannerWithState = (stateId) => {
    setPlannerPresetState(stateId);
    setIsTripPlannerOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency: handleSetCurrency,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        isTripPlannerOpen,
        setIsTripPlannerOpen,
        plannerPresetState,
        openTripPlannerWithState,
        isSoundOn,
        setIsSoundOn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

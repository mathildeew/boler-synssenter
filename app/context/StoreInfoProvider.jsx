"use client";
import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import useAPI from "../hooks/useAPI";
import apiQueries from "../../sanity/apiQueries";

const StoreInfoContext = createContext();

export function StoreInfoProvider({ children }) {
  const [address, setAddress] = useState([]);
  const [mail, setMail] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);
  const [phone, setPhone] = useState([]);

  const { fetchApi } = useAPI();

  const getData = useCallback(async () => {
    const info = await fetchApi(apiQueries().info);
    setAddress(info.address);
    setMail(info.mail);
    setOpeningHours(info.openingHours);
    setPhone(info.phone);
  });

  useEffect(() => {
    getData();
  }, []);

  const value = useMemo(
    () => ({
      address,
      mail,
      openingHours,
      phone,
    }),
    [address, mail, openingHours, phone]
  );

  return <StoreInfoContext.Provider value={value}>{children}</StoreInfoContext.Provider>;
}

export const useStoreInfo = () => useContext(StoreInfoContext);

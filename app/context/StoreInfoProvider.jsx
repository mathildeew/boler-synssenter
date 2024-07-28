"use client";
import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import useAPI from "../hooks/useAPI";
import apiQueries from "../../sanity/apiQueries";

/**
 * Context to store and provide store information.
 * @type {React.Context}
 */
const StoreInfoContext = createContext();

/**
 * Provider component to supply store information to its children.
 *
 * @param {Object} props - The properties object
 * @param {React.ReactNode} props.children - The child component that will consume the context.
 * @returns {JSX.Element} - The provider component with store information.
 */
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

/**
 * Custom hook to access the store information context.
 *
 * @returns {Object} - The store information context value.
 */
export const useStoreInfo = () => useContext(StoreInfoContext);

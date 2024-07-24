import { useState } from "react";
import { createClient } from "next-sanity";

/**
 * Custom hook for making API request to Sanity
 *
 * @returns {{
 * fetchApi: function,
 * data: any,
 * isLoading: boolean | null,
 * isSuccess: boolean | null,
 * isError: : boolean | null,
 * errorMsg: string | null
 * }}
 */
export default function useAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMessage] = useState(null);

  const client = createClient({
    projectId: "w7pqyox8",
    dataset: "production",
    apiVersion: "2024-06-08",
    useCdn: false,
  });

  /**
   * Function for making the API request
   *
   * @param {string} query - The GROQ query to be executed
   * @returns {Promise<any>} - The API response or null if an error occurs
   */
  async function fetchApi(query) {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage(null);

    try {
      const json = await client.fetch(query);

      setData(json);
      setIsSuccess(true);
      return json;
    } catch (error) {
      setErrorMessage(error.message);
      setIsError(true);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    fetchApi,
    data,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
  };
}

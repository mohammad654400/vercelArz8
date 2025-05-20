import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";

const COOKIE_EXPIRY = 1; // Cookie will expire after 24 hours
const SUBMISSION_HISTORY_KEY = "contactSubmissionHistory";

const useSubmissionHistory = () => {
  const [submissionHistory, setSubmissionHistory] = useState<string[]>([]);

  useEffect(() => {
    const loadSubmissionHistory = () => {
      try {
        const storedHistory = localStorage.getItem(SUBMISSION_HISTORY_KEY);
        if (storedHistory) {
          setSubmissionHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error("Error loading submission history:", error);
        const cookieHistory = Cookies.get(SUBMISSION_HISTORY_KEY);
        if (cookieHistory) {
          try {
            setSubmissionHistory(JSON.parse(cookieHistory));
          } catch (e) {
            console.error("Error parsing cookie history:", e);
          }
        }
      }
    };
    loadSubmissionHistory();
  }, []);

  const saveSubmission = useCallback(
    (hash: string) => {
      const updatedHistory = [...submissionHistory, hash].slice(-10);
      setSubmissionHistory(updatedHistory);
      try {
        localStorage.setItem(
          SUBMISSION_HISTORY_KEY,
          JSON.stringify(updatedHistory)
        );
        Cookies.set(SUBMISSION_HISTORY_KEY, JSON.stringify(updatedHistory), {
          expires: COOKIE_EXPIRY,
          sameSite: "strict",
        });
      } catch (error) {
        console.error("Error saving submission history:", error);
      }
    },
    [submissionHistory]
  );

  return { submissionHistory, saveSubmission };
};

export default useSubmissionHistory;

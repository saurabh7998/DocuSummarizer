import axios from 'axios';

const DOCU_SUMMARIZE_API = "http://localhost:3000/api";

export const summarizePdfService = async (formData, token) => {
  const response = await axios.post(
    `${DOCU_SUMMARIZE_API}/gemini/summarize`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  return response.data;
};

export const humanizeSummaryService = async (summary, token) => {
  const response = await axios.post(
    `${DOCU_SUMMARIZE_API}/gemini/humanize`,
    { summary },
    {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  return response.data;
}

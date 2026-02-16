import api from "@/app/api/axiosInstance";
import type { NewsApiResponse } from "@/app/type/news";
import axios, { AxiosRequestConfig } from "axios";

const fetchNews = async (
  url: string,
  config?: AxiosRequestConfig,
): Promise<NewsApiResponse> => {
  try {
    const { data } = await api.get<NewsApiResponse>(url, config);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to fetch news");
    }

    throw new Error("Unexpected error occurred");
  }
};

export const getTopHeadlines = (
  country: string = "us",pageSize: number=10
): Promise<NewsApiResponse> => {
  return fetchNews("/top-headlines", {
    params: { country ,pageSize},
  });
};

export const getNewsByTitle = (title: string): Promise<NewsApiResponse> => {
  return fetchNews("/everything", {
    params: {
      q: title,
    },
  });
};

export const getAllNews = (
  query: string = "latest",
): Promise<NewsApiResponse> => {
  return fetchNews("/everything", {
    params: {
      q: query,
    },
  });
};

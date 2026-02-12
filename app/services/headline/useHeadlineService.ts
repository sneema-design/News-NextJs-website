"use client"
import { NewsApiResponse } from "@/app/type/news";
import { useQuery } from "@tanstack/react-query";
import { getTopHeadlines ,getNewsByTitle, getAllNews} from "./headlineService";
import Category from "@/components/Category";

export const useGetAllHeadline=()=>{
    return useQuery<NewsApiResponse,Error>({
        queryKey:["Headlines"],
        queryFn:()=>getTopHeadlines(),
    });
}

export const useGetNewsByTitle=(title:string)=>{
    return useQuery<NewsApiResponse,Error>({
        queryKey:["Single-news",title],
        queryFn:()=>getNewsByTitle(title)
    })
}

export const useGetAllNews=(category?:string)=>{
    return useQuery<NewsApiResponse,Error>({
        queryKey:["every-news",category],
        queryFn:()=>getAllNews(category||"latest")
    })
    
}
"use client"
import { NewsApiResponse } from "@/app/type/news";
import { useQuery } from "@tanstack/react-query";
import { getTopHeadlines ,getNewsByTitle} from "./headlineService";

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
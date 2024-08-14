import {
  ApplicationBody,
  ProjectListResponse,
  NewsListResponse,
  NewsDetailResponse,
  FaqListResponse,
} from "@/shared/types/api";

import { baseRequest } from "./base";

const getProjectsList = () =>
  baseRequest<ProjectListResponse>({
    path: '/v2/object-slim/get-list/projects?data={"with_relations":false, "packet_type":"public"}&offset=0&limit=20',
    method: "GET",
  });

const postApplication = ({ body }: { body: ApplicationBody }) =>
  baseRequest({
    path: "/v2/items/request",
    method: "POST",
    body: { data: body },
  });

const getNewsList = ({ offset, limit }: { offset: number; limit: number }) =>
  baseRequest<NewsListResponse>({
    path: `/v2/object-slim/get-list/news?data={"with_relations":false}&offset=${offset}&limit=${limit}`,
    method: "GET",
  });

const getNewsDetail = ({ guid }: { guid: string }) =>
  baseRequest<NewsDetailResponse>({
    path: `/v1/object-slim/news/${guid}`,
    method: "GET",
  });

const getFaqList = ({ guid }: { guid: string }) =>
  baseRequest<FaqListResponse>({
    path: `/v2/object-slim/get-list/faq?data={}`,
    method: "GET",
  });

export const api = {
  getProjectsList,
  postApplication,
  getNewsList,
  getNewsDetail,
  getFaqList,
};

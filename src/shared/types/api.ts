export interface ProjectListResponse {
  data: { data: { response: Project[] } };
}

export interface Project {
  guid: string;
  currency: string[];
  lot_amount: number;
  name: string;
  image: string;
}

export interface NewsListResponse {
  data: { data: { count: number; response: NewsPost[] } };
}

export interface FaqListResponse {
  data: { data: { count: number; response: NewsFaq[] } };
}

export interface NewsDetailResponse {
  data: { data: { response: NewsPost } };
}

export interface NewsPost {
  guid: string;
  content: string;
  content_en: string;
  content_uz: string;
  date_of_issue: string;
  photo: string;
  toc: string;
  toc_en: string;
  toc_uz: string;
}

export interface NewsFaq {
  faq_id: string;
  guid: string;
  faq_id_data: any;
  name: string;
  name_en: string;
  name_uz: string;
}

export interface ApplicationBody {
  first_name: string;
  last_name: string;
  country: string;
  email: string;
  phone: string;
  message: string;
  city: string;
}

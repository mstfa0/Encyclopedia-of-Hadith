
export interface Hadith {
  text: string;
  source: string;
  grade: 'صحيح' | 'حسن' | 'ضعيف' | 'موضوع';
  explanation?: string;
  narrator?: string;
}

export interface SearchResult {
  hadiths: Hadith[];
  explanation: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  imageUrl: string;
}

export interface Book {
  title: string;
  author: string;
}

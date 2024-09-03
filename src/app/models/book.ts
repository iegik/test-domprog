export interface Book {
  id: string;
  author: string;
  title: string;
  year?: number | null;
  pages?: number | null;
}

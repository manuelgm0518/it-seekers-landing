export default interface BlogEntry {
  id: number;
  to: string;
  date: string; //Date;
  picture: string;
  title: string;
  description: string;
  comments: number;
  categories: string[];
  tags: string[];
}

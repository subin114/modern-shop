export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

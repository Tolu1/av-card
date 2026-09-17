"use client";

import {
  ChevronDownIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const pageSizes = ["5", "6", "10", "20"];
const ellipsis = "ellipsis" as const;

function getPages(page: number, pageCount: number) {
  if (pageCount <= 4) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
  if (page <= 3) return [1, 2, 3, ellipsis, pageCount];
  if (page >= pageCount - 2) {
    return [1, ellipsis, pageCount - 2, pageCount - 1, pageCount];
  }
  return [1, ellipsis, page, ellipsis, pageCount];
}

type TablePaginationProps = {
  id: string;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
  totalResults: number;
  className?: string;
};

export function TablePagination({
  id,
  page,
  pageCount,
  onPageChange,
  pageSize,
  onPageSizeChange,
  totalResults,
  className,
}: TablePaginationProps) {
  const pages = getPages(page, pageCount);

  return (
    <div
      className={cn(
        "flex items-center justify-center lg:justify-between",
        className,
      )}
    >
      <div className="hidden items-center gap-1.5 text-sm leading-[23px] font-medium text-[#667085] lg:flex">
        <label htmlFor={id}>Showing</label>
        <Select
          value={String(pageSize)}
          onValueChange={(value) => onPageSizeChange(Number(value))}
        >
          <SelectTrigger
            id={id}
            icon={<ChevronDownIcon className="size-5 text-[#667085]" />}
            className="w-[59px] gap-2.5 rounded-[4px] border-[#98a2b3] bg-white px-2.5 text-sm leading-[23px] font-semibold text-[#667085] data-[size=default]:h-9"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageSizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span>of {totalResults} results</span>
      </div>
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="gap-[7px] text-[#667085]">
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Go to previous page"
              onClick={(event) => {
                event.preventDefault();
                onPageChange(Math.max(1, page - 1));
              }}
              className="size-[35px] rounded-md text-[#667085] hover:bg-transparent"
            >
              <ChevronsLeftIcon className="size-3.5" />
            </PaginationLink>
          </PaginationItem>
          {pages.map((number, index) =>
            number === ellipsis ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis className="w-4" />
              </PaginationItem>
            ) : (
              <PaginationItem key={number}>
                <PaginationLink
                  href="#"
                  isActive={page === number}
                  onClick={(event) => {
                    event.preventDefault();
                    onPageChange(number);
                  }}
                  className="size-[35px] rounded-md border-0 text-xs leading-[19px] font-semibold text-[#667085] data-[active=true]:bg-[#5a43af] data-[active=true]:text-[#edeaf6]"
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Go to next page"
              onClick={(event) => {
                event.preventDefault();
                onPageChange(Math.min(pageCount, page + 1));
              }}
              className="size-[35px] rounded-md text-[#667085] hover:bg-transparent"
            >
              <ChevronsRightIcon className="size-3.5" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

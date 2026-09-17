"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatShortDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  CaretDownIcon,
  DownloadIcon,
  FilterIcon,
  SearchIcon,
} from "@dashboard/_components/icons";

type TransactionsFiltersProps = {
  search: string;
  onSearchChange: (search: string) => void;
  type: string;
  onTypeChange: (type: string) => void;
  date?: Date;
  onDateChange: (date?: Date) => void;
  onDownload: () => void;
  className?: string;
};

export function TransactionsFilters({
  search,
  onSearchChange,
  type,
  onTypeChange,
  date,
  onDateChange,
  onDownload,
  className,
}: TransactionsFiltersProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-[19px] lg:gap-[26px] lg:rounded-xl lg:bg-[#482ea6] lg:px-5 lg:py-[18px]",
        className,
      )}
    >
      <div className="relative flex-1 lg:max-w-[579px]">
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search Transactions"
          aria-label="Search transactions"
          className="h-9 rounded-lg border-[#f2f4f7] bg-white pr-10 pl-2.5 text-sm leading-[23px] font-medium text-[#101828] placeholder:text-[#98a2b3] md:text-sm"
        />
        <SearchIcon className="absolute top-2.5 right-2.5 size-5 text-[#98a2b3]" />
      </div>
      <Select
        value={type}
        onValueChange={(value) => onTypeChange(value ?? "all")}
        items={{ all: "Filter by", credit: "Credit", debit: "Debit" }}
      >
        <SelectTrigger
          aria-label="Filter by type"
          icon={
            <CaretDownIcon className="ml-auto hidden size-5 shrink-0 text-[#98a2b3] lg:block" />
          }
          className="w-[47px] justify-center gap-2.5 rounded-lg border-[#f2f4f7] bg-white px-[13px] text-sm leading-[23px] font-medium text-[#98a2b3] data-[size=default]:h-9 lg:w-[188px] lg:justify-start lg:px-2.5"
        >
          <FilterIcon className="size-5 shrink-0 text-[#98a2b3]" />
          <span className="hidden lg:inline">
            <SelectValue />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Filter by</SelectItem>
          <SelectItem value="credit">Credit</SelectItem>
          <SelectItem value="debit">Debit</SelectItem>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger className="hidden h-9 w-[166px] items-center gap-2.5 rounded-lg border border-[#f2f4f7] bg-white px-2.5 text-sm leading-[23px] font-medium text-[#98a2b3] lg:flex">
          <CalendarIcon className="size-5 shrink-0" />
          {date ? formatShortDate(date) : "Select Date"}
          <CaretDownIcon className="ml-auto size-5 shrink-0" />
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            autoFocus
          />
        </PopoverContent>
      </Popover>
      <Button
        onClick={onDownload}
        className="ml-auto hidden h-[37px] w-[193px] gap-[7px] rounded-lg bg-[#8264e4] text-sm leading-[23px] text-[#fcfcfd] hover:bg-[#8264e4]/90 lg:flex"
      >
        Download Report
        <DownloadIcon className="h-6 w-[18px] text-[#e6f0fc]" />
      </Button>
    </div>
  );
}

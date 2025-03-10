"use client";
import { Pagination } from "@heroui/react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function PaginationComponent(total: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const createPageUrl = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      onChange={createPageUrl}
      color="warning"
      initialPage={currentPage}
      total={total.total}
    />
  );
}

import { Pagination } from "@heroui/react";

export default function PaginationComponent(total: any) {
  return <Pagination color="warning" initialPage={1} total={total.total} />;
}

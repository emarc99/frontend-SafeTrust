// frontend-SafeTrust/src/hooks/useApartments.ts

import { MOCK_APARTMENTS, Apartment } from "@/lib/mockData/apartments";

interface UseApartmentsOptions {
  limit: number;
  offset: number;
  search?: string;
}

interface UseApartmentsResult {
  data: {
    apartments: Apartment[];
    apartments_aggregate: { aggregate: { count: number } };
  };
  loading: boolean;
  error: undefined;
}

/**
 * Drop-in replacement for Apollo's useQuery(GET_APARTMENTS, ...)
 * Returns the SAME shape so components don't need to change.
 *
 * In dApp-SafeTrust, this file is replaced/aliased to the real
 * Apollo useQuery hook against Hasura.
 */
export function useApartments({
  limit,
  offset,
  search = "",
}: UseApartmentsOptions): UseApartmentsResult {
  const filtered = search
    ? MOCK_APARTMENTS.filter((a) =>
        a.name.toLowerCase().includes(search.toLowerCase())
      )
    : MOCK_APARTMENTS;

  const paged = filtered.slice(offset, offset + limit);

  return {
    data: {
      apartments: paged,
      apartments_aggregate: {
        aggregate: { count: filtered.length },
      },
    },
    loading: false,
    error: undefined,
  };
}
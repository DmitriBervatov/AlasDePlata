import axios from "@/lib/api";
import { Destination } from "./types";

export const getDestinations = async (
  continents?: string[]
): Promise<Destination[]> => {
  const params =
    continents && continents.length > 0 ? { continent: continents } : {};
  return (
    await axios.get("/destinations", {
      params,
      paramsSerializer: (params) => {
        const searchParams = new URLSearchParams();
        if (params.continent) {
          (Array.isArray(params.continent)
            ? params.continent
            : [params.continent]
          ).forEach((c) => searchParams.append("continent", c));
        }
        return searchParams.toString();
      },
    })
  ).data;
};

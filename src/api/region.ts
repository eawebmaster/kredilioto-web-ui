import axiosInterceptorInstance from "@/hooks/use-axios";
import { FetchProps } from "./props";
import axios from "axios";

export const CITIES_URL = "/requests/cities";

export const COUNTIES_URL = (cityId: string) =>
  `/requests/counties/${cityId}`;

export const DISTRICTS_URL = (countyId: string) =>
  `/requests/districts/${countyId}`;

export const NEIGHBORHOODS_URL = (districtId: string) =>
  `/requests/neighborhoods/${districtId}`;

export const STREETS_URL = (neighborhoodId: string) =>
  `/requests/streets/${neighborhoodId}`;

export const TAX_OFFICES_URL = "/requests/tax-offices";

export const GET_CITIES = async (props: FetchProps) => {
  const { endPoint, body } = props as any;
  return await axiosInterceptorInstance
    .get(endPoint, body)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

export const GET_COUNTIES = async (props: FetchProps) => {
  const { endPoint, body } = props as any;
  return await axiosInterceptorInstance
    .get(endPoint, body)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

export const GET_DISTRICTS = async (props: FetchProps) => {
  const { endPoint, body } = props as any;
  return await axiosInterceptorInstance
    .get(endPoint, body)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

export const GET_TAX_OFFICES = async (props: FetchProps) => {
  const { endPoint, body } = props as any;
  return await axiosInterceptorInstance
    .get(endPoint, body)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

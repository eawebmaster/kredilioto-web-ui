"use client";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Input } from "../ui/Input/Input";
import { IconCheck } from "@tabler/icons-react";
import { usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { AdvancedRadio, Password, Select, Text } from "rizzui";
import useFetch from "@/hooks/use-fetch";
import {
  CITIES_URL,
  GET_CITIES,
  GET_COUNTIES,
  COUNTIES_URL,
  DISTRICTS_URL,
  GET_DISTRICTS,
  TAX_OFFICES_URL,
  GET_TAX_OFFICES,
} from "@/api/region";
function CompanyRegisterForm() {
  const [value, setValue] = React.useState("");
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "tr",
      value,
      onChange: (data) => {
        setValue(data.inputValue);
      },
    });

  const [citiesQuery, { data: citiesData }] = useFetch<any>();
  const [countiesQuery, { data: countiesData }] = useFetch<any>();
  const [districtsQuery, { data: districtsData }] = useFetch<any>();
  const [taxOfficesQuery, { data: taxOfficesData }] = useFetch<any>();

  const [city_id, setCityId] = React.useState<any>("");

  const [district_id, setDistrictId] = React.useState<any>("");

  const [county_id, setCountyId] = React.useState<any>("");

  const [tax_office_id, setTaxOfficeId] = React.useState<any>("");

  const [tax_office_county_id, setTaxOfficeCountyId] = React.useState<any>("");

  useEffect(() => {
    //@ts-ignore
    citiesQuery(GET_CITIES, {
      endPoint: CITIES_URL,
    });
  }, []);

  useEffect(() => {
    if (tax_office_id) {
      console.log(tax_office_id);
    }
  }, [tax_office_id]);

  useEffect(() => {
    if (city_id) {
      console.log(city_id);
      //@ts-ignore
      countiesQuery(GET_COUNTIES, {
        endPoint: COUNTIES_URL(city_id.value),
      });
    }
  }, [city_id]);

  useEffect(() => {
    if (county_id) {
      console.log(county_id);
      //@ts-ignore
      districtsQuery(GET_DISTRICTS, {
        endPoint: DISTRICTS_URL(county_id.value),
      });
    }
  }, [county_id]);

  useEffect(() => {
    //@ts-ignore
    taxOfficesQuery(GET_TAX_OFFICES, {
      endPoint: TAX_OFFICES_URL,
    });
  }, []);

  const options = [
    {
      title: "Şirket Tipi",
      description: "Şahıs şirketi",
      value: "private",
    },
    {
      title: "Şirket Tipi",
      description: "Limited şirketi",
      value: "limited",
    },
  ];

  const [companyType, setCompanyType] = React.useState("private");

  return (
    <div>
      <div className="login-cover flex items-center justify-center ">
        <div className="flex flex-col gap-[40px]">
          <Link href="/" className="">
            <Image
              alt="logo"
              src="/mock-images/logo-white.png"
              width={400}
              height={200}
            />
          </Link>
          <div className="bg-white w-[50em] shadow-lg  rounded-md flex flex-col p-[50px]">
            <div className="max-w-6xl flex gap-5">
              <div className="w-3/6 space-y-2">
                <div className="w-full grid grid-cols-2 gap-5">
                  <Input label="Ad" placeholder="Ad" size="sm" />
                  <Input label="Soyad" placeholder="Soyad" size="sm" />
                </div>
                <div className="w-full">
                  <Input
                    label="E-posta"
                    placeholder="E-posta"
                    size="sm"
                    autoComplete="one-time-code"
                  />
                </div>
                <div className="w-full">
                  <Password
                    autoComplete="one-time-code"
                    label="Şifre"
                    size="sm"
                    placeholder="Şifre"
                  />
                </div>
                <div className="w-full">
                  <Input
                    onChange={handlePhoneValueChange}
                    value={inputValue}
                    label="Sabit Telefon"
                    ref={inputRef}
                    size="sm"
                  />
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  color="primary"
                  type="submit"
                  variant="solid"
                >
                  Kayıt Ol
                </Button>
              </div>
              <div className="w-3/6">
                <Select
                  label="İl"
                  size="sm"
                  value={city_id}
                  onChange={setCityId}
                  options={
                    citiesData?.data?.map((item: any) => ({
                      label: item.il_adi,
                      value: item.id,
                    })) || []
                  }
                />
                <div className="grid grid-cols-2 gap-5 mt-2">
                  <Select
                    label="İlçe"
                    size="sm"
                    value={county_id}
                    onChange={setCountyId}
                    options={
                      countiesData?.data?.map((item: any) => ({
                        label: item.ilce_adi,
                        value: item.id,
                      })) || []
                    }
                  />
                  <Select
                    label="Mahalle"
                    size="sm"
                    value={district_id}
                    onChange={setDistrictId}
                    options={
                      districtsData?.data?.map((item: any) => ({
                        label: item.semt_adi,
                        value: item.id,
                      })) || []
                    }
                  />
                </div>
                <div className="mt-2 w-full">
                  <RadioGroup
                    label="Şirket Tipi"
                    className="flex"
                    onChange={(e) => setCompanyType(e.target.value)}
                  >
                    <Radio value="private">Şahıs Şirketi</Radio>
                    <Radio value="limited">Limited Şirketi</Radio>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-2">
                  <Select
                    label="Vergi Dairesi İli"
                    size="sm"
                    value={tax_office_id}
                    onChange={setTaxOfficeId}
                    options={
                      //unique city names
                      taxOfficesData?.data
                        ? taxOfficesData?.data.map((item: any) => ({
                            label: item.city,
                            value: item.plate,
                          })) || []
                        : []
                    }
                  />
                  <Select
                    label="Vergi Dairesi"
                    size="sm"
                    options={
                      taxOfficesData?.data
                        ? taxOfficesData?.data
                            ?.find((v: any) => v.plate === tax_office_id?.value)
                            ?.counties?.map((item: any) => ({
                              label: item.office,
                              value: item.id,
                            })) || []
                        : []
                    }
                    value={tax_office_county_id}
                    onChange={setTaxOfficeCountyId}
                  />
                  <Input
                    label="Vergi Numarası"
                    placeholder="Vergi Numarası"
                    size="sm"
                  />
                  <Input
                    label="Tc Kimlik Numarası"
                    placeholder="Tc Kimlik Numarası"
                    size="sm"
                    disabled={companyType === "limited"}
                    className={companyType === "limited" ? "opacity-50" : ""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormError({ error }: { error: string | null }) {
  if (!error) return null;

  const errorMessages: { [key: string]: string } = {
    CredentialsSignin: "Invalid credentials",
    Default: "Default Error Message",
  };

  return (
    <p>
      <div
        className="my-[5px] gap-[2px] flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <BiErrorCircle size={20} color="white" />
        <div className="text-white">
          <span className="font-bold">Hata!</span> E-posta adresiniz veya
          şifreniz hatalı.
        </div>
      </div>
    </p>
  );
}

export default CompanyRegisterForm;

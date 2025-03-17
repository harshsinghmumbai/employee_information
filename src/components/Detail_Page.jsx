"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

const getTopic = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/register`, {
      cache: "no-store", // disable caching to get fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data; // assuming your API directly returns an array
  } catch (error) {
    console.error("Error loading data", error);
    return []; // fallback as empty array
  }
};

const Detail_Page = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopic();
      setTopics(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pt-16">
        <Table className={"border rounded-t-4xl w-[85%] m-auto "}>
          <TableHeader>
            <TableRow className={"bg-yellow-100 daek:bg-yellow-200"}>
              <TableHead className="w-[100px] text-center">Name</TableHead>
              <TableHead className={"text-center"}>Email</TableHead>
              <TableHead className={"text-center"}>Phone</TableHead>
              <TableHead className="text-center">Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((elm, id) => (
              <TableRow
                key={id}
                className={
                  "bg-yellow-50 dark:bg-yellow-200 dark:text-black space-y-3"
                }
              >
                <TableCell className="font-medium">{elm.Name}</TableCell>
                <TableCell>{elm.Email}</TableCell>
                <TableCell>{elm.Phone}</TableCell>
                <TableCell className="text-right">{elm.textarea}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Detail_Page;

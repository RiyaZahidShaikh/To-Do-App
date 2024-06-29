"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Fetch topics from API
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading topics", error);
    return { topics: [] }; // Return an empty array on error
  }
};

export default function TopicsList() {
  const [topics, setTopics] = useState([]); // Initialize as an empty array
  const [checkedState, setCheckedState] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();
        if (Array.isArray(data.topics)) {
          setTopics(data.topics);
        } else {
          setError("Invalid data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleCheckboxChange = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loading) return <p>Loading topics...</p>; // Display loading state
  if (error) return <p>Error loading topics: {error}</p>; // Display error state

  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((t) => (
        <Card key={t._id} className="hover:shadow-2xl hover:scale-105">
          <CardHeader>
            <div className="flex space-x-2">
              <Checkbox
                checked={checkedState[t._id] || false}
                onCheckedChange={() => handleCheckboxChange(t._id)}
              />
              <CardTitle
                className={
                  checkedState[t._id] ? "line-through text-gray-400" : ""
                }
              >
                {t.title}
              </CardTitle>
            </div>
            <CardDescription
              className={
                checkedState[t._id] ? "line-through text-gray-400" : ""
              }
            >
              {t.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <p>
              {!t.updatedAt
                ? new Date(t.createdAt).toLocaleDateString()
                : new Date(t.updatedAt).toLocaleDateString()}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

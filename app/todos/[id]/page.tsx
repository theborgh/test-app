import React from "react";

interface TodosProps {
  params: {
    id: string;
  };
}

export default async function TodosPage({ params: { id } }: TodosProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  // await new Promise((res) => setTimeout(res, 5000));

  return (
    <div>
      {data.id} {data.title} {data.completed ? "completed" : "not completed"}
    </div>
  );
}

const sleep = () =>
  new Promise((res) => {
    setTimeout(res, 5000);
  });

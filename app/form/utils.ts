"use server";

export async function handleTodo(data: FormData) {
  const info = data.get("info");

  // validate...

  await prisma
}
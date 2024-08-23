export async function generateStaticParams() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "force-cache", // SSG
    // cache: "no-store", // SSR
    // next: { revalidate: 60 }, // ISR
  }).then((res) => res.json());

  return users.map((user: any) => ({
    name: user.name.replace(/\s+/g, "-"),
  }));
}

export default function UsersStatic({ params }: any) {
  return (
    <div>
      <h2>User name: {params.name}</h2>
    </div>
  );
}

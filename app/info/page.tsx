import Link from "next/link";

export default function Info() {
  return (
    <div>
      <h1>Блок с информацией</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}

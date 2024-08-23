"use client";

interface Props {
  params: {
    arrId: string[];
  };
}

export default function Post({ params }: Props) {
  console.log(params.arrId[0]);
  return (
    <div>
      <h2>{JSON.stringify(params)}</h2>
    </div>
  );
}

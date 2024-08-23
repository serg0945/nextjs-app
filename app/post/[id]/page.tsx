interface Props {
  params: {
    id: string;
  };
}

export default function Post({ params }: Props) {
  return (
    <div>
      Posts
      <h2>Post {params.id}</h2>
    </div>
  );
}

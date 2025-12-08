interface Props {
  url: string;
  name: string;
}

export default function Avatar({ url, name }: Props) {
  return (
    <img
      src={url}
      alt={`${name}'s avatar`}
      className="h-16 w-16 rounded-full"
    />
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}

export default async function Location(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}

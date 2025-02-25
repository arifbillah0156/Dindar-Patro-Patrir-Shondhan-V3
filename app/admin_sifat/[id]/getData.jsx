export default async function GetBiodataWithId(id) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/AllBiodata/${id}.json`
  );

  if (result.ok) {
    return result.json();
  } else {
    return {
      userId: 1,
      id: 1,
      title: "Empty",
      body: "Empty",
    };
  }
}

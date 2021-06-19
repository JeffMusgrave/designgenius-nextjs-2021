export default async function imageImporter(path, imageList) {
  return await Promise.all([
    await Promise.all(imageList.map((e) => import(`../../${path}${e}.jpg`))),
    await Promise.all(
      imageList.map((e) => import(`../../${path}${e}_200.jpg`))
    ),
  ]);
}

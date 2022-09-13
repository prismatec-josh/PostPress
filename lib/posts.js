import clientPromise from "../lib/mongodb";

export async function getSortedPostsData() {
  try {
    const client = await clientPromise;
    const db = await client.db("postpress");
    const data = await db
      .collection("posts")
      .find({})
      .sort({ _id: -1 })
      .toArray();
    //MongoDB returns an object for the field "_id". Next.js throws an error when attempting to serialize it so we convert it to a string first.
    const parsedResults = data.map((post) => {
      const fixedPost = { ...post, _id: post._id.toString() };
      return fixedPost;
    });
    return parsedResults;
  } catch (e) {
    console.error(e);
  }
}

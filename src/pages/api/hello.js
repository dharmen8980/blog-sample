// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const credentials = process.env.MONGODB_URL;
  res.status(200).json({ credentials })
}

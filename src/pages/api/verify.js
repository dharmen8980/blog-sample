import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const adminEmail = process.env.ADMIN_EMAIL;
    if (email === adminEmail) {
      res.status(200).json({ authorized: true });
    } else {
      res.status(200).json({ authorized: false });
    }
  } else {
    res.status(400).json({ message: "Unsupported HTTP method" });
  }
});

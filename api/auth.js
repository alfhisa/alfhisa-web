export default function handler(req, res) {
  const { host } = req.headers;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const url = new URL(`${protocol}://${host}${req.url}`);

  const client_id = process.env.GITHUB_CLIENT_ID;
  const scope = "repo,user";
  
  // Create the authorization URL
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${scope}`;
  
  res.redirect(authUrl);
}

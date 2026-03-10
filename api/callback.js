export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      return res.status(400).send(`Error: ${data.error_description || data.error}`);
    }

    const content = `
      <script>
        const receiveMessage = (message) => {
          if (message.data === "authorizing:github") {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({
                token: data.access_token,
                provider: "github",
              })}',
              message.origin
            );
          }
        };
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    `;

    res.setHeader("Content-Type", "text/html");
    res.send(content);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
}

export default async function handler(req, res) {
  const returnTo = encodeURI(`${process.env.NEXTAUTH_URL}/api/customer/login`);
  res.redirect(
    `https://${process.env.REACT_APP_AUTH0_DOMAIN}/v2/logout?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&returnTo=${returnTo}`
  );
}

export default function handler(req, res) {
  res.setPreviewData({});
  const key = 'HAWKS';
  if (req.query.key !== key) {
    return res.status(401).json({ message: 'Key not authorized' });
  }
  res.writeHead(307, { location: '/' });
  return res.end();
}

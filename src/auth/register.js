export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Faqat POST so'rovi qo'llab-quvvatlanadi" });
  }

  try {
    const { username, email, password, avatar } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Barcha maydonlarni to'ldiring" });
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      avatar: avatar || "https://default-avatar.com/avatar.png",
      createdAt: new Date().toISOString(),
    };

    const jwt = "mock-jwt-token";

    return res.status(200).json({
      body: {
        user: newUser,
        jwt,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Serverda xatolik yuz berdi." });
  }
}

const {
  chatQAJson,
  findBestMatch,
  getRandomInt,
} = require(".././utils/common.utils");

const router = require("express").Router();

function ChatBot(req, res) {
  const {
    body: { search_string },
  } = req;

  if (!search_string) {
    return res.status(400).send({ message: "Invalid search_string" });
  }

  switch (true) {
    case search_string.includes("fact") || search_string.includes("facts"):
      return res
        .send({
          fact: chatQAJson.fact[getRandomInt(chatQAJson.fact.length - 1)],
        })
        .status(200);
    case search_string.includes("joke") || search_string.includes("jokes"):
      return res
        .send({
          joke: chatQAJson.joke[getRandomInt(chatQAJson.joke.length - 1)],
        })
        .status(200);
    default:
      const question = findBestMatch(
        Object.keys(chatQAJson).filter(
          (e) => e !== "joke" && e !== "jokes" && e !== "fact" && e !== "facts"
        ),
        search_string
      );

      if (question) {
        return res.status(200).send({
          question,
          answer: chatQAJson[question],
        });
      } else {
        return res.status(200).send({
          question: null,
          answer: null,
        });
      }
  }
}

router.post("/", async (req, res) => {
  try {
    ChatBot(req, res);
  } catch (error) {
    res.send({ error }).status(500);
  }
});

module.exports = router;

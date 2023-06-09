const express = require("express");
const router = express.Router();

const hello = [
  {
    helloId: 4,
    name: "hello 4",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
    category: "drink",
    price: 0.1,
  },
  {
    helloId: 3,
    name: "hellow 3",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
    category: "drink",
    price: 2.2,
  },
  {
    helloId: 2,
    name: "hellow 2",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
    category: "drink",
    price: 0.11,
  },
  {
    helloId: 1,
    name: "hellow 1",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
    category: "drink",
    price: 6.2,
  },
];
router.get("/hello", (req, res) => {
  res.status(200).json({ hello: hello });
});
router.get("/hello/:helloId", (req, res) => {
  const { helloId } = req.params;
  // let result = null;
  // for (const helloSel of hello) {
  //   if (Number(helloId) === helloSel.helloId) {
  //     result = helloSel;
  //   }
  // }
  const helloIdNum = Number(helloId);
  const [result] = hello.filter((i) => helloIdNum === i.helloId);

  res.status(200).json({ detail: result });
});
module.exports = router;

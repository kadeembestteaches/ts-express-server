import { Router } from "express";
const router = Router();
router.get("/", function (req, res) {
    res.json({
        users: [
            {
                firstName: "Jon",
                lastName: "Snow"
            }
        ]
    });
});
router.get("/:id", function (req, res) {
    res.json({
        user: {
            firstName: "Jon",
            lastName: "Snow"
        }
    });
});
export default router;

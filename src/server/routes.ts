import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json({ 
        location: "Birmingham",
        user: "atlc"
    });
});

export default router;
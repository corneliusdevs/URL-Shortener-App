import Router from "express";

import {
  redirectToOriginalUrl,
  deleteUrl,
  getHistory,
  generateShortUrl,
  exportGeneratedUrls,
} from "../controllers/url.controller.js";
import { validateUrl } from "../validators/urlValidator.js";

import { isApiAuthenticated } from "../middlewares/authMiddleware.js";
import { validationErrorHandler } from "../middlewares/ValidatorErrorHandler.js";

const router = Router();

// old route for backward compatibility
router.get("/url/:shortUrl", redirectToOriginalUrl);

//generate short url
router.post("/url", isApiAuthenticated, validateUrl, generateShortUrl);

//get list of shortened urls and number of visits
router.get("/history", isApiAuthenticated, getHistory);

//delete a short url and its associated information from database
router.delete("/delete/:shortUrlId", isApiAuthenticated, deleteUrl);

//export data on generated urls
router.get("/export", isApiAuthenticated, exportGeneratedUrls);

export default router;
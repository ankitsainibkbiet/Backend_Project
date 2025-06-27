import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "../util/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'XtubeImages',
    },
});

const upload = multer({ storage });

export default upload
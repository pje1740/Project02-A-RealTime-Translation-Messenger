import dotenv from 'dotenv';
import { Request, Response } from 'express';

import StatusCode from '../@types/statusCode';
import profileImageService from '../services/profileImage';

dotenv.config();

const getRandomProfileImageLink = async (req: Request, res: Response) => {
  try {
    const S3 = await profileImageService.initializeS3();
    const imageLinks = await profileImageService.getImageLinks(S3, 'pupago', 'profiles');
    const imageLink = profileImageService.pickRandomElement(imageLinks);
    res.status(StatusCode.OK).json({ imageLink });
  } catch (err) {
    res.status(StatusCode.SERVER_ERROR).json({ error: err });
  }
};

const profileImageController = {
  getRandomProfileImageLink,
};

export default profileImageController;

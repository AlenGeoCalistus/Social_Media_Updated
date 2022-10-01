import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';
import UserModel from '../models/userModel.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, unfollowUser)

//get following user
router.get("/friends/:userId", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      const friends = await Promise.all(
        user.following.map((friendId) => {
          return UserModel.findById(friendId);
        })
      );
      let friendList = [];
      friends.map((friend) => {
        const { _id, username, profilePicture,coverPicture } = friend;
        friendList.push({ _id, username, profilePicture,coverPicture });
      });
      res.status(200).json(friendList)
    } catch (err) {
      res.status(500).json(err);
    }
  });
export default router
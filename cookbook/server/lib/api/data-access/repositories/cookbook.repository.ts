import { Comment } from './user.repository';

const db = require('../models');

export {};

const {
  Cookbook,
  CookbookLike,
  User,
  Recipe,
  RecipeCookbook,
  RecipeLike,
  RecipeComment,
  CookbookComment,
} = db;

export type NewCookbook = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  recipesIds: number[];
};

export type UpdatedCookbook = {
  title: string;
  description: string;
  image: string;
  views: number;
  recipesIds?: number[];
  likeUserIds?: number[];
};

const findAll = async () => {
  const cookbooks = await Cookbook.findAll({
    include: [
      User,
      {
        model: CookbookLike,
      },
      {
        model: CookbookComment,
        include: User,
      },
      {
        model: RecipeCookbook,
        include: {
          model: Recipe,
          include: [
            User,
            {
              model: RecipeLike,
            },
            {
              model: RecipeComment,
              include: {
                model: User,
              }
            },
          ],
        },
      },
    ],
  });

  cookbooks.forEach((el: any) => {
    if (el.image_data) {
      const photo = el.image_data.toString('base64');
    el.image_data = `data:${el.image_type};base64, ${photo}`;
    }
    
  })

  return cookbooks;
};

const findById = async (id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
    include: [
      User,
      {
        model: RecipeCookbook,
        include: {
          model: Recipe,
          include: [
            User,
            {
              model: RecipeLike,
            },
            {
              model: RecipeComment,
              include: {
                model: User
              }
            },
          ],
        },
      },
      {
        model: CookbookComment,
        include: User,
      },
      {
        model: CookbookLike,
      },
    ],
  });

  return cookbook;
};

const create = async (body: NewCookbook, userId: number) => {
  const { title, description, image, tags, recipesIds } = body;

  const cookbook = await Cookbook.create(
    {
      title,
      description,
      image,
      tags,
      UserId: userId,
    },
    {
      include: User,
    }
  );
  await cookbook.setRecipes(recipesIds);

  const cookbookId = cookbook.id;

  return cookbookId;
};

const deleteById = async (id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });
  return cookbook.destroy();
};

const update = async (body: UpdatedCookbook, id: number) => {
  const { title, description, image, views, recipesIds, likeUserIds } = body;

  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });

  const updatedCookbook = {
    title,
    description,
    image,
    views,
  };

  cookbook.setRecipes(recipesIds);
  //cookbook.setUsers(likeUserIds);

  return cookbook.update(updatedCookbook, {
    include: CookbookComment,
  });
};

const uploadImage = async (id: number, image: Express.Multer.File) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });

  const updatedCookbook = {
    image_type: image.mimetype,
    image_name: image.originalname,
    image_data: image.buffer,
  };

  return cookbook.update(updatedCookbook);
};

const like = async (userId: number, id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
    include: {
      model: CookbookComment,
      include: User,
    },
  });

  await cookbook.addUsers(userId);

  return cookbook;
};

const dislike = async (userId: number, id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
    include: {
      model: CookbookComment,
      include: User,
    },
  });

  await cookbook.removeUsers(userId);

  return cookbook;
};

const createComment = async (
  body: Comment,
  cookbookId: number,
  userId: number
) => {
  const { text, date } = body;
  const comment = await CookbookComment.create(
    {
      text,
      date,
      UserId: userId,
      CookbookId: cookbookId,
    },
    {
      include: [User, Cookbook],
    }
  );
  await comment.setUser(userId);
  await comment.setCookbook(cookbookId);

  return comment;
};

const cookbookRepository = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  uploadImage,
  createComment,
  like,
  dislike,
};

module.exports = {
  cookbookRepository,
};

import { register } from '../services/auth.js';

export const registerController = async (req, res) => {
  const { email } = req.body;
  const user = await findUser({ email });
  if (user) {
    throw createHttpError(409, 'Email in use!');
  }

  await register(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
  });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUser({ email });

  if (!user) {
    throw createHttpError(401, 'Email not found!');
  }
  const userData = await getUserSettings({ _id: user._id });
  const passwordCompare = await compareHash(password, user.password);
  if (!passwordCompare) {
    throw createHttpError(401, 'Password is invalid!');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully logged in a user!',
    data: {
      name: userData.name,
      email: userData.email,
    },
  });
};

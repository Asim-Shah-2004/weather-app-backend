import User from '../models/user.js'; // Capitalize 'user' to 'User' to match the imported model
import bcrypt from 'bcrypt';

const LoginHandler = async (req, res) => {
    const { username, password } = req.body;
    console.log('request came in')
    if (!username || !password) return res.status(400).send({ message: 'Username and password not found' });

    try {
        const user = await User.findOne({ username });

        if (!user) return res.status(404).send({ message: 'User not found' });

        const result = await bcrypt.compare(password, user.password);

        if (!result) return res.status(401).send({ message: 'Incorrect password' });

         res.status(200).send({ message: 'Login successful' });
         res.redirect('exp://192.168.21.245:8081/Current');
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).send({ message: 'Error during login' });
    }
};

export default LoginHandler;

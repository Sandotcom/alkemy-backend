import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async(req, res) => {
  const { email, password } = req.body

  try {
    const isUser = await User.findOne({ where: { email }})

    if(!isUser) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, isUser.password)

    if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' })
    
    const token = jwt.sign({ id: isUser.id }, process.env.JWT)

    res.status(200).json({ result: isUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
  }
}

export const register = async(req, res) => {
  const { name, email, password, confirmPassword } = req.body
  
  try {  
    const isUser = await User.findOne({ where: { email }})
    
    if(isUser) return res.status(400).json({ message: 'Email is already registered.'})
  
    if(password !== confirmPassword) return res.status(400).json({ message: "Passwords dont't match." });
  
    const hashedPassword = await bcrypt.hash(password, 10)
  
    const result = await User.create({ name, email, password: hashedPassword });
  
    const token = jwt.sign({ id: result.id }, process.env.JWT)
  
    res.status(200).json({ result, token })    
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.'})
  }
}
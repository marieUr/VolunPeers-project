import Express from "express";

const exApp = Express()

function signupAPI() {
exApp.post("/api/signup", async (req, res) => {
    // form or post fields
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10) // uses 10 salt rounds

        // insert the user into the "users" collection
        const usersCollection = db.collection('users')
        await usersCollection.insertOne({ email, password: hashedPassword });

        // return success response
        return res.status(201).json({ success: true, message: "User created successfully"})
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ success: false, message: "internal server error"})
    }
    
})
}
export default signupAPI
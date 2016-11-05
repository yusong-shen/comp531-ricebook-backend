const profile = {
    username: 'ys004',
    headline: 'This is my headline!',
    email: 'foo@bar.com',
    zipcode: 12345,
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
}

const headlines = {
    'ys004' : 'This is my headline!',
    'sep1' : 'hard-coded headline 002',
    'sep1test' : 'hard-coded headline 003'
}


// PUT /headline
const putHeadline = (req, res) => {
    const user = 'ys004'
    headlines[user] = req.body.headline || 'you did not supply it'
	res.send({ headlines : [{
		username : 'ys004',
		headline : headlines[user]
	}]})
}

// GET /headlines/ys004
const getHeadlines = (req, res) => {
    // for now we provide a default
    if (!req.user) req.user = 'ys004'

    const users = req.params.users ? req.params.users.split(',') : [req.user]

    // this returns only one headline, but we want to send
    // an array of all the requested user's headlines

    // Implement the logic to return headlines for all requested users
    // each user has a default value.  Only the "req.user" value ever changes.
    const result = users.map((x) => ({
        username : x,
        headline: headlines[x]
    }))
    res.send({ headlines: result })

}

// GET /email/:user?
const getEmail = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		email : 'hard-coded@foo.com'
	})	
}

// PUT /email
const putEmail = (req, res) => {
	res.send({
		username : 'ys004',
		email : req.body.email || 'you did not supply it'
	})
}

// GET /zipcode/:user? 
const getZipcode = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		zipcode : '77005'
	})	
}

// PUT /zipcode
const putZipcode = (req, res) => {
	res.send({
		username : 'ys004',
		zipcode : req.body.zipcode || 'you did not supply it'
	})
}

// GET /avatars/:user? 
const getAvatars = (req, res) => {
	console.log(req.params.user)
	res.send({
		username : 'ys004',
		avatar : 'hard-coded-avatar'
	})	
}
// PUT /avatar
const putAvatar = (req, res) => {
	res.send({
		username : 'ys004',
		avatar : req.body.avatar || 'you did not supply it'
	})
}

// GET /dob
const getDob = (req, res) => {
	res.send({
		username : 'loggedInUser',
		dob : new Date().getTime()	
	})		
}

module.exports = app => {
     app.get('/headlines/:users*?', getHeadlines)
     app.put('/headline', putHeadline)
     app.get('/email/:user?', getEmail)
     app.put('/email', putEmail)
     app.get('/zipcode/:user?', getZipcode)
     app.put('/zipcode', putZipcode)
     app.get('/avatars/:user?', getAvatars)
     app.put('/avatar', putAvatar)
     app.get('/dob', getDob)
 
}

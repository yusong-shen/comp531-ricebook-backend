/**
 * Created by yusong on 10/25/16.
 */
let following = { 
      username: 'loginUser',
      following: ['ys004', 'sep1', 'unknownUser', 'blabla']
    }

// TODO
const updateFollowing = (req, res) => {
     res.send('update following')
}


// TODO
const deleteFollowing = (req, res) => {
     console.log('Payload received', req.body)
     res.send('delete following')
}

// TODO
const getFollowing = (req, res) => {
    const id = req.params.id
    if (!id) {
        res.send(following)
    } else {
    	const result = {}
    	result.following = following.following.filter(x => (x.id == id))
        res.send(result)
    }
}


module.exports = (app) => {
  app.delete('/following/:id', deleteFollowing)
	app.put('/following/:id', updateFollowing)
	app.get('/following/:id*?', getFollowing)
}
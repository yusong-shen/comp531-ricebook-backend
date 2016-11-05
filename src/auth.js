const md5 = require('md5')

const sample = {
    "articles":[
        {
            "_id":4279388,
            "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.\r",
            "date":"2015-07-06T21:51:46.599Z",
            "img":"http://lorempixel.com/310/287/",
            "comments":[

            ],
            "author":"ral8"
        },
        {
            "_id":4610903,
            "text":"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.\r",
            "date":"2015-07-03T02:49:47.073Z",
            "img":null,
            "comments":[

            ],
            "author":"jmg3"
        },
        {
            "_id":2580991,
            "text":"Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.\r",
            "date":"2015-06-09T09:16:25.444Z",
            "img":null,
            "comments":[

            ],
            "author":"sep1"
        },
        {
            "_id":3131205,
            "text":"Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis.\r",
            "date":"2015-07-10T00:59:05.168Z",
            "img":null,
            "comments":[

            ],
            "author":"ral8"
        },
        {
            "_id":3881817,
            "text":"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r",
            "date":"2015-05-30T04:19:23.532Z",
            "img":null,
            "comments":[

            ],
            "author":"jmg3"
        },
        {
            "_id":3960973,
            "text":"In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna.\r",
            "date":"2015-05-18T19:24:04.318Z",
            "img":null,
            "comments":[

            ],
            "author":"sep1"
        },
        {
            "_id":3831596,
            "text":"In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem.\r",
            "date":"2015-05-30T17:00:33.747Z",
            "img":"http://lorempixel.com/351/339/",
            "comments":[

            ],
            "author":"ral8"
        },
        {
            "_id":3280585,
            "text":"Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce fermentum. Nullam cursus lacinia erat. Praesent blandit laoreet nibh.\r",
            "date":"2015-07-24T18:42:18.454Z",
            "img":"http://lorempixel.com/386/331/",
            "comments":[

            ],
            "author":"jmg3"
        },
        {
            "_id":5184247,
            "text":"Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.\r",
            "date":"2015-07-01T05:51:03.707Z",
            "img":null,
            "comments":[

            ],
            "author":"sep1"
        },
        {
            "_id":2585485,
            "text":"Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce vel dui. Sed in libero ut nibh placerat accumsan. Proin faucibus arcu quis ante. In consectetuer turpis ut velit. Nulla sit amet est. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Suspendisse feugiat. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.\r",
            "date":"2015-05-31T22:15:08.822Z",
            "img":"http://lorempixel.com/349/240/",
            "comments":[

            ],
            "author":"ral8"
        },
        {
            "_id":2970595,
            "text":"Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Suspendisse non nisl sit amet velit hendrerit rutrum. Ut leo. Ut a nisl id ante tempus hendrerit. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Suspendisse eu ligula. Nulla facilisi. Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus.\r",
            "date":"2015-04-29T18:25:00.594Z",
            "img":"http://lorempixel.com/300/338/",
            "comments":[

            ],
            "author":"jmg3"
        },
        {
            "_id":3149330,
            "text":"Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Proin magna. Duis vel nibh at velit scelerisque suscipit. Curabitur turpis. Vestibulum suscipit nulla quis orci. Fusce ac felis sit amet ligula pharetra condimentum. Maecenas egestas arcu quis ligula mattis placerat. Duis lobortis massa imperdiet quam. Suspendisse potenti.\r",
            "date":"2015-05-06T10:36:40.146Z",
            "img":"http://lorempixel.com/363/319/",
            "comments":[

            ],
            "author":"sep1"
        },
        {
            "_id":5011978,
            "text":"Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.\r",
            "date":"2015-06-21T22:09:11.593Z",
            "img":"http://lorempixel.com/351/232/",
            "comments":[

            ],
            "author":"ral8"
        },
        {
            "_id":4296240,
            "text":"Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio.\r",
            "date":"2015-05-11T17:13:22.558Z",
            "img":null,
            "comments":[

            ],
            "author":"jmg3"
        },
        {
            "_id":3659649,
            "text":"Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.",
            "date":"2015-05-10T16:17:14.648Z",
            "img":null,
            "comments":[

            ],
            "author":"sep1"
        }
    ]
}

const defaultUserObj = {
    username: 'defaultUser',
    email: 'foo@bar.com',
    zipcode: '77005',
    dob: new Date().getTime()
}

defaultUserObj.salt = 'some long long salt' + Math.random().toString()
defaultUserObj.hash = md5(defaultUserObj.salt + 'SomeLongPasswordCoolStuff')

const users = {
    users : [defaultUserObj]
}


const getUser = (username) => {
    const result = users.users.filter((user) => user.username === username)
    if (result.length === 0) {
        return
    } else {
        return result[0]
    }
}

const cookieKey = 'sid'
// key : sid, value : username
const sessionUser = {}

const generateCode = (userObj) => {
    const code = md5(JSON.stringify(userObj))
    return code
}

// POST /login
// {username: username, password: password }
// { username: :user, result: "success"}
// log in to server, sets session id and hash cookies
const login = (req, res) => {
    console.log(req.body)
    var username = req.body.username
    var password = req.body.password
    if (!username || !password) {
        res.status(400).send('does not provide username or password')
        return
    }
    var userObj = getUser(username)
    if (!userObj) {
        // unauthorized
        res.status(401).send('user does not exist')
        return
    }
    const hash = md5(userObj.salt + password)
    if (hash !== userObj.hash) {
        // unauthorized
        res.status(401).send('password does not match')
        return
    }

    // autherized, set cookie and send back message
    // Store the session id in an in-memory map from session to user
    const cookieValue = generateCode(userObj)
    sessionUser[cookieValue] = username
    res.cookie(cookieKey, cookieValue, { maxAge : 3600*1000, httpOnly : true})
    console.log('set cookies : ', req.cookies)
    const msg = {username : username, result : "success"}
    res.send(msg)
}

// POST /register
// request payload : { username, email, dob, zipcode, password}
// response payload : { result: 'success', username: username}
const register = (req, res) => {
    console.log(req.body)
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var dob = req.body.dob
    var zipcode = req.body.zipcode

    if (getUser(username)) {
        // 409 Conflict
        res.status(409).send(`${username} has already been registered.`)
        return
    }

    const userObj = { username, email, dob, zipcode}
    userObj.salt = 'some long long salt' + Math.random().toString()
    userObj.hash = md5(userObj.salt + password)
    users.users.push(userObj)

    const msg = {username : username, result : "success"}
    res.send(msg)
}

const isLoggedIn = (req, res, next) => {
    // read cookie
    console.log(req.cookies)
    console.log(sessionUser)
    const sid = req.cookies[cookieKey]

    if (!sid) {
        return res.status(401).send('sid undefined - user session does not exist')
    }

    const username = sessionUser[sid]
    if (username) {
        req.username = username
        next()
    } else {
        res.status(401).send('user session does not exist')
    }
}

// PUT /logout
// /logout	PUT	none	OK
// log out of server, clears session id
const logout = (req, res) => {
    const username = req.username
    console.log('log out as ', username)
    // clear session id and set empty cookie
    const sid = req.cookies[cookieKey]
    delete sessionUser[sid]
    res.clearCookie(cookieKey)
    res.send('OK')
}

// GET /sample		none
// [ { id: 1, author: Scott, ... }, { ... } ]	Array of sample posts.
const getSample = (req, res) => {
    res.send(sample.articles)
}

// PUT /password
const updatePassword = (req, res) => {
    const msg = { message : "will not change"}
    res.send(msg)
}

module.exports = app => {
    app.post('/login', login)
    app.post('/register', register)
    app.get('/sample', getSample)
    app.put('/logout', isLoggedIn, logout)
    app.put('/password', updatePassword)
}
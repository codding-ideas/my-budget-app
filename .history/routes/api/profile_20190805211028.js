// const express = require('express');
// const request = require('request');
// const config = require('config');
// const router = express.Router();
// const auth = require('../../middleware/auth');
// const { check, validationResult } = require('express-validator');

// const Profile = require('../../models/Profile');
// const User = require('../models/Users');
// const Post = require('../models/Post');

// //GET MY PROFILE

//NOTE: If you check inside the Profile model, it has an embeded field,
//call user. This means a user can create many post,
//and before a user can be found unless it has been authenticated
//After authentication then the user is now available in the profile
//So first we will check if there is a user in our profile model,
//If yes then we will add /populate the user's name and avatar to the,
//profile fields as below 

// // @route    GET api/profile/me
// // @desc     Get current users profile
// // @access   Private
// router.get('/me', auth, async (req, res) => {
//   try {
//     //If there is a user in our profile model then we can access it,
//     //id as request.user.id.
//     //Remember, req.user.id ws gotton from the decoded token 
//     const profile = await Profile.findOne({ user: req.user.id }).populate(
//       'user',
//       ['name', 'avatar']
//     );

//     if (!profile) {
//       return res.status(400).json({ msg: 'There is no profile for this user' });
//     }else {
//       res.json(profile);
//     }

      
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


// // @route    POST api/profile
// // @desc     Create or update user profile
// // @access   Private



// router.post( '/',[  auth, [check('status', 'Status is required') .not().isEmpt(),check('skills', 'Skills is required').not() .isEmpty()]], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }



// // CREATE AND UPDATE A PROFILE

// //NOTE: When are passing more than two middleware to a route we use [] and we place all of them inside

// // @route    POST api/profile
// // @desc     Create or update user profile
// // @access   Private
// router.post( '/',[  auth, [check('status', 'Status is required') .not().isEmpty(),
//       check('skills', 'Skills is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//       //Destructuring what is coming from the request body to make the post request



//     const {
//       company,
//       website,
//       location,
//       bio,
//       status,
//       githubusername,
//       skills,
//       youtube,
//       facebook,
//       twitter,
//       instagram,
//       linkedin
//     } = req.body;

//     // Build profile object
//     const profileFields = {};
//     profileFields.user = req.user.id;
//     if (company) profileFields.company = company;
//     if (website) profileFields.website = website;
//     if (location) profileFields.location = location;
//     if (bio) profileFields.bio = bio;
//     if (status) profileFields.status = status;
//     if (githubusername) profileFields.githubusername = githubusername;
//     if (skills) {
//       profileFields.skills = skills.split(',').map(skill => skill.trim());
//     }

//     // Build social object
//     profileFields.social = {};
//     if (youtube) profileFields.social.youtube = youtube;
//     if (twitter) profileFields.social.twitter = twitter;
//     if (facebook) profileFields.social.facebook = facebook;
//     if (linkedin) profileFields.social.linkedin = linkedin;
//     if (instagram) profileFields.social.instagram = instagram;

//     try {
//       let profile = await Profile.findOne({ user: req.user.id });

//       if (profile) {
//         // Update
//         profile = await Profile.findOneAndUpdate(
//           { user: req.user.id },
//           { $set: profileFields },
//           { new: true }
//         );

//         return res.json(profile);
//       }

//       // Create
//       profile = new Profile(profileFields);

//       await profile.save();
//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// // @route    GET api/profile
// // @desc     Get all profiles
// // @access   Public
// router.get('/', async (req, res) => {
//   try {
//     const profiles = await Profile.find().populate('user', ['name', 'avatar']);
//     res.json(profiles);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    GET api/profile/user/:user_id
// // @desc     Get profile by user ID
// // @access   Public
// router.get('/user/:user_id', async (req, res) => {
//   try {
//     const profile = await Profile.findOne({
//       user: req.params.user_id
//     }).populate('user', ['name', 'avatar']);

//     if (!profile) return res.status(400).json({ msg: 'Profile not found' });

//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind == 'ObjectId') {
//       return res.status(400).json({ msg: 'Profile not found' });
//     }
//     res.status(500).send('Server Error');
//   }
// });

// // @route    DELETE api/profile
// // @desc     Delete profile, user & posts
// // @access   Private
// router.delete('/', auth, async (req, res) => {
//   try {
//     // Remove user posts
//     await Post.deleteMany({ user: req.user.id });
//     // Remove profile
//     await Profile.findOneAndRemove({ user: req.user.id });
//     // Remove user
//     await User.findOneAndRemove({ _id: req.user.id });

//     res.json({ msg: 'User deleted' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    PUT api/profile/experience
// // @desc     Add profile experience
// // @access   Private
// router.put(
//   '/experience',
//   [
//     auth,
//     [
//       check('title', 'Title is required')
//         .not()
//         .isEmpty(),
//       check('company', 'Company is required')
//         .not()
//         .isEmpty(),
//       check('from', 'From date is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const {
//       title,
//       company,
//       location,
//       from,
//       to,
//       current,
//       description
//     } = req.body;

//     const newExp = {
//       title,
//       company,
//       location,
//       from,
//       to,
//       current,
//       description
//     };

//     try {
//       const profile = await Profile.findOne({ user: req.user.id });

//       profile.experience.unshift(newExp);

//       await profile.save();

//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// // @route    DELETE api/profile/experience/:exp_id
// // @desc     Delete experience from profile
// // @access   Private
// router.delete('/experience/:exp_id', auth, async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ user: req.user.id });

//     // Get remove index
//     const removeIndex = profile.experience
//       .map(item => item.id)
//       .indexOf(req.params.exp_id);

//     profile.experience.splice(removeIndex, 1);

//     await profile.save();

//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    PUT api/profile/education
// // @desc     Add profile education
// // @access   Private
// router.put(
//   '/education',
//   [
//     auth,
//     [
//       check('school', 'School is required')
//         .not()
//         .isEmpty(),
//       check('degree', 'Degree is required')
//         .not()
//         .isEmpty(),
//       check('fieldofstudy', 'Field of study is required')
//         .not()
//         .isEmpty(),
//       check('from', 'From date is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const {
//       school,
//       degree,
//       fieldofstudy,
//       from,
//       to,
//       current,
//       description
//     } = req.body;

//     const newEdu = {
//       school,
//       degree,
//       fieldofstudy,
//       from,
//       to,
//       current,
//       description
//     };

//     try {
//       const profile = await Profile.findOne({ user: req.user.id });

//       profile.education.unshift(newEdu);

//       await profile.save();

//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// // @route    DELETE api/profile/education/:edu_id
// // @desc     Delete education from profile
// // @access   Private
// router.delete('/education/:edu_id', auth, async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ user: req.user.id });

//     // Get remove index
//     const removeIndex = profile.education
//       .map(item => item.id)
//       .indexOf(req.params.edu_id);

//     profile.education.splice(removeIndex, 1);

//     await profile.save();

//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    GET api/profile/github/:username
// // @desc     Get user repos from Github
// // @access   Public
// router.get('/github/:username', (req, res) => {
//   try {
//     const options = {
//       uri: `https://api.github.com/users/${
//         req.params.username
//       }/repos?per_page=5&sort=created:asc&client_id=${config.get(
//         'githubClientId'
//       )}&client_secret=${config.get('githubSecret')}`,
//       method: 'GET',
//       headers: { 'user-agent': 'node.js' }
//     };

//     request(options, (error, response, body) => {
//       if (error) console.error(error);

//       if (response.statusCode !== 200) {
//         return res.status(404).json({ msg: 'No Github profile found' });
//       }

//       res.json(JSON.parse(body));
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;


const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/');


// //GET MY PROFILE

//NOTE: If you check inside the Profile model, it has an embeded field,
//call user. This means a user can create many post,
//and before a user can be found unless it has been authenticated
//After authentication then the user is now available in the profile
//So first we will check if there is a user in our profile model,
//If yes then we will add /populate the user's name and avatar to the,
//profile fields as below 

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    //Since we have a user embeded into profile model,
    //And remember that user id is what we use to sign for token,
    // and when decoded using middleware we get the user as req.user and,
    //when we want the id is req.user.id
    //Remember, when creating a profile, you need a token and that token,
    //is use to create a profile

    const profile = await Profile.findOne({ user: req.user.id }).populate('user',
    ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



//CREATE AND UPDATE A PROFILE


// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private


// //NOTE: When are passing more than two middleware to a route we use [] and we place all of them inside

router.post( '/', [ auth, [
  //This means status and skills field are mandatory
      check('status', 'Status is required') .not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty() ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

      //Destructuring what is coming from the request body to make the post request
    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;


    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      //If there is a user with the id from the token the he can update,
      //his profile

      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//GET ALL PROFILES

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    //Fecth all profiles and attach it user to it
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// GET A PROFILE BY USER ID

//NOTE: We can achieve the same using a token but this time around,
//We are going to put the id of the user in the url,
//to search for that profile, so to be able to get that id into url,
//that will match what is in our db we use req.params.user_id. Anything after params must be the same as the one in the url '/user/:user_id'

//So when  we find that profile we can associate that user to the profile,
//by using populate


// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});


module.exports = router;

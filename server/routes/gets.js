const express = require('express');
const router = express.Router();
const Get = require('../models/Get');

// Get back all the found recipes
// async/await and try/catch
router.get('/', async (req, res) => {
    /* API : ID and KEY */
    const APP_ID = "f3869906";
    const APP_KEY = "c12e4061363b9340cdce2157fe08609c";
    const response = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    /*     try {
            const recipes = await Get.find();
            res.json(recipes);
        } catch (err) {
            res.json({ message: err });
        } */
});

module.exports = router;



/* API Request */


/*     setRecipes(data.hits);
    console.log(data);
    props.history.push("/recipes");
    setSearch("");
  }; */
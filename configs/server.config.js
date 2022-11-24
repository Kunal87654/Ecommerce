if(process.env.NODE_ENV != 'production') {
    require('dotenv').config() //this line will not get exicuted in the prod env
}


module.exports = {
    PORT: process.env.PORT
}

//dotenv basically load your .env file


module.exports = (sequelize, Sequelize) => {

    let Category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    },{
        tablename: "categories"
    })

    return Category;
}
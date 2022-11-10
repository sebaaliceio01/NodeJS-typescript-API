import sequelize from "../database/database.config";

const User = sequelize.define('User', {
    firstName: {
        type: "text",
    },
    lastName: {
        type: "text"
    }
}, {
    modelName: "User",
    timestamps: true,
});

User.init({
    firstName: {
        type: "text",
    },
    lastName: {
        type: "text"
    }
}, { sequelize, modelName: "User", timestamps: true });


export const syncUser = async () => {
    User.sync()
}

export default User
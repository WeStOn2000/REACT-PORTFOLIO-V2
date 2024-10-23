const fs = require('fs');
const path = require('path');
const { User, Comment } = require('../models'); // Import User and Comment models

const seedDatabase = async () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'); // Ensure encoding is set
    const { Users, Comments } = JSON.parse(data); // Destructure Users and Comments from parsed data

    // Log the data to check the structure
    console.log('User data:', Users);
    console.log('Comment data:', Comments);

    // Ensure the data is an array and has elements before calling bulkCreate
    if (Array.isArray(Users) && Users.length > 0) {
      await User.bulkCreate(Users);
      console.log('Users seeded successfully!');
    } else {
      console.log('No users to seed.');
    }

    if (Array.isArray(Comments) && Comments.length > 0) {
      await Comment.bulkCreate(Comments);
      console.log('Comments seeded successfully!');
    } else {
      console.log('No comments to seed.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;

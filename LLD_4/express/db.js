const mongoose = require("mongoose");

// / IMP- for checking updates in mongoDB based on code every time we need to stop server
// and start again
const DBurl =
  "mongodb+srv://yanamadalaharitha:Rkj7SqWUHsviTSAl@cluster0.txw5f3o.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DBurl)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("Connection unsuccessful");
  });

//How to add  documents(data) to the collection in database

//CourseSchema

const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  isPublished: Boolean,
  publishedDate: { type: Date, default: Date.now },
  Ratings: Number,
});

//Model

const CourseModel = mongoose.model("Course", courseSchema);

// create a Document (Course entry)

async function createCourse() {
  const course = new CourseModel({
    name: "JavaScript",
    creator: "Mark",
    isPublished: true,
    Ratings: 4.7,
  });
  await course.save();
}

// createCourse();

// AFTER CREATING course just comment the createCourse method
// otherwise it will give error course.insertOne

//update course

async function updateCourse(id) {
  let course = await CourseModel.findById(id);

  if (!course) return;

  course.name = "DBMS";
  course.creator = "Jhon";

  await course.save();
}

// updateCourse("65cf1b805ceeacd50585432e");

async function deleteEntry(id) {
  let deletedCourse = await CourseModel.findByIdAndDelete(id);

  console.log(deletedCourse);
}

deleteEntry("65cf1b805ceeacd50585432e");

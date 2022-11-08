// // Application to check candidate

const genderArray = ["Male", "Female"];
const facultyArray = [
  "Faculty of agriculture and forestry",
  "Faculty of Arts",
  "College of Midicine",
  "Faculty of Education",
  "Faculty of pharmacy",
  "Faculty of Engineering",
  "Faculty of Environmental Sciences",
  "Faculty of Law",
  "Faculty of Management Sciences",
  "Faculty of Natural Sciences",
  "Faculty of Pharmaceutical Sciences",
  "Faculty of Social Sciences",
  "Faculty of Sociology",
  "Faculty of Veterinary Medicine",
];
const olevelSubjectArray = [
  "Biology",
  "Chemistry",
  "Physic",
  "Economics",
  "Accounting",
  "Commerce",
  "Literature in Englisg",
  "Government",
];
const stateOfOriginArray = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
const subjectArray = [
  "Commerce",
  "Financial Accounting",
  "Economics",
  "Geography",
  "Government",
  "Civil Education",
  "Biology",
  "Agricultural Science",
  "Physics",
  "Chemistry",
];
const gradeArray = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];

let checker = {
  ErrorMessage: "",
  personalInfo: {
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    Gender: 0,
    Email: "",
    MobileNumber: "",
    StaeOfOriginId: "",

    IsValid: function () {
      this.FirstName = document.getElementById("fname").value;
      this.LastName = document.getElementById("lname").value;
      this.DateOfBirth = document.getElementById("birth").value;
      this.Email = document.getElementById("email").value;
      this.MobileNumber = document.getElementById("phoneNo").value;
      this.Gender = document.getElementById("gender").value;
      this.StaeOfOrigin = document.getElementById("state").value;

      if (this.FirstName === "" || this.FirstName.length < 2) {
        checker.ErrorMessage = "Kindly input your first name.";
        return false;
      }

      if (this.LastName === "" || this.LastName.length < 2) {
        checker.ErrorMessage = "Kindly input your last name.";
        return false;
      }

      if (this.Email === "" || this.Email.length < 3 ||!this.Email.includes("@")
      ) {
        checker.ErrorMessage = "Kindly input your valid email";
        return false;
      }

      if (this.MobileNumber === "" || this.MobileNumber.length != 11) {
        checker.ErrorMessage = "Kindly input your valid mobile number";
        return false;
      }

      if (this.DateOfBirth === "" || this.DateOfBirth.length != 10 || Number(this.DateOfBirth < 16) ) {
        checker.ErrorMessage = "Kindly input your date of birth";
        return false;
      }

      if (this.Gender === "0") {
        checker.ErrorMessage = "Kindly select your gender";
        return false;
      }

      if (this.StaeOfOrigin === "0") {
        checker.ErrorMessage = "Kindly select your state";
        return false;
      }
      return true;
    },
  },

  preVasity: {
    FacultyId: 0,
    CourseId: "",
    UTMEScore: 0,
    PUTMEScore: 0,

    IsValid: function () {
      this.FacultyId = document.getElementById("faculty").value;
      this.CourseId = document.getElementById("course").value;

      this.UTMEScore = document.getElementById("utme").value;
     this.PUTMEScore = document.getElementById("putme").value;

     if (this.FacultyId === 0) {
        checker.ErrorMessage =
          "Dear candidate, kindly input your faculty";
        return false;
     };

     if (this.CourseId === "" || this.CourseId.length < 3) {
      checker.ErrorMessage =
        "Dear candidate, kindly input your course of study";
      return false;
     }

       if (!this.UTMEScore || isNaN(Number(this.UTMEScore))) {
         checker.ErrorMessage =
           "Dear candidate, kindly input your valid utme score";
         return false;
       }
         if (Number(this.UTMEScore) < 0 || Number(this.UTMEScore) > 400) {
           checker.ErrorMessage =
             "Dear candidate, kindly input your correct utme score";
           return false;
         };

      // if (Number(jambScore) < 180) {
      //   checker.ErrorMessage =
      //     "Dear candidate, you are not eligible to complete this admission process";
      //   return false;
      // }

      if (!this.PUTMEScore || isNaN(Number( this.PUTMEScore))) {
        checker.ErrorMessage =
          "Dear candidate, kindly input your valid putme score";
        return false;
      };

      // if (Number(postJamb) < 0 || Number(postJamb) > 20) {
      //   checker.ErrorMessage =
      //     "Dear candidate, kindly input your correct putme score";
      //   return false;
      // };

      // if (Number(this.PUTMEScore) < 12) {
      //   checker.ErrorMessage =
      //     "Dear candidate, you are not qualified for the next stage";
      //   return false;
      // };
      return true;
    }
  },

  olevelDetails: {
    sitting: "",
    english: "0",
    maths: "0",
    subject1Id: "",
    subject1Score: "0",
    subject2Id: "",
    subject2Score: "0",
    subject3Id: "",
    subject3Score: "0",

    IsValid: function () {
      this.sitting = document.getElementById("sitting").value;
      this.english = document.getElementById("english").value;
      this.maths = document.getElementById("maths").value;
      this.subject1Score = document.getElementById("sub1").value;
      this.subject1Id = document.getElementById("grad1").value;
      this.subject2Score = document.getElementById("sub2").value;
      this.subject2Id = document.getElementById("grad2").value;
      this.subject3Score = document.getElementById("sub3").value;
      this.subject3Id = document.getElementById("grad3").value;
      this.olevelResult =
        this.maths + this.english + this.subject1Score +this.subject2Score +this.subject3Score;

      if (this.sitting <= 0 || this.sitting > 2) {
        checker.Errormessage = "Kindly confirm that your number sitting is one";
        return false;
      }

      if (Number(this.english) === -1) {
        checker.ErrorMessage = "Kindly input your English grade";
        return false;
      }

      if (Number(this.maths) === -1) {
        checker.ErrorMessage = "Kindly input your Mathematics grade";
        return false;
      }

      if (Number(this.subject1Score) === -1 || this.subject1Id === "") {
        checker.ErrorMessage = "Kindly input your Mathematics grade";
        return false;
      }

      if (Number(this.subject2Score) === -1 || this.subject2Id === "") {
        checker.ErrorMessage = "Kindly input your Mathematics grade";
        return false;
      }

      if (Number(this.subject3Score) === -1 || this.subject3Id === "") {
        checker.ErrorMessage = "Kindly input your Mathematics grade";
        return false;
      }
    },
  },

  evaluation: {
    totalUtme: 0,
    totalPutme: 0,
    totalOlevel: 0,
    sumTotal: 0,

    IsValid: function () {
      this.totalUtme = Math.round(checker.preVasity.UTMEScore / 8);
      this.totalPutme = Number(checker.preVasity.PUTMEScore);
      this.totalOlevel = Math.round(
        (checker.olevelDetails.olevelResult / 50) * 30
      );
      this.sumTotal =
        Number(this.totalUtme) +
        Number(this.totalPutme) +
        Number(this.totalOlevel);

      if (olevelDetails.olevelResult <= 24) {
        checker.ErrorMessage = "Dear candidate, you are not qualified";
        return false;
      }

      if (this.sumTotal >= 80 && this.sumTotal <= 100) {
        checker.ErrorMessage = "Hurray!! You are qualified on Merit list";
        return false;
      }

      if (this.sumTotal >= 75 && this.sumTotal < 80) {
        checker.ErrorMessage =
          "Hurray!! You are qualified on Concessionary list";
        return false;
      }

      if (this.sumTotal >= 65 && this.sumTotal < 75) {
        checker.ErrorMessage =
          "Hurray!! You are qualified based on Catchment list";
        return false;
      }

      if (this.sumTotal >= 60 && this.sumTotal < 65) {
        checker.ErrorMessage = "Hurray!! You are qualified on VC'S list";
        return false;
      }
      return true;
    },
  },
};
let stageId = 0;
// function submit() {
//   if (stageId === 0) {
//     if (!checker.personalInfo.IsValid()) {
//       document.getElementById("error_message").innerHTML = checker.ErrorMessage;
//       document.getElementById("con1").style.display = "block";
//     } else {
//       document.getElementById("error_message").style.display = "none";
//       document.getElementById("first-container").classList.add("hide");
//       document.getElementById("second-container").classList.remove("hide");
//       stageId++;
//     }
//   } else if (stageId === 1) {
//     if (!checker.preVasity.IsValid()) {
//       document.getElementById("error_message").style.display = "block";
//       document.getElementById("error_message").innerHTML = checker.ErrorMessage;
//     } else {
//       document.getElementById("error_message").style.display = "none";
//       document.getElementById("second-container").classList.add("hide");
//       document.getElementById("third-container").classList.remove("hide");
//       stageId++;
//     }

//     if (stageId === 2) {
//       if (!checker.olevelDetails.IsValid()) {
//         document.getElementById("error_message").style.display = "block";
//         document.getElementById("error_message").innerHTML =
//           checker.ErrorMessage;
//       } else {
//         document.getElementById("error_message").style.display = "none";
//         document.getElementById("second-container").classList.add("hide");
//         document.getElementById("third-container").classList.remove("hide");
//         stageId++;
//       }
//     }

//     if (stageId === 3) {
//       if (!checker.evaluation.IsValid()) {
//         document.getElementById("error_message").style.display = "block";
//         document.getElementById("error_message").innerHTML =
//           checker.ErrorMessage;
//       } else {
//         document.getElementById("error_message").style.display = "none";
//         document.getElementById("third-container").classList.add("hide");
//         document.getElementById("submit").classList.remove("hide");
//         // stageId++;
//       }
//     }
//     console.log('submit');
//   }
// }

window.addEventListener("load", function () {
  //Gender options
  let dropdown = document.getElementById("gender");
  dropdown.innerHTML = "<option value = 0>--Please Select --</option";
  genderArray.forEach((items, index) => {
    dropdown.innerHTML += `<option value = ${index + 1}>${items}</option>`;
  });

  // Faculty options
  dropdown = document.getElementById("faculty");
  dropdown.innerHTML = "<option value = 0>--Please Select --</option";
  facultyArray.forEach((faculty, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${faculty}</option>`;
  });

  // State of Origin
  dropdown = document.getElementById("state");
  dropdown.innerHTML = "<option value = 0>--Please Select --</option";
  stateOfOriginArray.forEach((state, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${state}</option>`;
  });

  // English dropdown
  dropdown = document.getElementById("english");
  dropdown.innerHTML = "<option value = 0></option";
  gradeArray.forEach((english, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${english}</option>`;
  });

  // Maths dropdown
  dropdown = document.getElementById("maths");
  dropdown.innerHTML = "<option value = 0></option";
  gradeArray.forEach((items, index) => {
    dropdown.innerHTML += `<option value=${11 - (index + 1)}>${items}</option>`;
  });

  // Subject 1 dropdown
  dropdown = document.getElementById("sub1");
  dropdown.innerHTML = "<option value = 0></option";
  subjectArray.forEach((sub1, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${sub1}</option>`;
  });

  // Grade1 dropdown
  dropdown = document.getElementById("grad1");
  dropdown.innerHTML = "<option value = 0>--Select grade --</option";
  gradeArray.forEach((grad1, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${grad1}</option>`;
  });

  // Subject2 dropdown
  dropdown = document.getElementById("sub2");
  dropdown.innerHTML = "<option value = 0></option";
  olevelSubjectArray.forEach((sub2, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${sub2}</option>`;
  });

  // Grade 2 dropdown
  dropdown = document.getElementById("grad2");
  dropdown.innerHTML = "<option value = 0>--Select grade --</option";
  gradeArray.forEach((grad2, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${grad2}</option>`;
  });

  // Subject 3 dropdown
  dropdown = document.getElementById("sub3");
  dropdown.innerHTML = "<option value = 0></option";
  olevelSubjectArray.forEach((sub3, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${sub3}</option>`;
  });

  // Grade 3 dropdown
  dropdown = document.getElementById("grad3");
  dropdown.innerHTML = "<option value = 0>--Select grade --</option";
  gradeArray.forEach((grad3, index) => {
    dropdown.innerHTML += `<option value=${index + 1}>${grad3}</option>`;
  });
});


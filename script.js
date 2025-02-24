document
  .getElementById("selectFileInput")
  .addEventListener("change", (event) => {
    let file = event.target.files[0]; // selects the first file that tha user selected
    const myButton = document.getElementById("selectFileBtn");
    if (file) {
      myButton.textContent = file.name;
      // checks if any file is selected or not
      let reader = new FileReader();
      reader.onload = function (e) {
        let img = document.querySelector(".user-image-preview");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document.querySelectorAll("input, textarea").forEach((element) => {
  element.addEventListener("input", updateResume);
});

function updateResume() {
  document.querySelector(".user-fullname-preview").textContent =
    document.getElementById("fullName").value;
  document.querySelector(".user-profession-preview").textContent =
    document.getElementById("professionTitle").value;
  document.getElementById("userPhonePreview").textContent =
    document.getElementById("userPhone").value;
  document.getElementById("userEmailPreview").textContent =
    document.getElementById("userEmail").value;
  document.getElementById("userWebPreview").textContent =
    document.getElementById("userWebsite").value;
  document.getElementById("userLocationPreview").textContent =
    document.getElementById("userLocation").value;

  // Profile

  document.querySelector(".profile .description").textContent =
    document.querySelector("#profile").value;

  // Education Section
  const educationCards = document.querySelector(".education-cards-preview");
  educationCards.innerHTML = "";

  document.querySelectorAll(".education-entry").forEach((entry) => {
    const dates = entry.querySelector("#educationDate").value;
    const degree = entry.querySelector("#educationDegree").value;
    const university = entry.querySelector("#educationUniversityName").value;

    if (dates || degree || university) {
      educationCards.innerHTML += `
      <div class="education-card-preview">
        <p class="education-year-preview">${dates}</p>
        <h1 class="education-title-preview">${degree}</h1>
        <p class="university-name-preview">${university}</p>
      </div>
    `;
    }
  });

  // Languages Section
  const languageCards = document.querySelector(".language-cards-preview");
  languageCards.innerHTML = "";

  document.querySelectorAll(".language-entry").forEach((entry) => {
    const language = entry.querySelector("#languageName").value;
    const percentage = entry.querySelector("#languagePercentage").value;

    if (language || percentage) {
      languageCards.innerHTML += `
        <div class="language-card-preview">
          <h1 class="language-title-preview">${language}</h1>
          <div class="language-progressbar-preview">
            <div class="bar" style="width: ${percentage}%;"></div> 
          </div>
        </div>
      `;
    }
  });

  // experience section
  const experienceCards = document.querySelector(".experience-cards");
  experienceCards.innerHTML = "";

  document.querySelectorAll(".experience-entry").forEach((entry) => {
    const job = entry.querySelector("#jobTitle").value;
    const company = entry.querySelector("#company").value;
    const dates = entry.querySelector("#jobDates").value;
    const description = entry.querySelector("#jobDescription").value;

    if (job || company || dates || description) {
      experienceCards.innerHTML += `
        <div class="experience-card">
                <div class="experience-duration">
                  <p class="experience-date">${dates}</p>
                  <p class="experience-company">${company}</p>
                </div>
                <div class="experience-description">
                  <h1 class="experience-title">${job}</h1>
                  <p class="experience-para">
                    ${description}
                  </p>
                </div>
              </div>
      `;
    }
  });

  // skill section
  const skillsCards = document.querySelector(".pro-skills-cards");
  skillsCards.innerHTML = "";

  document.querySelectorAll(".skills-entry").forEach((entry) => {
    const skill = entry.querySelector("#skillName").value;
    const percentage = entry.querySelector("#skillPercentage").value;

    if (skill || percentage) {
      skillsCards.innerHTML += `
         <div class="pro-skills-card">
                <p class="pro-skills-card-title">${skill}</p>
                <div class="pro-skills-progressbar">
                  <div class="bar" style="width: ${percentage}%"></div>
                </div>
              </div>
      `;
    }
  });
  // add interests
  const interests = document
    .getElementById("interests")
    .value.split(",")
    .map((interest) => interest.trim()) // ✅ Fix: Now returns the trimmed value
    .filter((interest) => interest !== ""); // ✅ Fix: Removes empty interests

  const interestsContainer = document.querySelector(".interest-cards");
  interestsContainer.innerHTML = "";

  interests.forEach((interest) => {
    if (interest) {
      interestsContainer.innerHTML += `<div class="interest-card">${interest}</div>`;
    }
  });
}

function addInputListeners(element) {
  element.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", updateResume);
  });
}

document.getElementById("addEducation").addEventListener("click", addEducation);

function addEducation() {
  const educationEntries = document.querySelector(".education-entries");
  const newEntry = document.createElement("div");
  newEntry.className = "education-entry";
  newEntry.innerHTML = `
             <div class="form-group">
                <label for="educationDate">Date:</label>
                <input type="text" id="educationDate" />
              </div>
              <div class="form-group">
                <label for="educationDegree">Degree:</label>
                <input type="text" id="educationDegree" />
              </div>
              <div class="form-group">
                <label for="educationUniversityName">University Name:</label>
                <input type="text" id="educationUniversityName" />
              </div>
              <button class="removeBtn" onclick="this.parentElement.remove(); updateResume()">Remove</button>
    `;
  educationEntries.appendChild(newEntry);
  addInputListeners(newEntry);
}

function addLanguage() {
  const languageEntries = document.querySelector(".language-entries");
  const newEntry = document.createElement("div");
  newEntry.className = "language-entry";
  newEntry.innerHTML = `
             <div class="form-group">
                <label for="languageName">Language:</label>
                <input type="text" id="languageName" />
              </div>
              <div class="form-group">
                <label for="languagePercentage">Percentage:</label>
                <input type="number" id="languagePercentage" />
              </div>
              <button class="removeBtn" onclick="this.parentElement.remove(); updateResume()">Remove</button>
    `;
  languageEntries.appendChild(newEntry);
  addInputListeners(newEntry);
}

// add experience

document
  .getElementById("addExperience")
  .addEventListener("click", addExperience);

function addExperience() {
  const experienceEntries = document.querySelector(".experience-entries");
  const newEntry = document.createElement("div");
  newEntry.className = "experience-entry";
  newEntry.innerHTML = `
            <div class="form-group">
                <label for="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" />
              </div>
              <div class="form-group">
                <label for="company">Company</label>
                <input type="text" id="company" />
              </div>
              <div class="form-group">
                <label for="jobDates">Dates</label>
                <input type="text" id="jobDates" />
              </div>
              <div class="form-group">
                <label for="jobDescription">Description</label>
                <input type="text" id="jobDescription" />
              </div>
              <button class="removeBtn" onclick="this.parentElement.remove(); updateResume()">Remove</button>
    `;
  experienceEntries.appendChild(newEntry);
  addInputListeners(newEntry);
}

// add skills
document.getElementById("addSkills").addEventListener("click", addSkills);

function addSkills() {
  const skillsEntries = document.querySelector(".skills-entries");
  const newEntry = document.createElement("div");
  newEntry.className = "skills-entry";
  newEntry.innerHTML = `
            <div class="form-group">
                <label for="skillName">Skill</label>
                <input type="text" id="skillName" />
              </div>
              <div class="form-group">
                <label for="skillPercentage">Percentage</label>
                <input type="number" id="skillPercentage" />
              </div>
              <button class="removeBtn" onclick="this.parentElement.remove(); updateResume()">Remove</button>
    `;
  skillsEntries.appendChild(newEntry);
  addInputListeners(newEntry);
}

document.getElementById("fullName").value = "Khalid Rahman Hanify";

document.getElementById("professionTitle").value = "Web Developer";

document.getElementById("userPhone").value = "+93786453245";

document.getElementById("userEmail").value = "someone@gmail.com";

document.getElementById("userWebsite").value = "yourwebsite.com";

document.getElementById("userLocation").value = "Kabul, Afg";
updateResume();

function generatePDF() {
  const { jsPDF } = window.jspdf;
  document.querySelector(".personal-info-preview").style.borderRadius = 0;
  document.querySelector(".detailed-info-preview").style.borderRadius = 0;

  const resume = document.getElementById("resume");

  html2canvas(resume, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height to match width

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf"); // Download the PDF
  });
}

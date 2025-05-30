const toggleBtn = document.querySelector('.header-theme-button');
const modeLabel = document.querySelector('.header-theme-value');
const headerTextEls = document.querySelectorAll('.header-text');
const headerEl = document.querySelector('.header');
const modeSelect = document.querySelector('.header-mode-value');
const mainContent = document.querySelector('.main-content'); // Add this

toggleBtn.addEventListener('click', () => {
  const isDarkMode = toggleBtn.classList.toggle('dark-mode');

  // Toggle dark mode on body, header, select dropdown, and main content
  document.body.classList.toggle('dark', isDarkMode);
  headerEl.classList.toggle('dark', isDarkMode);
  modeSelect.classList.toggle('dark', isDarkMode);
  mainContent.classList.toggle('dark', isDarkMode); // Toggle main content dark mode

  // Update the mode label
  modeLabel.textContent = isDarkMode ? 'Dark' : 'Light';

  // Toggle class on all header-text elements
  headerTextEls.forEach(el => el.classList.toggle('dark', isDarkMode));
});



const imageUploadInput = document.getElementById('image-upload');
const imagePreview = document.querySelector('.image-preview');

imageUploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      imagePreview.src = event.target.result;
      imagePreview.style.display = 'block'; // show the image
    }
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = 'none'; // hide if no file
  }
});

const imageInput = document.getElementById("image-upload");
const questionInput = document.getElementById("question-input");
const askButton = document.getElementById("ask-button");
const responseOutput = document.getElementById("response-output");


let imageBlob = null;

// Handle image preview
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  imageBlob = file;

  const reader = new FileReader();
  reader.onload = () => {
    imagePreview.innerHTML = `<img src="${reader.result}" alt="Preview" style="max-width: 100%; border-radius: 8px;" />`;
  };
  reader.readAsDataURL(file);
});

// Handle asking the question
askButton.addEventListener("click", async () => {
  const question = questionInput.value;
  if (!imageBlob || !question) {
    alert("Please upload an image and enter a question.");
    return;
  }

  responseOutput.textContent = "Thinking...";

  const formData = new FormData();
  formData.append("image", imageBlob);
  formData.append("question", question);

  try {
    const res = await fetch("https://api-inference.huggingface.co/models/deepset/vilt-b32-finetuned-vqa", {
      method: "POST",
      headers: {
        Authorization: "Bearer YOUR_HUGGINGFACE_API_TOKEN" // Replace this
      },
      body: formData
    });

    const result = await res.json();

    if (result && result.answer) {
      responseOutput.textContent = "AI Answer: " + result.answer;
    } else {
      responseOutput.textContent = "Sorry, no clear answer found.";
      console.log(result);
    }
  } catch (err) {
    responseOutput.textContent = "Error connecting to AI.";
    console.error(err);
  }
});

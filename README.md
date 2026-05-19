# 📸 Image Gallery App

A responsive and dynamic **Image Gallery Web App** built using **React, Axios, and the Picsum API**.
This project fetches random high-quality images from the API and displays them in a clean card-based layout with pagination support.

---

## 🚀 Features

* 🖼️ Fetches images dynamically using API calls
* ⚡ Built with React functional components and hooks
* 🔄 Pagination with **Next** and **Previous** buttons
* 📡 Uses Axios for API handling
* 📱 Responsive image gallery layout
* ⏳ Loading state while fetching images
* 🎨 Clean and minimal UI design

---

## 🛠️ Tech Stack

* **React**
* **JavaScript**
* **Axios**
* **CSS**
* **Picsum Photos API**

---

## 📂 Project Structure

```bash
src/
│── components/
│   └── card.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## ⚙️ How It Works

* The app fetches images from the **Picsum Photos API** using Axios.
* Images are displayed as cards using a reusable `Cards` component.
* Users can navigate through different pages using:

  * **Next Button** → Loads next set of images
  * **Prev Button** → Loads previous set of images
* React `useEffect` automatically fetches new images whenever the page index changes.

---

## 🔗 API Used

* Picsum Photos API
  `https://picsum.photos/v2/list?page=1&limit=30`

---

## 💻 Installation & Setup

Clone the repository:

```bash
git clone <your-repo-link>
```

Navigate to the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 📸 Future Improvements

* ❤️ Add favorite/save image feature
* 🔍 Search images by category
* 🌙 Dark mode support
* 📥 Download image option
* ♾️ Infinite scrolling

## 👩‍💻 Author

Made with ❤️ by **Shreya**

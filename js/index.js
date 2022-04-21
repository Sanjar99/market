const list = document.querySelector(".articles_list");
const val = document.querySelector("#search");

data.forEach(function (film) {
  var item = document.createElement("li");
  item.classList.add("articles_item");

  var imgBox = document.createElement("div");
  imgBox.classList.add("articles_img_box");
  film.images.forEach(function (img) {
    var images = document.createElement("img");
    images.classList.add("articles_img");
    images.src = img;
    images.alt = "img-4";
    imgBox.append(images);
  });

  var wrapper = document.createElement("div");
  wrapper.classList.add("articles_wrapper");

  var subject = document.createElement("h5");
  subject.classList.add("articles_subject");
  subject.textContent = film.subject;

  var articlesBox = document.createElement("div");
  articlesBox.classList.add("articles_box");

  var text = document.createElement("p");
  text.classList.add("articles_text");
  text.textContent = film.text;

  var btn = document.createElement("button");
  btn.textContent = "Развернуть  ▼";
  btn.classList.add("articles_btn");

  item.append(imgBox);
  item.append(wrapper);
  wrapper.append(subject);
  wrapper.append(articlesBox);
  articlesBox.append(text);
  wrapper.append(btn);
  list.append(item);
});

function change() {
  list.innerHTML = "";
  let searchValue = val.value;
  if (searchValue) {
    let searchValue = val.value;
    let filterData = data.filter(function (a) {
      return a.subject === searchValue;
    });
    filterData.forEach(function (film) {
      var item = document.createElement("li");
      item.classList.add("articles_item");

      var imgBox = document.createElement("div");
      imgBox.classList.add("articles_img_box");
      film.images.forEach(function (img) {
        var images = document.createElement("img");
        images.classList.add("articles_img");
        images.src = img;
        images.alt = "img-4";
        imgBox.append(images);
      });

      var wrapper = document.createElement("div");
      wrapper.classList.add("articles_wrapper");

      var subject = document.createElement("h5");
      subject.classList.add("articles_subject");
      subject.textContent = film.subject;

      var articlesBox = document.createElement("div");
      articlesBox.classList.add("articles_box");

      var text = document.createElement("p");
      text.classList.add("articles_text");
      text.textContent = film.text;

      var btn = document.createElement("button");
      btn.textContent = "Развернуть  ▼";
      btn.classList.add("articles_btn");

      item.append(imgBox);
      item.append(wrapper);
      wrapper.append(subject);
      wrapper.append(articlesBox);
      articlesBox.append(text);
      wrapper.append(btn);
      list.append(item);
    });
  } else {
    data.forEach(function (film) {
      var item = document.createElement("li");
      item.classList.add("articles_item");

      var imgBox = document.createElement("div");
      imgBox.classList.add("articles_img_box");
      film.images.forEach(function (img) {
        var images = document.createElement("img");
        images.classList.add("articles_img");
        images.src = img;
        images.alt = "img-4";
        imgBox.append(images);
      });

      var wrapper = document.createElement("div");
      wrapper.classList.add("articles_wrapper");

      var subject = document.createElement("h5");
      subject.classList.add("articles_subject");
      subject.textContent = film.subject;

      var articlesBox = document.createElement("div");
      articlesBox.classList.add("articles_box");

      var text = document.createElement("p");
      text.classList.add("articles_text");
      text.textContent = film.text;

      var btn = document.createElement("button");
      btn.textContent = "Развернуть  ▼";
      btn.classList.add("articles_btn");

      item.append(imgBox);
      item.append(wrapper);
      wrapper.append(subject);
      wrapper.append(articlesBox);
      articlesBox.append(text);
      wrapper.append(btn);
      list.append(item);
    });
  }
}

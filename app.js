const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  // console.log(input) Kontrol etmek amaçlı baktık 
  const tags = input.split(",").filter((tag) => tag.trim() !== "").map((tag) => tag.trim())
  // console.log(tags)


  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag
    tagsEl.appendChild(tagEl);
  })
}

// split bölme işlemi yapar böldüğü string bir ifadeyi arraya çevirir 

// filter ise yeni bir dizi içerisinden yeni bir dizi döndürür 
// map ile de diziyi alıp başka bir diziye dönüştürdük


function randomSelect() {
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    HighlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      HighlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag")
  return tags[Math.floor(Math.random() * tags.length)]
}


function HighlightTag(tag) {
  tag.classList.add("higlight")
}


function unHighlightTag(tag) {
  tag.classList.remove("higlight")
}
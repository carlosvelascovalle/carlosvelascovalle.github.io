function toggleMenu() {
  const toggleMenu = document.getElementsByClassName("toggle")[0];
  const sidebar = document.getElementsByClassName("sidebar")[0];
  toggleMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
}

let habilidades = [
  {
    title: "Gestión del Tiempo",
    image: "time-management",
    habilidad: "blanda",
  },
  {
    title: "Resolución de Problemas",
    image: "problem-solving",
    habilidad: "blanda",
  },
  {
    title: "Mente abierta",
    image: "open-mind",
    habilidad: "blanda",
  },
  {
    title: "tolerancia a la presión",
    image: "patience",
    habilidad: "blanda",
  },
  {
    title: "HTML",
    image: "html5-brands",
    habilidad: "dura",
  },
  {
    title: "CSS & SCSS",
    image: "css3-alt-brands",
    habilidad: "dura",
  },
  {
    title: "JS",
    image: "js-square-brands",
    habilidad: "dura",
  },
  {
    title: "Angular",
    image: "angular-brands",
    habilidad: "dura",
  },
  {
    title: "Java & Spring",
    image: "java-brands",
    habilidad: "dura",
  },
  {
    title: "mysql",
    image: "mysql",
    habilidad: "dura",
  },
  {
    title: "firebase",
    image: "firebase",
    habilidad: "aprendiendo",
  },
  {
    title: "node-js",
    image: "node-brands",
    habilidad: "aprendiendo",
  },
  {
    title: "git",
    image: "github-brands",
    habilidad: "aprendiendo",
  },
  {
    title: "python",
    image: "python-brands",
    habilidad: "aprendiendo",
  },
];

(function () {
  const $numSkillsType = document.getElementsByClassName("card-content").length;
  for (let i = 0; i < $numSkillsType; i++) {
    const $skills = document.getElementsByClassName("card-content")[i];
    $habilityType = $skills.getAttribute("class").split(" ")[1];
    $template = document.getElementById(
      "template ".concat($habilityType)
    ).content;
    $fragment = document.createDocumentFragment();

    habilidades
      .filter((x) => x.habilidad == $habilityType)
      .forEach((el) => {
        $template
          .querySelector("img")
          .setAttribute("src", "img/SVG/" + el.image + ".svg");
        $template.querySelector("img").setAttribute("alt", el.image);
        $template.querySelector("h2").textContent = el.title;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });
    $skills.appendChild($fragment);
  }
})();

const text = document.querySelector(".about-imgBox-text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
  )
  .join("");

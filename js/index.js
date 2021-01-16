function toggleMenu() {
    const toggleMenu = document.getElementsByClassName('toggle')[0];
    const sidebar = document.getElementsByClassName('sidebar')[0];
    toggleMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
}

let habilidades = [

    [{
        title: 'Gestión del Tiempo',
        image: 'time-management',
    }, {
        title: 'Resolución de Problemas',
        image: 'problem-solving',
    }, {
        title: 'Mente abierta',
        image: 'open-mind',
    }, {
        title: 'tolerancia a la presión',
        image: 'patience',
    }],

    [{
        title: 'HTML',
        image: 'html5-brands',
    }, {
        title: 'CSS & SCSS',
        image: 'css3-alt-brands',
    }, {
        title: 'JS',
        image: 'js-square-brands',
    }, {
        title: 'Angular',
        image: 'angular-brands',
    }, {
        title: 'Java & Spring',
        image: 'java-brands',
    }, {
        title: 'mysql & firebase',
        image: 'database-solid',
    }],

    [{
        title: 'node-js',
        image: 'node-brands',
    }, {
        title: '',
        image: '',
    }, {
        title: '',
        image: '',
    }, {
        title: '',
        image: '',
    }, {
        title: '',
        image: '',
    }, {
        title: '',
        image: '',
    }]
];

function skills(template,id) {
    const $skills = document.getElementsByClassName("card-content")[id];
    $template = document.getElementById(template).content;
    $fragment = document.createDocumentFragment();


    habilidades[id].forEach((el) => {
        $template.querySelector("img").setAttribute("src", 'img/SVG/' + el.image + '.svg');
        $template.querySelector("img").setAttribute("alt", el.image);
        $template.querySelector("h2").textContent = el.title;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });
    $skills.appendChild($fragment);
}

skills('template-soft', 0);
skills('template-hard', 1);
skills('template-learning', 2);
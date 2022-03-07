let pokemonRepository = (function () {
  let t = [],
    e = "https://pokeapi.co/api/v2/pokemon/?limit=500";
  return {
    getAll: function () {
      return t;
    },
    addListItem: function (t) {
      let e = document.querySelector(".pokemon-list");
      e.classList.add("col"), e.classList.add("group-list");
      let n = document.createElement("li");
      n.classList.add("group-list-item");
      let o = document.createElement("button");
      (o.innerText = t.name),
        o.classList.add("button-class"),
        o.setAttribute("data-target", "#exampleModal"),
        o.setAttribute("data-toggle", "modal"),
        o.classList.add("btn-dark"),
        n.appendChild(o),
        e.appendChild(n),
        o.addEventListener("click", function () {
          !(function (t) {
            (function (t) {
              let e = t.detailsUrl;
              return fetch(e)
                .then(function (t) {
                  return t.json();
                })
                .then(function (e) {
                  (t.imageUrl = e.sprites.front_default),
                    (t.height = e.height),
                    (t.types = e.types);
                })
                .catch(function (t) {
                  console.error(t);
                });
            })(t).then(function () {
              !(function (t) {
                let e = $(".modal-body");
                let n = $(".modal-header");
                $(".modal-header").empty(), n.empty(), e.empty();
                let o = $("<h5>" + t.name + "</h5>"),
                  i = $('<img class="modal-img" style="width:75%">');
                i.attr("src", t.imageUrl);
                let a = $("<p>height - " + t.height + " in" + "</p>"),
                  l = $(
                    "<p> types - " +
                      t.types.map((t) => t.type.name).join(",") +
                      "</p>"
                  );
                n.append(i), e.append(o), e.append(a), e.append(l);
              })(t);
            });
          })(t);
        });
    },
    loadList: function () {
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            !(function (e) {
              t.push(e);
            })({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
}),
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  }),
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=500")
    .then(function (t) {
      return t.json();
    })
    .then(function (t) {
      console.log(t);
    })
    .catch(function () {});

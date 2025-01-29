document.querySelector("#moon"),
  document.querySelector("#sun"),
  document.querySelector(".brightness"),
  document.querySelector("body");
const e = document.querySelector(".hamberg");
document.querySelector(".sidebar"),
  document.addEventListener("DOMContentLoaded", () => {
    let t = document.querySelectorAll("section");
    document.querySelectorAll(".home-link").forEach((e) => {
      e.addEventListener("click", (e) => {
        e.preventDefault();
        let a = e.target.getAttribute("href"),
          n = document.querySelector(a);
        t.forEach((e) => {
          e === n
            ? (e.classList.remove("hidden"),
              e.scrollIntoView({ behavior: "smooth" }),
              setTimeout(() => {
                e.scrollIntoView({ behavior: "smooth" });
              }, 100))
            : e.classList.add("hidden");
        });
      });
    });
    let a = document.querySelector(".navbar"),
      n = document.querySelector(".hamberg1");
    e &&
      a &&
      e.addEventListener("click", () => {
        (e.style.visibility = "hidden"),
          (n.style.visibility = "visible"),
          a.classList.toggle("activate");
      }),
      n &&
        n.addEventListener("click", () => {
          (e.style.visibility = "visible"),
            (n.style.visibility = "hidden"),
            a.classList.toggle("activate");
        }),
      a &&
        a.addEventListener("click", (t) => {
          ("I" === t.target.id ||
            ("home-link" === t.target.className &&
              window.innerWidth <= 1524)) &&
            (a.classList.toggle("activate"),
            (e.style.visibility = "visible"),
            (n.style.visibility = "hidden"));
        });
    let l = [
        { key: "Name:", value: "Prajwal&nbspP&nbspS" },
        { key: "Email:", value: "prajwalberpadka@gmail.com" },
        { key: "Phone:", value: "+91&nbsp8296080682" },
        { key: "City:", value: "Sullia, Karnataka" },
        { key: "Degree:", value: "Bachelor's" },
        { key: "Age:", value: "19" },
        { key: "Freelance:", value: "Available" },
      ],
      s = document.getElementById("profile"),
      i = document.getElementById("profileHead"),
      r = 0,
      c = 0,
      o = 0;
    (i.innerHTML += '<span class="datatype">Const</span>'),
      (i.innerHTML += '<span class="var">Profile</span>'),
      (i.innerHTML += '<span class="equalto">=</span>'),
      (i.innerHTML += '<span class="specialchar">{</span>'),
      (function e() {
        if (r < l.length) {
          let t = l[r];
          c < t.key.length
            ? ((s.innerHTML += `<span class="key">${t.key[c]}</span>`),
              c++,
              setTimeout(e, 100))
            : o < t.value.length
            ? (0 === o && (s.innerHTML += '<span class="specialchar">"</span>'),
              "&" === t.value[o] && ((s.innerHTML += "&nbsp;"), (o += 5)),
              (s.innerHTML += ` <span class="value">${t.value[o]}</span>`),
              ++o === t.value.length &&
                (s.innerHTML += '<span class="specialchar">"</span>'),
              setTimeout(e, 100))
            : ((s.innerHTML += '<span class="specialchar">,</span>'),
              (s.innerHTML += "<br>"),
              7 == ++r && (s.innerHTML += '<div class="specialchar">};</div>'),
              (c = 0),
              (o = 0),
              setTimeout(e, 1e3));
        } else
          setTimeout(() => {
            (s.innerHTML = ""), (r = 0), e();
          }, 2e3);
      })();
  });
//# sourceMappingURL=index.48a25d77.js.map
